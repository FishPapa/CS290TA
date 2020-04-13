


out1();

function out1(){
  console.log("Here is the output for the first function! Function hoisting works!");
}


out2();
var out2 = function(){
  console.log("Here is the output for the second function!");
}
console.log("Here is the output for the second function! When we call it after the variable has been assigned, it works now!");
out2();
