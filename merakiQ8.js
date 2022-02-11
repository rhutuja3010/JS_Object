let list1=['one','two','three','four','five']
let list2=[1,2,3,4,5]
let o={}
for (i in list1){
    o[list1[i]]=list2[i]
}console.log(o)