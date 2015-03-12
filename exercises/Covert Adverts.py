advertClicks = [
    {
        "url": "b.example.com",
        "date": "2015-11-22 11:11:11"
    },
    {
        "url": "c.example.com",
        "date": "2015-11-22 11:11:11"
    },
    {
        "url": "a.example.com",
        "date": "2015-11-22 11:11:11"
    },
    {
        "url": "a.example.com",
        "date": "2015-11-22 22:22:22"
    },
    {
        "url": "a.example.com",
        "date": "2015-12-22 11:11:11"
    },
    {
        "url": "a.example.com",
        "date": "2015-12-22 22:22:22"
    }
]

days = {}

for item in advertClicks:
    date = item["date"].split(" ")[0]
    if date not in days:
        days[date] = {}
    day = days[date]
    if item["url"] not in day:
        day[item["url"]] = {"clicks": 0}

    properties = day[item["url"]]
    properties["clicks"] = properties["clicks"] + 1

output = []
for dayKey, dayObject in days.iteritems():
    for urlKey, properties in dayObject.iteritems():
        output.append(dayKey + " " + urlKey + " " + str(properties["clicks"]))
print "<br>\n".join(output)

    # the last iteration's "properties.clicks",
    # from inside the center of the for loop,
    # is equivalent to:
    #print(days["2015-11-22"]["c.example.com"]["clicks"])  # Which would be preferable if we knew they keys in advance.