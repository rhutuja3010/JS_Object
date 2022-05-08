# Q24. Write a Python program to combine values in python list of dictionaries.
# Sample data: [{'item': 'item1', 'amount': 400}, {'item': 'item2', 'amount': 300}, 
# {'item': 'item1','amount': 750}]
# Expected Output: Counter({'item1': 1150, 'item2': 300})

# a=[{'item': 'item1', 'amount': 400}, {'item': 'item2', 'amount': 300}, 
# {'item': 'item1','amount': 750}]
# for i in a:
#     # print(i)
#     for j in i:
#         print(i[j])

a='RhutujA23#'
count_lower=0
count_upper=0
count_spc_chr=0
count_num=0
l=[]
l1=[]
l2=[]
l3=[]
for i in a:
    if i>='a' and i<='z':
        l.append(i)
        count_lower+=1
    elif i>='A' and i<'Z':
        l1.append(i)
        count_upper+=1
    elif i=="#" or i=="@" :
        count_num+=1
        l3.append(i)
    else:
        l2.append(i)
        count_spc_chr+=1
print(l)  
print(count_lower)
print(l1)
print(count_upper)
print(l2)
print(count_spc_chr)
print(l3)
print(count_num)


