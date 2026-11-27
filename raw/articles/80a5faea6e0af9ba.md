[/karpathy](/karpathy)
[Andrej Karpathy](/karpathy)
[@karpathy](/karpathy)

I asked Claude to populate a Civilization-style game map with real data from the US. Opus 5.5 downloaded and parse a ton of public data and 7 hours and 45K lines of code later... it works :)

- 31 real data sources including Census, BEA, BLS, EIA, NOAA, USGS, DoD, NPS, FAA, FEMA, CDC...
- Real elevation, land cover, GDP, jobs, power plants, mines, ports, airports, bases, parks, universities, freight flows, disasters; all reconciled onto one 25 km hex grid.
- The data is converted into Civilization language, e.g. Gold yield is GDP. A city's districts are its real industry specializations: San Jose gets a Campus, Detroit is "Motor city". Its citizens are its real workforce: 1 in 4 San Jose workers are engineers, coders or scientists, against 1 in 14 nationally. Wonders are chosen by published rules, such as national parks by visitor numbers and universities by R&D spending, etc etc.
- 19 lenses (income, degrees, faith, disasters…), a City View for 524 metros, and nine advisors plus an Explorer. The Explorer turns any column for any of 3,100+ counties into a table and scatter plot, linked to the map.
- Claude decided to skip a few states and territories sry
- Built using Claude Code desktop app, Opus 5.5 on medium and turning on ultracode.

It's deployed here: [karpathy.ai/usaciv/](https://t.co/QMhmafXMj5) and the "?" has the source link too. I don't exactly know where I was going with this but it's really fun to browse and play with. Possibly it can be expanded or built into a game. I only have half of my weekly Claude quote left though so someone else will have to take over :D. Claude also made a trailer:

00:00

[2:31 AM · Nov 26, 2026](/karpathy/status/2125779541952246039)·[2.1M Views](/karpathy/status/2125779541952246039)

[1.3K](/compose/post?in_reply_to=2125779541952246039)
2.6K
23K
13K
