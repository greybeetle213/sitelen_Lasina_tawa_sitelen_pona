fileRaw = open("Fairfax-Compound-Glyfs.txt", "r", encoding="UTF-8")
file = fileRaw.read().split("\n")
fileRaw.close()
ouput = []
count = 0
for item in file:
    if count == 1:
        ouput.append(item)
    count += 1
    if count == 3:
        count = 0
print("\n".join(ouput))