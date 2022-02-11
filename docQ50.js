// Q50.Write a Python program to convert a given dictionary into a list of lists.
// Original Dictionary:
// {1: 'red', 2: 'green', 3: 'black', 4: 'white', 5: 'black'}
// Convert the said dictionary into a list of lists:
// [[1, 'red'], [2, 'green'], [3, 'black'], [4, 'white'], [5, 'black']]
// Original Dictionary:
// {'1': 'Austin Little', '2': 'Natasha Howard', '3': 'Alfred Mullins', '4': 'Jamie Rowe'}
// Convert the said dictionary into a list of lists:
// [['1', 'Austin Little'], ['2', 'Natasha Howard'], ['3', 'Alfred Mullins'], ['4', 'Jamie Rowe']]




obj={1: 'red', 2: 'green', 3: 'black', 4: 'white', 5: 'black'}
a=[]
for (i in obj){
    a2=[]
    a2.push(obj[i].length)
    a2.push(obj[i])
    a.push(a2)
    
}
console.log(a)