// Q44.Write a Python program to split a given dictionary of lists into list of dictionaries.
// Original dictionary of lists:
// {'Science': [88, 89, 62, 95], 'Language': [77, 78, 84, 80]}
// Split said dictionary of lists into list of dictionaries:

// [{'Science': 88, 'Language': 77}, {'Science': 89, 'Language': 78}, {'Science': 62, 'Language':
// 84}, {'Science': 95, 'Language': 80}]


obj={'Science': [88, 89, 62, 95], 'Language': [77, 78, 84, 80]}
l=[]
o={}
for (i in obj){
    for (j of obj[i]){
        // o[i]=obj[i]
        o[i]=obj[j]
        // console.log(j)
    }
}
console.log(o)
