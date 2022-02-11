// Q27.Write a Python program to count the values associated with key in a dictionary.
// student = [{'id': 1, 'success': true, 'name': 'Lary'},
// {'id': 2, 'success': false, 'name': 'Rabi'},
// {'id': 3, 'success': true, 'name': 'Alex'}]

// console.log()
// for (i of student){
//     let idsum=0
//     let success_sum=false
//     let name_sum=''
//     // console.log(i)
//     for (j in i){
//         idsum+=i[j].id
//         // console.log(typeof(idsum))
//         // success_sum+=i.success
//         // name_sum+=i.name
//         console.log(i[0])
        
// }console.log()
//     }



student = [{'id': 1, 'success': true, 'name': 'Lary'},
{'id': 2, 'success': false, 'name': 'Rabi'},
{'id': 3, 'success': true, 'name': 'Alex'}]
// console.log(student[0].id)
for (i of student){
    id_sum=student[0].id+student[1].id+student[2].id
    success_sum=student[0].success+student[1].success+student[2].success
    name_sum=student[0].name+student[1].name+student[2].name
}console.log(id_sum)
console.log(success_sum)
console.log(name_sum)


