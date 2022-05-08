// Q51.Write a Python program to filter even numbers from a given dictionary values.
// Original Dictionary:
// {'V': [1, 4, 6, 10], 'VI': [1, 4, 12], 'VII': [1, 3, 8]}
// Filter even numbers from said dictionary values:
// {'V': [4, 6, 10], 'VI': [4, 12], 'VII': [8]}
// Original Dictionary:
// {'V': [1, 3, 5], 'VI': [1, 5], 'VII': [2, 7, 9]}
// Filter even numbers from said dictionary values:l                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          / {'V': [], 'VI': [], 'VII': [2]}



obj={'V': [1, 4,8,10], 'VI': [1, 4, 12], 'VII': [1, 3, 8]}
obj1={}
for (i in obj){
    let arr=[]
    for (j in obj[i]){
        if (obj[i][j]%2==0){
            arr.push(obj[i][j])
            obj1[i]=arr
        }
    }
}console.log(obj1)



















// obj={'V': [1, 4,8,10], 'VI': [1, 4, 12], 'VII': [1, 3, 8]}
// obj1={}
// for (i in obj){
//     for (j of obj[i]){
//         arra=[]
//         // console.log(j)
//         // console.log(j)
//         if(j%2!=0){
//             delete obj[i][j]
//             // arra.push(j)
//             // obj[i].push(arra)
//             // obj[i]=arra
//             } 
//     }
// }
// console.log(obj)