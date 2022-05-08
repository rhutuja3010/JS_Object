// # Q24. Write a Python program to combine values in python list of dictionaries.
// # Sample data: [{'item': 'item1', 'amount': 400}, {'item': 'item2', 'amount': 300}, 
// # {'item': 'item1','amount': 750}]
// # Expected Output: Counter({'item1': 1150, 'item2': 300})

let obj=[{'item': 'item1', 'amount': 400}, {'item': 'item2', 'amount': 300}, 
{'item': 'item1','amount': 750}]
sum=0
d={}
for (i of obj){
    if(i['item']=='item1'){
        sum+=i["amount"]
        d[i["item"]]=sum
    }else{
        d[i["item"]]=i["amount"]
    }
   
}
console.log(d)