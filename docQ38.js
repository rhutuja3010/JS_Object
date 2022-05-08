// Q38.. Write a Python program to drop empty Items from a given Dictionary.
// Original Dictionary:
// {'c1': 'Red', 'c2': 'Green', 'c3': None}
// New Dictionary after dropping empty items:
// {'c1': 'Red', 'c2': 'Green'}


obj={'c1': 'Red', 'c2': 'Green', 'c3': "None"}
o={}
for (i in obj){
    if (obj[i]!="None"){
        o[i]=obj[i]

    }
}console.log(o)
// delete obj.c3
// console.log(obj)


// d={10:"a",20:{30:"c",40:"d"},30:"e"}
// sum=0
// for (i in d){
//     // sum=0
//     // sum+=Number(i)
//     // console.log(i)
//     if(typeof(d[i])==Object){
//         for(j in d[i]){
//             // console.log(typeof(j))
//             sum+=Number(j)
//             // console.log(d[i][j])
//             console.log(sum)
//         }
//     }
//     else{
//         sum+=Number (i)
//     }
// }
// // console.log(sum)



