// Q21.Write a Python program to print all unique values in a dictionary.
// Sample Data : [{"V":"S001"}, {"V": "S002"}, {"VI": "S001"}, {"VI": "S005"}, {"VII":"S005"},
// {"V":"S009"},{"VIII":"S007"}]
// Expected Output : Unique Values: {'S005', 'S002', 'S007', 'S001', 'S009'}

obj=[{"V":"S001"}, {"V": "S002"}, {"VI": "S001"}, {"VI": "S005"}, {"VII":"S005"},
{"V":"S009"},{"VIII":"S007"}]


l=[]
for (i in obj){
    for (j in obj[i]){
        if (!l.includes(obj[i][j])){
            l.push(obj[i][j])
        }
    }
}console.log(l)