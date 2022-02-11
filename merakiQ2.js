var a=require("readline-sync")
var num=a.questionInt("enter the no :")
d={}
for(let i=1;i<=num;i++){
    d[i]=i**2
}console.log(d)