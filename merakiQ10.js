let n=require("readline-sync")

let o={}
for (let i=1;i<=4;i++){
    
let name=n.question("enter the name :")
let marks=n.questionInt("enter the marks :")
    o[name]=marks
    

}console.log(o)