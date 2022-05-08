let obj={'a': 5, 'b': 14, 'c': 32, 'd': 35, 'e': 24, 'f': 100, 'g': 57, 'h': 8, 'i': 100}
let arr=[]
max1=1
for(i in obj){
    if (obj[i]>max1){
        max1=obj[i]
        store=obj[i]
    }
 }
arr.push(store)
second=0
for(i in obj){
    if(obj[i]>second){
        if(obj[i]!=max1){
        second=obj[i]
        store=obj[i]
        }
    }
}arr.push(store)
third=0
for (i in obj){
    if(obj[i]>third){
        if(obj[i]!=max1 && obj[i]!=second){
            third=obj[i]
            store=obj[i]
        }
    }
}arr.push(store)
console.log(arr)



