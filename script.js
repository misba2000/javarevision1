//arithmetic


var a=3;
var b=5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);
console.log(++a);
console.log(--a);
console.log(a%b);


//assignment
// var a=3;


//comaprision(relational,equality)


//relational
// var a=1;
// var b=8;
// console.log(a<b);
// console.log(true=1);


//equality
// var a=1;
// var b="1";
// console.log(a===b);


//logical

var x=2;
var y=2;
console.log(!(x=y));

//ternary
// condition ? run if true : run if false;

// var num=3;
// num>2 ? console.log("Positive number") : console.log("Negative number");

//if,else,else if
//switch

// if(condition) {
//     statement;
// }
// else if(condition){
//     statement;
// }
// else{
//     statement;
// }

//example
// var num=5;
// if(num%2==0) {
//     console.log("Even number");
// }
// else{
//     console.log("Odd number")
// }


//switch
// switch(expression) {
//     case n1:
//         statement;
//         break;
//     case n2:
//         statement;
//         break;
//     default:statement; 

// }

// var dice=8;
// switch(dice) {
//     case 1:console.log("dice is one");
//     break;
//     case 2:console.log("dice is two");
//     break;
//     case 3:console.log("dice is three");
//     break;
//     case 4:console.log("dice is four");
//     break;
//     case 5:console.log("dice is five");
//     break;
//     case 6:console.log("dice is six");
//     break;
//     default:console.log("out of range");
    
// }
//looping statements
//tp print from 1-10
// for(var i=1;i<=20;i++){
//     console.log(i);
// }

// while(condition) {
//     statement;
// }
// do{
//     statement;
// }while(condition);


//example for while loop

// let i=0;
// while(i<3) {
//     let multiply=i*2;
//     i++;
//     console.log(multiply);
// }
  

//example for do while loop

// let n=5;
// do{
//     let square=n*n;
//     n--;
//     console.log(square);

// }while(n>0);


//functions

//syntax

// function functionnamr(parameter) {
//     statement;
// }

//example

// function add(a,b) {
//     var sum=a+b;
//     return sum;
// }
//   var res=add(2,5);
// console.log(add(2,5));

//palindrome

// function palin(str) {
//     var reversed="";
//     for(i=str.length-1;i>=0;i--) {
//         reversed+=str[i];
//     }
//     if(str===reversed) {
//         return "given string is palindrome"
//     }
//     else {
//         return "given string is not a palindrome"
//     }
        
// }
// console.log(palin("what"));


//Arrays

//push method

// var color=["red","green","black"];
// console.log(color);
// color.push("yellow");
// console.log(color);

//pop method

// color.pop();
// console.log(color);

 //unshift

//  color.unshift("purple");
//  console.log(color);

//shift method

//  color.shift();
//  console.log(color);

//concatination

// var arr1=["u","v","W"];
// var arr2=["x","y","z"];
// var arr=arr2.concat(arr1);
// console.log(arr);

//slice method

// var color=["red","green","blue","violet"];
// var arr=color.slice(1,3);
// console.log(arr);


//splice method

//deleting elements

// color.splice(0,1);
// console.log(color);

//adding elements
// color.splice(1,0,"Yellow","white");
// console.log(color);

 //inserting two value ,remove one value

//  color.splice(1,1,"yellow","silver");
//  console.log(color);

//creating a string from an array

// console.log(color.join(","));
// console.log(color.join("-"));
// console.log(color.join(""));
// console.log(color.toString());