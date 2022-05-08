// Q27.Write a Python program to count the values associated with key in a dictionary.
// student = [{'id': 1, 'success': true, 'name': 'Lary'},
// {'id': 2, 'success': false, 'name': 'Rabi'},
// {'id': 3, 'success': true, 'name': 'Alex'}]

student = [{'id': 1, 'success': true, 'name': 'Lary'},
{'id': 2, 'success': false, 'name': 'Rabi'},
{'id': 3, 'success': true, 'name': 'Alex'}]
let id_sum=0;
let success_sum=false;
let name_sum ='';
for (i of student){
    // console.log(i)
    id_sum+=i.id
    success_sum+=i.success
    name_sum+=i.name+" "
}console.log(id_sum)
console.log(success_sum)
console.log(name_sum)
