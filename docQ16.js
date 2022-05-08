// Q16.Write a Python program to map two lists into a dictionary.
let a=["a","b","c","d"]
let b=[1,2,3,4]
obj={}
for (let i=0;i<a.length;i++){
    obj[a[i]]=b[i]
}console.log(obj)