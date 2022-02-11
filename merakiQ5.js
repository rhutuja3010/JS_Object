let n=require("readline-sync")
let key1=n.question("enter the key :")
dict={"name":"Raju", "marks":56}
for (i in dict){
    if(i==key1){
        console.log("exist")
        break
    }else{
        console.log("not exist")
        break
    }
}

