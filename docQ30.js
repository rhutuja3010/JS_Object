// Q30.Write a Python program to remove spaces from dictionary keys.
// Original dictionary: {'S 001': ['Math', 'Science'], 'S
// 002': ['Math',
// 'English']}
// New dictionary: {'S001': ['Math', 'Science'], 'S002': ['Math',
// 'English']}


obj={'S 001': ['Math', 'Science'], 'S 002': ['Math','English']}
o={} 
for (i in obj){
    s=''
    for (j in i){
        if (i[j]!=" "){
            s+=i[j] 
        }
    }o[s]=obj[i]
}
console.log(o)
