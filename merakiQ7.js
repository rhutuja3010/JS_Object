myDict= {
    1: 'NAVGURUKUL',
    2: 'IN',
    3:{
    'A' : 'WELCOME',
    'B' : 'To',
    'C' : 'DHARAMSALA'
    }
    }
for (i in myDict){
    if (typeof[i]==='object'){
        delete myDict[i]['A']
    }
}console.log(myDict)