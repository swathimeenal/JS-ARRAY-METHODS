// JAVA SCRIPT ARRAY METHODS
// lastIndexOf()
//Definition: This method returns the last index at which given element can be found in the array, or it will print (-1),if the given element is not present in the array
//Syntax: lastIndexOf(search element)
//       lastIndexOf(search Element, fromIndex)
var flowers = ["rose","lilly","jasmine","rose"];
console.log(flowers.lastIndexOf('rose'));//3
console.log(flowers.lastIndexOf('jasmine'));//2
console.log(flowers.lastIndexOf('lotus'));//-1
console.log(flowers.lastIndexOf('lilly',2));//1
//indexOf()
//Definition: This method returns the first index at which given element can be found in the array, or it will print (-1),if the given element is not present in the array
//Syntax: indexOf(search element)
//       indexOf(search Element, fromIndex)
var flowers = ["rose","lilly","jasmine","rose"];
console.log(flowers.indexOf('rose'));//0
console.log(flowers.indexOf('jasmine'));//2
console.log(flowers.indexOf('lotus'));//-1
console.log(flowers.indexOf('rose',2));//3