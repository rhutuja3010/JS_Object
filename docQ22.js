// obj={'1':['a','b'], '2':['c','d']}
// // d=list(obj.values())
// // for i in d[0]:
// //     for j in d[1]:
// //         print(i+j)

// for (i in obj){
//     // console.log(obj[i])
//     s=obj[i]
//     for (j in s[0]){
//         console.log(j)
//         // for(k in s[1]){
//         //     console.log(j+k)
//         // }
//     }
// }
// // console.log(s)

// obj={'1':['a','b'], '2':['c','d']}

let a=123;
let b=a%10
let c=Math.floor(a/10)
let d=c%10
let f=Math.floor(c/10)
console.log(b+d+f)