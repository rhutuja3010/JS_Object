// Q18.Write a Python program to get the maximum and minimum value in a dictionary.
obj1={"a":1,"b":2,"c":3,"d":9}
max=0
min=0
for (i in obj1){
    if (obj1[i]>max){
        max=obj1[i]
    }
}console.log(max)