// [[manngo=10],[apple=8]]
// [[banana=15],[watermelon=23]]

let a=[{name:"mango",quntity:10},{name:"Apple",quntity:8},
{name:"Banana",quntity:15},{name:"watermelon",quntity:23}]
x=[]
y=[]
for (i of a){
    r=[]
    p=[]
    if(i["quntity"]<=10){
        r.push(`${i["name"]} = ${i["quntity"]}`)
        x.push(r)
    }else{
        p.push(`${i["name"]} = ${i["quntity"]}`)
        y.push(p)
    }
}
console.log(x)
console.log(y) 



// let a=["rhutuja","ruchii","rhutu","minu","nil","aa","r"]
// s=""
// for (i of a){
//     for (j=0;j<i.length;j++){
//         s+="*"
//     }s+="\n"
// }console.log(s)