// Q16.Write a Python program to map two lists into a dictionary.
let a=["a","b","c","d"]
let b=[1,2,3,4]
obj={}
for (i in  a){
    for(j in b){

        obj[a[i]]=b[j]
       
       
    }  
} console.log(obj)