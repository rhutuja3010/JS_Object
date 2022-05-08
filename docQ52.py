d={'a': 5, 'b': 14, 'c': 32, 'd': 35, 'e': 24, 'f': 100, 'g': 57, 'h': 8, 'i': 100}
m=0
l=[]
for i in d:
    if d[i]>m:
        m=d[i]
        key=i
l.append(key)
m1=0
for i in d:
    if d[i] > m1:
        if d[i] !=m:
            m1=d[i]
            key=i
l.append(key)
m2=0
for i in d:
    if d[i] >m2:
        if d[i] !=m and d[i] !=m1:
            m2=d[i]
            key=i
l.append(key)
print(l)