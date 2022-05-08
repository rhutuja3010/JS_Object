// Q40. Write a Python program to convert more than one list to nested dictionary.
// Original strings:
// ['S001', 'S002', 'S003', 'S004']
// ['Adina Park', 'Leyton Marsh', 'Duncan Boyle', 'Saim Richards']
// [85, 98, 89, 92]
// Nested dictionary:
// [{'S001': {'Adina Park': 85}}, {'S002': {'Leyton Marsh': 98}}, {'S003': {'Duncan Boyle': 89}},
// {'S004': {'Saim Richards': 92}}]


obj1=['S001', 'S002', 'S003', 'S004']
obj2=['Adina Park', 'Leyton Marsh', 'Duncan Boyle', 'Saim Richards']
obj3=[85, 98, 89, 92]

// o={}
// o1={}
a=[]
for (let i=0;i<obj1.length;i++){
    o={}
    o1={}
    // o1={}
    // obj[i]=obj1[i]

    // o[obj2[i]]=obj3[i]
    o1[obj1[i]]=o[[obj2[i]]=obj3[i]]
   
    // obj[obj1[i]]=o1[i]
    // o[obj1[i]]=o[i]
    // obj[obj1[i]]=o[{i}]
    console.log(o1)
}
// console.log(o)


