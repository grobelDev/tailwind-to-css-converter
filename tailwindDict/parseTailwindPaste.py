import json

with open("./tailwindPaste.js") as file:
    data = file.read().splitlines()

tailwindArray = []
cssArray = []

for line in data:
    if "." in line:
        if ":" not in line:
            tailwindArray.append(line.split(".")[1])
    if ";" in line:
        if "=" not in line:
            if "(" not in line:
                if ")" not in line:
                    cssArray.append(line.strip())
print(len(tailwindArray))
print(len(cssArray))

shadowResult = {
    "shadow": "box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0,0.06);",
    "shadow-md": "box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0,0, 0, 0.06);",
    "shadow-lg": "box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);",
    "shadow-xl": "box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);",
    "shadow-xs": "box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);",
    "shadow-sm": "box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);",
    "shadow-2xl": "box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);",
    "shadow-inner": "box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);",
    "shadow-outline": "box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);",
    "shadow-none": "box-shadow: none;",
}

result = {}
for i in range(len(tailwindArray)):
    key = tailwindArray[i]
    value = cssArray[i]
    result[key] = value
for key in shadowResult:
    value = shadowResult[key]
    result[key] = value

print(len(result))


# with open("tailwindDict.json", "w") as file:
#     file.write(json.dumps(result))  # use `json.loads` to do the reverse

with open("../client/src/tailwindDict.json", "w") as file:
    file.write(json.dumps(result))  # use `json.loads` to do the reverse
