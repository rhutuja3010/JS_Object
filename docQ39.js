// Q39.Write a Python program to filter a dictionary based on values.
// Original Dictionary:
// {'Cierra Vega': 175, 'Alden Cantrell': 180, 'Kierra Gentry': 165, 'Pierre Cox': 190}
// Marks greater than 170:
// {'Cierra Vega': 175, 'Alden Cantrell': 180, 'Pierre Cox': 190}


obj={'Cierra Vega': 175, 'Alden Cantrell': 180, 'Kierra Gentry': 165, 'Pierre Cox': 190}
o={}
for (i in obj){
    if (obj[i]>170){
        o[i]=obj[i]
    }
}console.log(o)
