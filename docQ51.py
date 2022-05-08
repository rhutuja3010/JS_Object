a={'V': [1,4,8,10], 'VI': [1,4,12], 'VII': [1,3,8]}
d={}
for i in a:
    l=[]
    for j in a[i]:
        if j%2==0:
            l.append(j)
        d.update({i:l})
print(d)
