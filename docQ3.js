// Q3. Write a Python script to generate and print a dictionary that contains a number (between 1
//     and n) in the form (x, x*x).
//     Sample input ( n = 5) :
//     Output : {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}.



let n=5
o={}
for (let i=1;i<=n;i++){
    o[i]=i**2
}console.log(o)