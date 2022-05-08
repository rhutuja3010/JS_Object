// Q26.
// Write a Python program to print a dictionary in table format.
// my_dict = {'C1':[1,2,3],'C2':[5,6,7],'C3':[9,10,11]}
// Sample Output:
// C1 C2 C3
// 1 5 9
// 2 6 10
// 3 7 11


obj={'C1':[1,2,3],'C2':[5,6,7],'C3':[9,10,11]}
a=[]
s=''
for(i in obj){
    s+=i
    s+=" "
}
// console.log(s)
s1=''
for (i in obj){
    // console.log(obj[i])
    // for(let j=1;j<=i.length;i++){
        // s1+=obj[i]
    // }
    console.log(obj[i])
}
