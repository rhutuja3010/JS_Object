


# s=input("enter the string :")
# count={}
# for i in s:
#     if i in count :
#         count[i]+=1
#     else:
#         count[i]=1
        
# print(count)


# string="w3resource"
# count={}
# for i in string:
#     if i in count:
#         count[i]+=1
#     else:
#         count[i]=1
# print(count)




# a=2+5j
# b=3+2j
# print(a*b)

# a=5+2j
# b=3+1j
# print(a*b)


# Q33.Python: Print a dictionary line by line
# students = {'Aex':{'class':'V',
# 'rolld_id':2},
# 'Puja':{'class':'V',
# 'roll_id':3}}
# Sample Output:
# Aex
# class : V
# rolld_id : 2


# students = {'Aex':{'class':'V',
# 'rolld_id':2},
# 'Puja':{'class':'V',
# 'roll_id':3}}
# for i in students:
#     print(i)
#     break
# for k,j in students[i].items():
#     print(k,":",j)



# Q40. Write a Python program to convert more than one list to nested dictionary.
# Original strings:
# ['S001', 'S002', 'S003', 'S004']
# ['Adina Park', 'Leyton Marsh', 'Duncan Boyle', 'Saim Richards']
# [85, 98, 89, 92]
# Nested dictionary:
# [{'S001': {'Adina Park': 85}}, {'S002': {'Leyton Marsh': 98}}, {'S003': {'Duncan Boyle': 89}},
# {'S004': {'Saim Richards': 92}}]


# a=['S001', 'S002', 'S003', 'S004']
# b=['Adina Park', 'Leyton Marsh', 'Duncan Boyle', 'Saim Richards']
# c=[85, 98, 89, 92]
# l=[]
# d1={}
# for i in range(len(a)):
#     d1.update({a[i]:{b[i]:c[i]}})
# l.append(d1)
# print(l)
    

# Q42.
# Write a Python program to check all values are same in a dictionary. Go to the editor
# Original Dictionary:
# {'Cierra Vega': 12, 'Alden Cantrell': 12, 'Kierra Gentry': 12, 'Pierre Cox': 12}
# Check all are 12 in the dictionary.
# True
# Check all are 10 in the dictionary.
# False

# d={'Cierra Vega': 12, 'Alden Cantrell': 12, 'Kierra Gentry': 12, 'Pierre Cox': 12}
# for i in d:
#     if d[i]==12:
#         print("True")
#     else:
#         print("false")
    


# Q43.Write a Python program to create a dictionary grouping a sequence of key-value pairs
# into a dictionary of lists.
# Original list:
# [('yellow', 1), ('blue', 2), ('yellow', 3), ('blue', 4), ('red', 1)]
# Grouping a sequence of key-value pairs into a dictionary of lists:
# {'yellow': [1, 3], 'blue': [2, 4], 'red': [1]}


# d=[('yellow', 1), ('blue', 2), ('yellow', 3), ('blue', 4), ('red', 1)]
# d1={}
# for i in d:
#     # print(d[i])
#     for j in i:
#         # print(j)
#         if j not in d1:
#             # d1.update({j:i[j]})
# # print(d1)

#         # break


# d=[('yellow', 1), ('blue', 2), ('yellow', 3), ('blue', 4), ('red', 1)]
# d1={}
# for i in d:
#     # print(d[i])
#     for j in i:
#         d1.update({i:j})
# #         if j==j:
# #             d1.update({j:i[j]})
# print(d1)




# Q44.Write a Python program to split a given dictionary of lists into list of dictionaries.
# Original dictionary of lists:
# {'Science': [88, 89, 62, 95], 'Language': [77, 78, 84, 80]}
# Split said dictionary of lists into list of dictionaries:
# [{'Science': 88, 'Language': 77}, {'Science': 89, 'Language': 78}, {'Science': 62, 'Language':
# 84}, {'Science': 95, 'Language': 80}]


# d={'Science': [88, 89, 62, 95], 'Language': [77, 78, 84, 80]}
# d1={}
# for i in d:
#     # print(i)
#     for j in d[i]:
#         # print(j)
#         # d1.update({i:d[i]})
#         if d[i]==i:
#               d1.update({i:j})
#             # r=d[j][0]
#             # p=d[i][i]
#             # s=d[i][i]
#             # q=d[i][i]

#             # d1.update({j:d[j][i]})
#             # d1.update({i:p})
# print(d1)
#         # d.update({i:j})
#         # print(d)
        


# Q45.
# Write a Python program to remove a specified dictionary from a given list.
# Original list of dictionary:
# [{'id': '#FF0000', 'color': 'Red'}, {'id': '#800000', 'color': 'Maroon'}, {'id': '#FFFF00', 'color':
# 'Yellow'}, {'id': '#808000', 'color': 'Olive'}]
# Remove id #FF0000 from the said list of dictionary:
# [{'id': '#800000', 'color': 'Maroon'}, {'id': '#FFFF00', 'color': 'Yellow'}, {'id': '#808000', 'color':
# 'Olive'}]


# d=[{'id': '#FF0000', 'color': 'Red'}, {'id': '#800000', 'color': 'Maroon'}, {'id': '#FFFF00', 'color':
# 'Yellow'}, {'id': '#808000', 'color': 'Olive'}]
# del d.'#FF000'

# a= [1, 2, 3, 4]
# b={}
# for i in a[::-1]:
#         b={i:b}
# print(b)



# obj={}
# for i in range(len(l)):
#     obj.update(i)
# print(obj)
# for i=l.length-1;i>=0;i--){
#     obj[l[i]]=obj
# }console.log(obj)








# i=1
# while i<5:
#         j=i
#         while j<=i:
#                 print(j,end=" ")
#                 j-=1
#         print()
#         i+=1

# i=1
# while i<=5:
#         j=1
#         while j<=5:
#                 print(j,end=" ")
#                 j+=1
#                 print()
#         i+=1


# a=[[[[[[5,6,7,8,9,10,25],3,2]]]]]
# print(a[0])
# print(a[0][0])
# print(a[0][0][0][0][0])
# print(a[0][0][0][0][2])


# b=[[1,2,3]]
# print(b[0])



# c=[7,[8,9,5,4,3,2,1],[6,1,2,3]]
# print(c[0])
# print(c[1][0])



# a=[7,5,[7,6,[5,4,["a","b","c",["d","f"],["b","a"],5,7,8],4,3],2],3,2,[1,2,3]]
# # print(a[2])
# print(a[2][2][2])


# a=5+1j
# b=6+2j
# print(a*b)
# original_list= [{'id': 1, 'success': 5, 'name': 1},
# {'id': 2, 'success': 5, 'name': 1},
# {'id': 3, 'success': 5, 'name': 1}]
# result = {}
# for elm in original_list:
#     for k, v in elm.items():

#         # Initialise it if it doesn't exist
#         if k not in result:
#             result[k] = 0

#         # accumulate sum seperately
#         result[k] += v

# print(result)


# student = [{'id': 1, 'success': True, 'name': 'Lary'},
# {'id': 2, 'success': False, 'name': 'Rabi'},
# {'id': 3, 'success': True, 'name': 'Alex'}]
# id_sum=0
# success_sum=False
# name_sum =''
# for i in student:
#     if 'id' in i:
#         id_sum+=1
#     print(id_sum)


