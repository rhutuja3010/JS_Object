
const word="MISSISSIPPI"
let output={}
for (i of word){
    if (i in output){
        output[i]+=1
}else{
    output[i]=1
}
}
console.log(output)


// let s='w3resource'
// let count={};
// for (i of s){
//     if (i in count){
//         count[i]+=1 
//     }else{
//         count[i]=1
//     }
// }console.log(count)







// let a=[4,2,6,9,8,1]
// for (i of a){
//     let l=a.length
// console.log(l)
// break 
// }



// let a={"a":1,"b":2,"c":3,"d":4}
// l=[]
// for(i in a){
//     l.push(i)

// }console.log(l)
