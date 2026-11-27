---
title: "Program Resume Protocol"
canonical_url: https://www.superlogical.com/rex/docs/build/program-resume
---

# Program Resume Protocol (OSC 7577)

A terminal escape sequence that lets a program tell the terminal how to
resume it after a terminal restarts for any reason. Program resumption
is a hint, not a guarantee; terminals may ignore or reject reports for
any reason.

This specification describes a uniform way that programs can report
their resume commands and a uniform way that these resume commands are
executed so that programs can confidently build resume functionality.

This specification does not prescribe the exact logic for terminals to
accept or reject reports. There are significant security implications
for program resume and this specification allows terminals significant
discretion to choose a trust model that works best for them. Suggestions
are given in [Threat model](#threat-model).

**Note:** This is a generic terminal protocol. While it is used for rich
functionality within Rex, the protocol itself has no
Superlogical-specific functionality or language. It fills a broad need
within terminal applications.

## Overview

This section gives a quick overview of the protocol. Details about all
behaviors follow.

On the reporting side, a program reports how it can resume using an OSC
7577 sequence with its argument list, an owning pid, the current time,
and a hash that proves it knows a token the terminal supplied.

```
# Neovim, after it has saved a session file. The command decodes
# to "nvim", "-S", "/home/user/.local/state/nvim/sessions/8f2c1d.vim".
ESC ] 7577 ; pid=74877:time=1795543200:argv=bnZpbQ==,LVM=,L2hvbWUvdXNlci8ubG9jYWwvc3RhdGUvbnZpbS9zZXNzaW9ucy84ZjJjMWQudmlt:mac=9dbb99bfb856749a87563839d7ce9062818d78cf25909db93f309e0cd3b1909b ESC \
```

On the terminal side, the terminal verifies the hash and decides
whether to accept or reject this report (see [Records](#records)). After
a restart, if the terminal decides to resume, it executes the given
command in the environment of the user's shell (see
[Restoring](#restoring)).

There are significant security risks involved in program resume. The
systems provided to a terminal (environment variables, in-band signaling
via a pty, process hierarchies via operating system APIs, etc.) do not
give a robust foundation for trust.

For this reason, this specification documents a threat model (see
[Threat model](#threat-model)) and makes recommendations for trust, but
allows terminals to make their own logic on both accepting a report and
deciding to resume.

The primary contribution this specification makes to the terminal
ecosystem is defining a consistent way for programs to designate their
ability to resume.

## Motivation

Users often spend time carefully setting up their workspace: layouts and
open files in an editor, the right view or state in something like a Git
TUI, long-running history in interactive environments like debuggers,
REPLs, or coding agents.

In most terminals, a restart (update, crash, reboot, etc.) ends the
running programs and presents the user with their default state such as
an empty shell again. Some terminals restore the non-program state such
as layout, working directories, or scrollback, but most don't restore
the actual running programs.

Some users mitigate this through a layer of indirection by running a
nested terminal within their terminal (such as screen or tmux) to detach
their lifecycles from each other. But when that nested terminal itself
ends, such as at a reboot, the same problem emerges.

Some programs and external tools solve this today through hardcoded
lists, process name matching, or custom APIs outside the terminal pty.
[Relationship to other approaches](#relationship-to-other-approaches)
compares these approaches with this protocol.

With the Program Resume Protocol (OSC 7577), the program that knows how
to resume itself tells the terminal the command to run, and the terminal
can choose to run it on restart.

## Conventions

The key words MUST, MUST NOT, SHOULD, and MAY are used as described in
RFC 2119 and RFC 8174, and only when they appear in capitals.

| Name | Bytes |
| --- | --- |
| `ESC` | `0x1B` |
| `OSC` | `ESC ]`, that is `0x1B 0x5D` |
| `ST` | `ESC \`, that is `0x1B 0x5C`, or `BEL`, that is `0x07` |

A **terminal** is one window, tab, split, or pane attached to one
pseudo-terminal. Rules that say "the terminal" apply to each one
separately and are implemented by whatever emulates it. A **program**
writes to a terminal. A **report** is one sequence sent by a program. A
**record** is what the terminal stores as a result of a report.

A report is **ignored** when it has no effect at all. A report is
**rejected** when the terminal has verified it, does not accept it, and
removes the records of its owner (see [Records](#records)).

This specification is written with POSIX terminology and concepts, and
doesn't explicitly define how its rules apply on other systems such as
Windows. In all cases, apply the same concepts. If there are places that
are unclear, we may update the specification to be explicit about it.

## Syntax

```
OSC 7577 ; body ST

body     := pair (":" pair)* ":mac=" hex
pair     := key "=" value
key      := [a-z]+
value    := [A-Za-z0-9_.,+/=-]*
hex      := [0-9a-f]{64}
```

- The body is a list of `key=value` pairs separated by `:` and nothing
  else. The value character set excludes `:` and `;`, so nothing needs
  escaping.
- The body ends with the `mac` key. A terminal verifies the `mac` and
  the `time` before anything else, and MUST ignore a report that fails
  either check (see [`mac`](#mac) and [`time`](#time)).
- The body is parsed strictly. A terminal MUST reject the whole report
  if a pair is malformed, a key repeats, a value does not fit its key, a
  required key is missing, the report exceeds a limit the terminal
  enforces (see [Limits](#limits)), base64 does not decode, or decoded
  text is not valid UTF-8 or contains a control character.
- Unknown keys MUST be ignored, unless `need` specifies them. This is
  how the protocol is extended.
- A body of `?` is reserved for future use. Terminals MUST ignore it.

## Keys

Every report has three required keys:

| Key | Value | Notes |
| --- | --- | --- |
| `pid` | `[1-9][0-9]*` | Required. The owning process. This may not match the reporting process. See [`pid`](#pid). |
| `time` | `[1-9][0-9]*` | Required. When the report was made, in seconds since the Unix epoch. See [`time`](#time). |
| `mac` | `[0-9a-f]{64}` | Required. A hash of the rest of the body and the token. It MUST be the last key. See [`mac`](#mac). |

The `mac` key MUST be last. The other keys can come in any order. A
terminal MUST ignore a report that does not end with the `mac` key.

The following keys can also appear:

| Key | Value | Notes |
| --- | --- | --- |
| `argv` | base64 elements joined by `,` | Required unless `clear` is present. The resume command that brings the program back. It has at least one element. The first element is the program to execute. The resumed program also receives it as its own name. It is a bare command name or an absolute path. A bare command name cannot start with `-`. A bare command name is looked up on PATH when the program is resumed. The lookup uses the PATH of the environment the command is started in (see [Command execution](#command-execution)), not the PATH of the reporting process. Shell aliases, functions, and builtins are not part of it. An absolute path is not required because the location of a program can change, for example when it is updated. Relative paths are not allowed. |
| `cwd` | base64 | Optional. The working directory to resume the program in. It is an absolute path, encoded as base64. Relative paths are not allowed. See [Working directory](#working-directory). |
| `clear` | `1` | Removes the matching record. A program SHOULD send this when it should no longer be resumed, because not every terminal can detect when a process exits. A report has exactly one of `argv` and `clear`. |
| `need` | key names joined by `,` | Optional. Keys the terminal has to implement for this report to be accepted. A terminal that does not implement one of them MUST reject the report. This exists so that future protocol versions can introduce new keys without an older terminal ignoring them, since they may be semantically meaningful. |

Each element of `argv` is standard base64 of UTF-8 text. Padding is
optional. The decoded text MUST NOT contain control characters (`U+0000`
to `U+001F`, `U+007F`, `U+0080` to `U+009F`). The same rules apply to
`cwd`. This keeps a command simple to handle: it can be stored and
passed to a shell as lines of text, and it can be started by terminals
and shells whose strings are Unicode. It does not make a command safe to
display. A terminal that shows a resume command to the user MUST escape
it first, because characters that are allowed here, such as a
right-to-left override, can still mislead.

A command with an argument that breaks these rules, such as one
containing a newline, cannot be reported. A program whose command
changes to one that cannot be reported SHOULD send `clear`, so that the
earlier command is not resumed in its place.

An empty element is an empty argument. It is allowed anywhere except as
the first element, so `argv=` with no value is rejected. An element that
has padding MUST have the correct amount. Decoded bytes that are not
valid UTF-8 are rejected.

**There is no way to send environment variables.** An environment saved
at report time may be stale by the time a program is resumed, and it may
contain secrets that shouldn't be stored. A restored program gets the
environment the terminal starts it in, which can differ from the one it
was reported in. A program that needs specific values should specify
them as part of its `argv` (see
[The resume command](#the-resume-command)).

### `pid` Key

Every report has a required `pid` key specifying the owning process. The
owning process is the program that the resume command brings back. This
is usually the process sending the report, but a helper such as a
wrapper script or a hook can send a report on behalf of another program
by using that program's pid.

The `pid` key serves two roles: validation (not security) and lifetime.

For validation, the terminal SHOULD use the `pid` as a way to accept or
reject a report. A terminal that cannot look up processes MAY skip this.
For example, a terminal might check that the reported `pid` is alive,
that it runs as the same user as the terminal, that its controlling
terminal matches the terminal's pseudo-terminal, or that it matches or
is a descendant of the original process the terminal launched.

For lifetime, the terminal SHOULD clear a record if the associated `pid`
exits for any other reason than the terminal itself closing. A record
only makes sense while its owning process is still running in the
terminal. Once that process exits on its own, there is nothing left to
resume. This enables records to clear themselves when the owning process
exits without gracefully sending a `clear` report.

A terminal SHOULD treat an owning process that exited shortly before the
terminal ended as still running. At logout or shutdown a program can
exit just before the terminal does, and a record cleared at once would
leave nothing to resume. One way to do this is to store when the owner
exited and decide when restoring. A second or two is enough. A longer
time brings back programs that the user quit just before the terminal
ended.

A pid can be given to a new process after the old one exits. A terminal
SHOULD also remember when the owning process started, and treat a
process with the same pid and a different start time as gone.

The `pid` key is not a form of security. It isn't possible to robustly
prove that the sending program matches the `pid` so it is trivial to
impersonate.

### `time` Key

Every report has a required `time` key. It is the time the report was
made, in seconds since the Unix epoch.

A terminal MUST ignore a report whose `time` differs from the terminal's
own clock by more than a window the terminal chooses. The window SHOULD
be 60 seconds. This prevents replay attacks from sources such as terminal
capture programs.

A report that reaches the terminal after its `time` has left the window,
for example because output was stopped, is ignored. A program that
reports again builds a new report with the current time and does not
send a saved one again. A `time` that is too large for the terminal to
represent fails this check, and the report is ignored.

A terminal MUST also ignore a report whose `time` is earlier than that of
the last report it accepted for the same `pid`. This stops an earlier
report from replacing a later one inside the window. Terminal sequences
are strictly ordered so sequencing is guaranteed.

This specification is for program resume on the same machine, so the
program and the terminal should read the same system clock.

### `mac` Key

Every report ends with a `mac` key. It proves that the sender knows the
token without sending the token (see [Token environment
variable](#token-environment-variable)).

The `mac` is the SHA-256 hash of these bytes, in this order, written as
64 hexadecimal characters:

1. Every byte of the body before the final `:mac=`, exactly as sent.
   This excludes the OSC opener (it is just the _body_ of the OSC
   sequence).
2. One `:`.
3. The token.

For example, with the token `dummy-token-replace-me`, the `mac` of a
report whose other keys are `pid=74877:time=1795543200:clear=1` is the
SHA-256 hash of this text:

```
pid=74877:time=1795543200:clear=1:dummy-token-replace-me
```

A terminal MUST compute the same hash over the bytes it received and
MUST ignore the report if the result differs from the `mac`. It does
this before it decodes or validates any other key.

A terminal can only verify a report it received whole. A report that was
cut short, or that is longer than the terminal's parser can hold, MUST
be ignored.

The `mac` is a plain SHA-256 hash with the token at the end. It is not
an HMAC (RFC 2104). An HMAC needs more than a hash tool, and the common
way to compute one in a shell puts the token on a command line, where
other users can see it. A plain hash needs only a tool such as
`sha256sum`, and the token goes in on standard input. The token comes
last so that knowing one `mac` does not let anyone compute the `mac` of
a longer body.

## Feature detection

The feature is supported if the `OSC7577_TOKEN` environment
variable is present.

There is no query and no reply. A program that does not find the
variable has no token to compute a `mac` with, so it does not send a
report.

Program resumption is a hint and is always at the discretion of the
terminal. A terminal that supports program resumption does not have to
resume. A program cannot treat support for the feature as a guarantee of
any kind of resumption.

## Token environment variable

The terminal MUST set `OSC7577_TOKEN` in the environment of the
first process on each pseudo-terminal and reports from programs MUST
contain a `mac` computed with it to be accepted.

The token is a security measure that prevents raw outputted text or
remote hosts from registering resume commands. This makes it safe to
`cat` a file, tail a log, or run programs over `ssh`. Without the token,
raw text could cause malicious resumes, remote hosts could trigger local
execution.

The threat model the token addresses is untrusted text and remote
output. Environment variables are readable on some systems by other
processes running as the same user (for example via
`/proc/<pid>/environ` on Linux) and root. The threat model does not
cover this case.

The token MUST be between 22 and 64 characters of `[A-Za-z0-9_-]`. It
MUST be random, and MUST NOT be built from a value that can be guessed
such as a counter, a time, or a process ID. It SHOULD come from a
cryptographically secure random source. 22 characters is 128 bits when
the token uses the whole character set. A report with a wrong `mac` is
ignored with no specified penalty, and anyone who sees a report can try
tokens against its `mac` for as long as they like, so the length and
quality is critical to security.

The terminal MUST verify the `mac` key on reports using the token value
set in the initial environment for that terminal.

Additional token notes:

- Each terminal MUST create its own token, and a new one every time it
  starts. Two panes never share a token.
- The terminal MUST NOT pass on a token from its own environment. A
  nested terminal such as a multiplexer sets its own token for each
  pane.
- The terminal MUST NOT expose the token in any way except for the
  initial program's environment.
- Additional security checks and requirements for the reporting program
  (see [Security](#security)) prevent common cases of leaked tokens
  causing any issues.

## Records

An accepted report turns into a record. A record is the state the
terminal stores as a result of an accepted report.

A record is part of what a terminal restores. A terminal SHOULD discard
a record when the user closes that terminal on purpose, for example by
closing its tab. A terminal SHOULD keep it when the terminal ends for
any other reason, including when the user quits or restarts the whole
application.

Before it accepts a report, a terminal MUST verify the `mac` (see
[`mac`](#mac)) and the `time` (see [`time`](#time)) and SHOULD validate
the `pid` (see [`pid`](#pid)). A terminal MAY reject a report for any
other reason.

A report that fails the `mac` or `time` check is always completely
ignored and has no effect on the terminal. The terminal cannot know who
sent it, so it MUST NOT remove or change any record because of it. This
includes a report the terminal did not receive whole.

A terminal MUST remove all records associated with an owner when it
rejects a report for that owner. A report can only be rejected after it
has passed the `mac` and `time` checks. This rule exists because a
rejected report still means the program's resume command has changed.
For example, if a program reports a new command with more elements than
the terminal allows, keeping the old record would resume the program
with a command that is no longer correct. A report with no usable `pid`
has no owner, so there is nothing to remove. This includes a `pid` that
is too large for the terminal to represent.

Other notes about Records:

- A terminal running as root or with elevated rights SHOULD NOT accept
  reports without an explicit opt-in by a user. The risk of resuming
  programs as an elevated user is too great.

- A terminal SHOULD NOT remove a record for any other terminal escape
  sequence such as a full reset (RIS), a soft reset (DECSTR), switching
  to or from the alternate screen, erasing the display or scrollback,
  and prompt marks (OSC 133). These sequences are not protected by a
  token, so any displayed text can send them, and it breaks our threat
  model if we allow these sequences to alter resume state.

- Besides what is specified in this document, a terminal MAY store
  records however it wants. A simple terminal may choose a
  "last-write-wins" approach to record storage. A terminal that is aware
  of process hierarchies may store multiple records and prefer parents
  over children. A last-write-wins terminal cannot tell a parent from a
  child or see a process exit. It depends on programs removing the token
  from their children and sending `clear`. This detail is purposely not
  specified to give terminals broad authority in how they store records
  and how they choose what and when to restore.

## Restoring

Program resumption is a hint and whether and when a terminal restores is
up to the terminal. This section specifies the expected behavior if a
terminal does restore.

### Record choice

A terminal that is aware of process hierarchies SHOULD prefer the record
of an ancestor over the record of its descendant. A program that reports
is expected to bring back what it started (see [Security](#security)),
and a descendant may not make sense outside the ancestor it ran in.

If a terminal has multiple records whose owners are not ancestors of one
another (for example a shell with several stopped programs), the
terminal MAY choose zero, one, or multiple records to resume. A
pseudo-terminal has one foreground job, so a terminal resumes at most
one record in the foreground of each one.

### Command execution

A terminal SHOULD start the command in the environment of the shell it
would normally start for the user, after that shell's startup files have
run. Startup files are often what set `PATH` and other variables a
program depends on. A program started without them may not behave as
expected.

Startup files can ask a question, take a long time, or replace the shell
with another program. A terminal should run them on the pseudo-terminal
the command will use, where the user can see and answer them, and not in
a hidden process.

Each element of `argv` MUST reach the program as one argument,
unchanged. A terminal MUST NOT build shell source text from any part of
an element. An argument such as `$(reboot)` or `a; b` is text and must
remain text.

These two requirements don't conflict: a shell can set up the
environment and then run the command from a list of arguments without
ever parsing it. How to do this differs between shells. In most shells a
function or builtin with the same name would run in place of the
program. A terminal SHOULD prevent this, so that the program found on
`PATH` is what runs. A builtin such as `eval` would otherwise make the
shell parse the later elements.

A terminal MUST resume a record as the same user it ran as when it
accepted the report. If the user is different, the terminal MUST discard
the record. Otherwise one user's command would run with another user's
rights.

A terminal that saves records, for example in a file, MUST make sure
other users cannot read or change them. A saved record is as sensitive
as a shell startup file, and its arguments may contain secrets.

A terminal that saves records SHOULD save each record, and each removal,
when it happens. A terminal that crashes has no chance to save.

A terminal SHOULD start the command the way the program was running. If
the owning process was the first process on the pseudo-terminal, the
command is the first process again. Otherwise the command SHOULD be the
foreground job of the user's shell. Without a shell above it, the
program cannot be suspended, and the terminal has nothing to return the
user to when it exits.

Running the command as a job of the user's shell takes care. The
following is advice, not a requirement:

- The command should start from inside the interactive shell, at its
  first prompt. A shell started with `-c` to run the command exits when
  the program is suspended, and it never runs hooks that are tied to the
  prompt, such as the ones `direnv` installs.
- The arguments should reach the shell as data it uses once, such as a
  file it removes after reading. An environment variable is passed on to
  whatever a startup file starts, such as a multiplexer, which may then
  run the command again.
- A terminal that cannot do this for the user's shell can start the
  command as the first process, or not resume it.

### Working directory

A terminal SHOULD start the command in the working directory that was
active when it accepted the report. It uses the first of these sources
that it has:

- The `cwd` key of the report.
- The directory of the owning process, read from the operating system
  when the report is accepted.
- A directory the terminal tracks via sequences such as OSC 7. OSC 7
  isn't protected by a token, so any raw output can set it. A terminal
  SHOULD NOT use this source unless the user opts in.
- The directory it would start a new shell in.

If the directory came from the `cwd` key and no longer exists when the
program is resumed, the terminal SHOULD NOT resume the record. A program
that sent `cwd` has said that the directory matters to it. For the other
sources, the terminal uses the directory it would start a new shell in.

### Other notes

A terminal MAY run a record more than once, for example after several
restarts, and MAY stop using a record at any time.

A terminal SHOULD NOT retry a resume that failed. For example, a command
that could not be started, or one that was followed by the terminal
crashing, is not run again on the next start. What counts as a failure
is up to the terminal.

A resumed program is a new process in a terminal with default modes. It
doesn't restore any prior non-default terminal state such as modes,
alternate screen, mouse reporting, keyboard modes, etc.

A terminal restores only the reported command. It doesn't restore shell
state such as variables, history, or stopped jobs, or a program between
the shell and the owner that did not report, such as `sudo -s` or
`nix develop`.

After a resume, the record belongs to the process the terminal started,
until that process reports, sends `clear`, or exits. A resumed program
SHOULD report again when it starts.

## Guidance for programs

This section collects what a program that reports should do so that
it is easier for program authors to implement the program side of
this specification correctly. Rules for handling the token are in
[Security](#security).

### When to report

- A program SHOULD report again whenever its resume command changes. For
  example, an agent that resumes by session ID reports again when the
  user starts a new session, clears it, switches to another one, or
  forks it. An outdated record could bring back the wrong one.
- A program SHOULD report again when it gets the terminal back, for
  example after it is continued from a stop, or after a child it passed
  the token to exits. In a last-write-wins terminal another program's
  report replaced the program's record, and that record was removed when
  the other program exited.
- A program that is sensitive to its working directory SHOULD either
  send the `cwd` key and repeat the report whenever the working
  directory changes, or include the directory explicitly in its own
  program-specific restart arguments.
- A program MUST NOT send `clear` when it exits because of SIGHUP,
  SIGTERM, or the loss of its terminal. These are what a program
  receives when the terminal ends, which is when the record is needed. A
  program sends `clear` when the user ends it.

### The resume command

A terminal can run a record more than once, or not at all (see
[Restoring](#restoring)). A program SHOULD specify a command that is
safe to run again in its report. A program cannot assume it will be run
any specific number of times.

The command runs in a new environment, not the one it was reported in
(see [Command execution](#command-execution)). A program that depends on
its environment SHOULD make the command carry what it needs:

- A program that depends on which executable a bare name resolves to,
  such as an interpreter in a virtual environment, SHOULD report an
  absolute path.
- A program whose target depends on its environment or on other state
  outside the command, such as a credentials profile or a cluster
  context, SHOULD put the resolved values in its `argv` using its own
  options. A program that cannot do this SHOULD NOT report. Otherwise a
  session that was working against one target can resume against
  another.

### State files

A resume command often names a file that holds the program's saved
state, such as an editor session. The terminal does not read, track, or
remove that file. The program owns it.

- A program SHOULD store the file where only the user can read and
  write, such as its own state directory, and not in a project
  directory. Resume loads the file without the user asking, so it is as
  sensitive as the record itself. It can also hold what the user was
  working on.
- A program SHOULD use a separate file for each running instance, so
  that two instances do not overwrite each other's state.
- Loading the file SHOULD be safe to repeat, and the program SHOULD
  start normally if the file is missing.
- A program SHOULD remove a file that is only used for resume when it
  sends `clear`.
- A program SHOULD remove old files by age. A terminal does not tell a
  program when it drops a record, so the program cannot tie the file's
  lifetime to the record's. The age SHOULD be long, such as 30 days, and
  counted from when the file was last saved or loaded, so that a session
  resumed after a long break still finds its file.

## Threat model

A record is a command that the terminal may run later as the user,
without the user typing it. Due to the security implications of program
resume, this section explicitly defines a threat model of what we do and
do not protect against and why.

- **Untrusted output cannot create a record.** Any text that reaches the
  terminal can contain an OSC 7577 sequence, such as a file shown with
  `cat`, a tailed log, and everything a remote program prints over
  `ssh`. The token prevents this attack (see [Token environment
  variable](#token-environment-variable)).
- **A recording of a terminal's output does not contain its token.** A
  program sends a `mac` and never the token, so tools that record raw
  output, such as a session recorder, do not store it.
  Someone who reads a recording can send a recorded report again, but
  only unchanged and only until its `time` is too old (see
  [`time`](#time)).
- **Programs running as the same user or root are trusted.** A program
  started in the terminal inherits the token, and on most systems other
  programs of the same user or root can read it. The protocol does not
  defend against this, because this is code the user has already trusted
  to run.
- **A program that has the token but fewer rights than the user is not
  covered.** A child that a tool runs in a sandbox, a program started as
  another user, a program started within a `chroot`, etc. These programs
  may have access to the token and terminal pty. If so, they can create
  a record, and the terminal later runs that command with the user's
  full rights. A terminal cannot tell such a program apart from any
  other in every scenario. The defense is in the program that starts it,
  which SHOULD remove the token (see [Security](#security)) and in the
  terminal, which SHOULD provide mechanisms for user control and review
  of resume behavior.
- **The `pid` key is not a defense.** Any program that has the token can
  report any `pid`. The `pid` key helps catch mistakes. It isn't a
  security mechanism.

A terminal that needs more than this MAY add its own rules for accepting
a report or for resuming a program. Some suggestions are given below:

- A terminal MAY require opt-in configuration for resume as a whole or
  per program.
- A terminal MAY confirm with users the exact commands that it will
  resume.
- A terminal MAY resume without asking only the commands on a list that
  the user or the terminal trusts.
- A terminal MAY reject a report when the owning process runs as another
  user than the terminal, or has a different root directory than the
  first process on the pseudo-terminal (see [`pid`](#pid)). This catches
  a program that was started with fewer rights and reports honestly, not
  one that lies about its `pid`.
- A terminal MAY show the user which records it holds and which commands
  it resumed.
- A terminal that runs as root, or as another account with elevated
  rights, SHOULD NOT resume programs. A program that kept the token but
  has fewer rights would otherwise gain the rights of root.

## Security

A record is a command that the terminal may run later, so every report
is a request to run code specified by an external program. The
specification was written to be as secure as possible within the
constraints provided by the legacy pty foundation.

- **Displayed text and remote programs cannot make a record.** They do
  not know the token. See [Token environment
  variable](#token-environment-variable).
- **A program MUST NOT send the token.** The token is only used to
  compute the `mac`. A program that writes it to the terminal, to a log,
  or anywhere else others can read gives away the ability to make
  records for that terminal.
- **Programs running as the same user can.** A program started in the
  terminal inherits the token, and other programs of the same user can
  typically read it. Any of them can report any command for any `pid`.
  The protocol treats them as trusted, because this is already code that
  has been trusted to run.
- **A program that reports SHOULD remove the token from every program it
  starts.** A program that can resume itself can also bring back what it
  started, so it should remove the token from the environment so its
  children do not restart instead. A program that does not report, such
  as a shell, passes the token on.
- **A program that does not report SHOULD still remove the token from
  children it restricts.** A program that runs other commands with fewer
  rights than itself, such as an agent that runs tools in a sandbox or a
  script that starts a program as another user or inside a `chroot`,
  SHOULD remove `OSC7577_TOKEN` from their environment. Otherwise
  a restricted child that can write to the terminal can register a
  command that later runs with the user's full rights.
- **A program SHOULD NOT forward the token off the machine.** Forwarding
  the variable over `ssh` or into a container lets programs there
  register commands that run here.

## Limits

| Item | Minimum Length |
| --- | --- |
| Total length | 2048 bytes |
| `argv` | 64 elements |

These are minimums. A terminal MUST NOT ignore or reject a report for
its size when it is within them, and MAY accept a larger one. A program
SHOULD stay within them. A terminal cannot verify a report that is
longer than its parser can hold, so it ignores that report and the
earlier record stays in place. A program whose new command does not fit
SHOULD send `clear` first, so that the earlier command is not resumed in
its place. It MAY then send the larger report, which a terminal with
higher limits accepts.

The total length applies to the full sequence including the OSC prefix,
`7577`, and the terminating character such as `ST`.

## Relationship to other approaches

**[OSC
133](https://gitlab.freedesktop.org/Per_Bothner/specifications/blob/master/proposals/semantic-prompts.md)
and [OSC
633](https://code.visualstudio.com/docs/terminal/shell-integration)
(semantic prompts).** These specify the command a user runs at a prompt,
but can't specify whether it's safe to resume and can't specify an
alternate resume command. Nested OSC 133 was considered (it's supported
by the spec) but it doesn't semantically match what we're trying to
achieve.

**OSC 7 (working directory).** This reports the current working
directory. It can't be used alone for program resume. It isn't protected
by a token, so any displayed text can set it such as that read from a
plain `cat`, so this specification recommends not trusting it.

**[OSC 88](https://github.com/otty-sh/osc-88) (Terminal Resume
Protocol).** Earlier work on the same idea. Its reports are not
authenticated, so a terminal has to inspect running processes to decide
whether to trust a request, which not every terminal can do and which
does not prove who sent it. Its arguments are one string and it does not
define how to split them, which this protocol avoids by sending each
argument separately.

**[tmux-resurrect](https://github.com/tmux-plugins/tmux-resurrect),
[kitty sessions](https://sw.kovidgoyal.net/kitty/sessions/), etc.
(process detection).** These read the command of the running process
from the operating system and run it again. That command is how the
program was started, which is often not how to resume it, because it has
no session ID or state file. It may also be unsafe to repeat, such as an
`rm`, so these tools rely on a list of allowed programs, a confirmation,
or a warning to the user. With this protocol the program states its own
resume command.

**[Zellij](https://zellij.dev/documentation/session-resurrection.html),
[Herdr](https://herdr.dev/tui/docs/session-state/),
[cmux](https://cmux.com/docs/session-restore), etc. (program-specific
resume commands).** Each supports a command-line tool for a program to
state its resume command. A program has to find out which one it is
running in and call that tool's binary, so every program needs separate
work for every terminal.

## Examples

### Valid reports

The examples in this section use the token `dummy-token-replace-me`,
and each `mac` is the real hash for its report, so they can be used to
test an implementation.

Neovim, running as pid 74877, saves a session file and reports how to
load it. When the user quits, it removes the record.

```
ESC ] 7577 ; pid=74877:time=1795543200:argv=bnZpbQ==,LVM=,L2hvbWUvdXNlci8ubG9jYWwvc3RhdGUvbnZpbS9zZXNzaW9ucy84ZjJjMWQudmlt:mac=9dbb99bfb856749a87563839d7ce9062818d78cf25909db93f309e0cd3b1909b ESC \
ESC ] 7577 ; pid=74877:time=1795543200:clear=1:mac=c30603369f98fef581a4098be889175b0c74f0641e49f8b25f4326cb38f97c93 ESC \
```

The command decodes to `nvim`, `-S`,
`/home/user/.local/state/nvim/sessions/8f2c1d.vim`. The path is absolute
because a terminal may not be able to restore the working directory. It
is in Neovim's state directory and not the project directory (see
[State files](#state-files)).

lazygit, running as pid 74877, reports the directory it should be
resumed in.

```
ESC ] 7577 ; pid=74877:time=1795543200:argv=bGF6eWdpdA==:cwd=L2hvbWUvdXNlci9zcmMvcHJvamVjdA==:mac=35cb909805c380336efd3689a125acc774a9dec8422a1d21492ebec06ca758e1 ESC \
```

The command decodes to `lazygit`, and the working directory decodes to
`/home/user/src/project`.

### A wrapper to make any program resume

This small script sends the report and then becomes the target program,
so the `pid` in the report is the pid of the program.

```sh
#!/bin/sh
# resume-wrap: run a command so that the terminal can bring it back.
if [ -n "$OSC7577_TOKEN" ]; then
  # The report names this wrapper too, so the restored command reports again.
  args=$(for a in resume-wrap "$@"; do printf '%s' "$a" | base64 | tr -d '\n'; echo; done | paste -sd, -)
  body=$(printf 'pid=%s:time=%s:argv=%s' "$$" "$(date +%s)" "$args")
  # The hash tool is sha256sum on Linux and shasum on macOS. printf has to
  # be a shell builtin here, or the token is visible in the process list.
  mac=$(printf '%s:%s' "$body" "$OSC7577_TOKEN" | { sha256sum 2>/dev/null || shasum -a 256; } | cut -c1-64)
  printf '\033]7577;%s:mac=%s\033\\' "$body" "$mac" > /dev/tty
fi
# The wrapper reports for the target, so the target does not get the token.
unset OSC7577_TOKEN
exec "$@"
```

Running `resume-wrap ssh devbox` as pid 90412 at time 1795543200 sends
this report:

```
ESC ] 7577 ; pid=90412:time=1795543200:argv=cmVzdW1lLXdyYXA=,c3No,ZGV2Ym94:mac=e76149d0ba54a83570ffab0583867dacdfa23928ba9d18604f0badea88b62b65 ESC \
```

The command decodes to `resume-wrap`, `ssh`, `devbox`.

### Invalid reports

In this table `T` stands for the current time and `M` stands for the
correct `mac` of the keys before it. An ignored report has no effect. A
rejected report removes the records of its owner.

| Report body | Result |
| --- | --- |
| `pid=74877:time=T:argv=bnZpbQ==:mac=0000…0000` | Ignored. The `mac` does not match. |
| `pid=74877:time=T:argv=bnZpbQ==` | Ignored. There is no `mac`. |
| `mac=M:pid=74877:time=T:argv=bnZpbQ==` | Ignored. The `mac` is not the last key. |
| `pid=74877:time=1000000000:argv=bnZpbQ==:mac=M` | Ignored. The `time` is too far from the terminal's clock. |
| `pid=74877:argv=bnZpbQ==:mac=M` | Ignored. There is no `time` to check. |
| `pid=74877:time=T:argv=Li9ydW4uc2g=:mac=M` | Rejected. The first element decodes to `./run.sh`, which is a relative path. |
| `pid=74877:time=T:argv=bnZpbQ==:clear=1:mac=M` | Rejected. A report has exactly one of `argv` and `clear`. |
| `pid=74877:time=T:argv=bnZpbQ==:cwd=cHJvamVjdA==:mac=M` | Rejected. The `cwd` value decodes to `project`, which is a relative path. |
| `pid=74877:time=T:argv=bnZpbQ==:need=later:mac=M` | Rejected by a terminal that does not implement a key named `later`. |

## Revision history

| Date       | Revision | Changes |
| ---------- | -------- | ------- |
| 2026-11-25 | 0.5      | Stricter command lookup. A missing `cwd` or a failed resume is not resumed. More guidance and clarifications. |
| 2026-11-24 | 0.4      | Rename token environment variable |
| 2026-11-24 | 0.3      | `mac`, `time`, `cwd` |
| 2026-11-19 | 0.2      | Rename the nonce to a token. Add an overview and a threat model. |
| 2026-11-18 | 0.1      | First draft. |
