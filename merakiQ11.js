const list1=[]
const word="MISSISSIPPI"
let output={}
for (i of word){
    if (list1.includes(i)){
        output[i]=output[i]+1
}else{
    list1.push(i)
    output[i]=1
}
}console.log(output)


// let a=[4,2,6,9,8,1]
// for (i of a){
//     let l=a.length
// console.log(l) 
// break}



// let a={"a":1,"b":2,"c":3,"d":4}
// l=[]
// for(i in a){
//     l.push(i)

// }console.log(l)
