# Q22. Write a Python program to create and display all combinations of letters, selecting each
# letter from a different key in a dictionary. Go to the editor
# Sample data : {'1':['a','b'], '2':['c','d']}
# Expected Output:
# ac
# ad
# bc

# obj={'1':['a','b'], '2':['c','d']}
# l=[]
# d=list(obj.values())
# for i in d[0]:
#     for j in d[1]:
#         print(i+j)
# for i in obj:
#     s=''
    
#     # print(i)
#     for j in obj[i]:
#         l.append(j)
# # print(l)
#         for k in l:
#             # print(k)
#             for j in l:
#                 # print(j)
#                 # s+=k
#                 # s+=j
#                 print(k,j)
                

#         # s+=j
#     # print(s)
#         # print(j)


a=123
b=a%10  #3
c=a//10
d=c%10 #2
f=c//10 #1
print(str(b)+str(d)+str(f))

