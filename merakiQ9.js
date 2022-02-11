



const Input = [{ "first": "1", "second": "2", "third": "1", "four": "5", "five": "5", "six": "9", "seven": "7" }]
u=[]
for (i of Input){
    for(j in i){
        if (!u.includes(i[j])){
            u.push(i[j])
        }
    }
}console.log(u)


// const list = [{ "first": "1", "second": "2", "third": "1", "four": "5", "five": "5", "six": "9", "seven": "7" }]
// let uniques_list = [];
// for (i of list) {
//   for (j in i) {
//       if (!uniques_list.includes(i[j])) { 
//         uniques_list.push(i[j]);
//       }
//   }
// }
// console.log(uniques_list);

