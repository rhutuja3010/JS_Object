// Q31.. Write a Python program to get the top three items in a shop. Go to
// the editor
// Sample data: {'item1': 45.50, 'item2':35, 'item3': 41.30, 'item4':55,
// 'item5': 24}
// Expected Output:
// item4 55
// item1 45.5
// item3 41.3


let obj= {'item1': 45.50, 'item2':35, 'item3': 41.30, 'item4':55,'item5': 24}
let m1=0;
let m2=0;
let m3=0;
let arr=[]
for (i in obj){
    if(obj[i]>m1){
        m1=obj[i]
    }}
console.log(m1)
for (i in obj){
    if(obj[i]>m2){
        if(obj[i]!=m1){
        m2=obj[i]
       }
    }
} console.log(m2)
for (i in obj){
    if(obj[i]>m3){
        if(obj[i]!=m1 && obj[i]!=m2){
        m3=obj[i]
       }
    }
} console.log(m3)


