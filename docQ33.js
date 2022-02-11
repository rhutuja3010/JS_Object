// Q33.Python: Print a dictionary line by line
// students = {'Aex':{'class':'V',
// 'rolld_id':2},
// 'Puja':{'class':'V',
// 'roll_id':3}}
// Sample Output:
// Aex
// class : V
// rolld_id : 2

students = {'Aex':{'class':'V',
'rolld_id':2},
'Puja':{'class':'V',
'roll_id':3}}
for (i in students){
    console.log(i)
for (j in students[i]){
    console.log(j,students[i][j])
    break

}}
    