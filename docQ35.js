// Q35. Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.
// Rules:-
// Children under 14 old.Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)
// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky".

let age_category=require("readline-sync")
let age=age_category.questionInt("enter kind age :")
if (age<=14){
    console.log("drink toddy")
}else if (age>14 && age<18){
    console.log("drink coke")
}else if (age<18 && age<21){
    console.log("drink beer")
}else if (age>=30){
    console.log("drink whisky")
}
