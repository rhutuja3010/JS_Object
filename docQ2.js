// Q2. Write a Python program to create a dictionary from a string.
// Note: Track the count of the letters from the string.
// Sample string : 'w3resource'
// Output: {'w': 1, '3': 1, 'r': 2, 'e': 2, 's': 1, 'o': 1, 'u': 1, 'c': 1}

// let s='w3resource'
// count={}
// for(i of s){
//     // console.log(i)
//     if (i in count){
//         // console.log(i)
//         count[i]+=1  
//     }else{
//         count[i]=1
//     }
// }console.log(count)



let s='w3resource'
let count={};
for (i of s){
    if (i in count){
        count[i]+=1 
    }else{
        count[i]=1
    }
}console.log(count)


