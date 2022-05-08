// Q28.Write a Python program to convert a list into a nested dictionary of keys.
// num_list = [1, 2, 3, 4]
// Sample output:
// {1: {2: {3: {4: {}}}}}
// Q29.Write a Python program to sort a list alphabetically in a dictionary.

// l= [1, 2, 3, 4]
// var obj={}
// for (i=l.length-1;i>=0;i--){
//     obj[l[i]] ={...obj}
// }
// console.log(obj)



// l= [1, 2, 3]
// var obj={}
// for (i in obj){
//     obj[-i]={...obj}
// }console.log(obj)

// l= [1, 2, 3, 4]
// for (i=l.length-1;i>=0;i--){
//     obj[l[-i]] ={...obj}
// }
// console.log(obj)




// var key = "name";
// var person = {[key]:"John"}; // same as var person = {"name" : "John"}
// console.log(person); // should print  Object { name="John"}

// let values="rhutu"
// let obj={"name":values};
// console.log(obj)

// let obj = ['1','2','3'] // {'1':{'2':{'3':{}}}
// obj.reverse();
// const nested_obj = obj.reduce((prev, current) => (
//     {[current]:{...prev}}
// ), {});
// console.log(nested_obj)

// let obj = ['1','2','3','4']
// o={}
// s=o
// for (i of obj){
//     o[i]={}
//     o=o[i]
// }
// console.log(JSON.stringify(s))


let obj = ['1','2','3','6'] // {'1':{'2':{'3':{}}}
obj.reverse();
const nested_obj = obj.reduce((prev, current) => (
    {[current]:{...prev}}
), {});
console.log(JSON.stringify(nested_obj))





