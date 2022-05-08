// Q11.Write a Python script to merge two Python dictionaries
obj1={"a":1,"b":2,"C":3,"d":4}
obj2={"p":5,"q":6,"r":7,"s":8}
for (i in obj2){
    obj1[i]=obj2[i]
}console.log(obj1)