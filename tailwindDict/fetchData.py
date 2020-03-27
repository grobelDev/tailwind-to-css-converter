import urllib.request
from urllib.request import urlopen, Request
import json

sites = [
    "https://tailwindcss.com/docs/box-sizing/",
    "https://tailwindcss.com/docs/display/",
    # "https://tailwindcss.com/docs/float/",
    "https://tailwindcss.com/docs/clear/",
    "https://tailwindcss.com/docs/object-fit/",
    "https://tailwindcss.com/docs/object-position/",
    "https://tailwindcss.com/docs/overflow/",
    "https://tailwindcss.com/docs/position/",
    # "https://tailwindcss.com/docs/top-right-bottom-left/",
    "https://tailwindcss.com/docs/visibility/",
    "https://tailwindcss.com/docs/z-index/",
]

result = []
for site in sites:

    # site = "https://tailwindcss.com/docs/padding/#app"
    headers = {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) "
        "AppleWebKit/537.11 (KHTML, like Gecko) "
        "Chrome/23.0.1271.64 Safari/537.11",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Charset": "ISO-8859-1,utf-8;q=0.7,*;q=0.3",
        "Accept-Encoding": "none",
        "Accept-Language": "en-US,en;q=0.8",
        "Connection": "keep-alive",
    }

    req = Request(url=site, headers=headers)

    html = urlopen(req).read()
    mystr = html.decode("utf8")
    data = mystr.splitlines()
    # print(html)

    # fp = urllib.request.urlopen(req)
    # mybytes = fp.read()

    # mystr = mybytes.decode("utf8")
    # fp.close()

    # # print(mystr.splitlines())

    # data = mystr.splitlines()
    # result = []
    tbodyCount = 0

    for line in data:
        if "tbody" in line:
            if tbodyCount > 0:
                tbodyCount = 0
            else:
                tbodyCount += 1
        elif tbodyCount > 0:
            splitline = line.split(">")[1].split("<")[0]
            if splitline != "":
                result.append(splitline)

with open("test.json", "w") as file:
    file.write(json.dumps(result))  # use `json.loads` to do the reverse
