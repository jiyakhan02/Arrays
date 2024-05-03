"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let friendName = ["Narmeen", "Sana", "Rimsha", "Samra", "Moutter", "Shahida"];
// console.log(friendName);
//               Arrays.Push()
// The push() method adds a new element to an array (at the end):
// Parameter: This method accept a single parameter
// Return Value: The push() method returns the new array length:
friendName.push("mehak");
console.log(friendName);
//             Arrays.pop()
// The pop() method removes the last element from an array:
// Parameter: This methods does not accept any parameter.
// Return Value: This method returns the removed element from the array.
friendName.pop();
console.log(friendName);
//             Arrays.shift
// The Array.shift() is used to remove the first element from an array and returns that element.
// Parameter: This methods does not accept any  parameter.
// Return Value: This method returns the removed single value of the array.
friendName.shift();
console.log(friendName);
//              Arrays.unshift
// The Array.unshift() is used to add one or more elements to the beginning of an array and returns the new length of the array.
// Syntax: array.unshift( element1, ..., elementN )
// Parameter: This parameter is the elements to add to the front of the array.
// Return Value: This method returns the length of the new array.
friendName.unshift("Nimra", "Anumta");
console.log(friendName);
//              Arrays.Slice
// The Array.slice() is used to extract a section of an array and returns a new array.
// Syntax:  array.slice( begin [,end] );
// begin : This parameter is the Zero-based index at which to begin extraction.
// end : This parameter is the Zero-based index at which to end extraction.
// Parameter: This method accepts two parameter.
// The method then selects elements from the start argument, and up to (but not including) the end argument.
// Return Value: This method returns the extracted array .
//               Note
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.
let arr = friendName.slice(2, 4);
console.log(arr);
//             Arrays.Splice()
// The Array.splice() is used to change the content of an array, adding new elements while removing old elements.
// Syntax: array.splice(index, howMany, [element1][, ..., elementN]);
// Parameter: This method accept three parameter.
// index : This parameter is the index at which to start changing the array.
// howMany : This parameter is the integer indicating the number of old array elements to remove.
// element1, …, elementN : This parameter is the elements to add to the array.
// Return Value: This method returns the extracted array.
friendName.splice(2, 0, "areeba", "iqra");
console.log(friendName);
// //              Array toSpliced()
// /* ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.
// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.*/
//                Arrays.toString
// The Array.toString() is used to get a string representing the source code of the specified array and its elements.  
// Syntax: array.toString()
// Parameter: This method does not accept any parameter. 
// Return Value: This method returns the string representing the array. 
let string = friendName.toString();
console.log(string);
//                  Array length
// The length property returns the length (size) of an array:
let size = friendName.length;
console.log(size);
//            Array.join()
// The Array.join() is used to joins all the elements of an array into a string. 
// Syntax: array.join(separator)
// Parameter: This method accept a single parameter .
// separator : This parameter is the a string to separate each element of the array.
// Return Value: This method returns the string after joining all the array elements. 
friendName.join(",");
//              Array.concat()
// The Array.concat() is used to merge two or more arrays. 
// Syntax: array.concat(value1, value2, ..., valueN)
// Parameter: This method accepts a single parameter. 
// valueN: These parameters are arrays and/or values to concatenate.
// Return Value: This method returns the new array.
let classMate = ["alisha", "nida", "saba"];
console.log(friendName.concat(classMate));
//               Array.indexOf()
// The Array.indexOf() is used to find the index of the first occurrence of the search element provided as the argument to the function. 
// Syntax: array.indexOf(searchElement[, fromIndex])
// Parameter: This method accepts two parameter as mentioned above and described below: 
// searchElement : This parameter is the Element to locate in the array.
// fromIndex : This parameter is the index at which to begin the search.
// Return Value: This method returns the index of the found element. 
let arr0 = friendName.indexOf("sana") + 5;
console.log(arr0);
//                Array.lastIndexOf()
// The Array.lastIndexOf() is used to get the last index at which a given element can be found in the array. 
// Syntax: array.lastIndexOf(searchElement[, fromIndex])
// Parameter: This method accepts two parameter.
// searchElement : This parameter is the element to locate in the array.
// fromIndex : This parameter is the index at which to start searching backwards.
// Return Value: This method returns the index of the found element from the last. 
let arr1 = friendName.lastIndexOf("Rimsha");
console.log(arr1);
//                Array.includes()
// ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
// Syntax: array.includes(search-item)
// Array.includes() allows to check for NaN values. Unlike Array.index()
let arr2 = friendName.includes("Rimsha");
console.log(arr2);
//                Array.sort() 
// The Array.sort() is used to sort the elements of an array. 
// Syntax: array.sort( compareFunction )
// Parameter: This method accept a single parameter.
// compareFunction : This parameter is the function that defines the sort order
// Return Value: This method returns the sorted array. 
let arr3 = friendName.sort();
console.log(arr3);
//              Array.reverse()
// The Array.reverse() isused to reverses the element of an array. 
// Syntax: array.reverse(); 
// Parameter: This methods does not accept any parameter. 
// Return Value: This method returns the reversed single value of the array. 
let arr4 = friendName.reverse();
console.log(arr4);
//              Array.forEach()
// The Array.forEach() is used to calls a function for each element in the array. 
// Syntax: array.forEach(callback[, thisObject])
// Parameter: This method accepts two parameter.
// callback : This parameter is the Function to test for each element.
// thisObject : This parameter is the Object to use as this when executing callback.
// Return Value: This method returns created array. 
friendName.forEach(function (value) {
    console.log(value);
});
//              Array.map()
// The Array.map() is used to create a new array with the results of calling a provided function on every element in this array.
// Syntax: array.map(callback[, thisObject])
// Parameter: This method accepts two parameters. 
// callback : This parameter is the function that produces an element of the new Array from an element of the current one.
// thisObject : This parameter is the Object to use as this when executing callback.
// Return Value: This method returns the created array.
let numbers = [2, 4, 6, 8, 9];
let numbers2 = numbers.map(function (value, index) {
    console.log("key :", index, "value :", value * value);
});
//             Array.filter()
// The Array.filter() is used to creates a new array with all elements that pass the test implemented by the provided function. 
// Syntax: array.filter(callback[, thisObject])
// Parameter: This methods accepts two parameter.
// callback : This parameter is the Function to test for each element.
// thisObject : This parameter is the Object to use as this when executing callback.
// Return Value: This method returns created array.
function myfunc(element, index, arrays) {
    return element > 2;
}
let value = numbers.filter(myfunc);
console.log(value);
//              Array.reduce()
// The Array.reduce() is used to apply a function against two values of the array as to reduce it to a single value. 
// Syntax: array.reduce(callback[, initialValue]).
// Parameter: This method accept two parameter.
// callback : This parameter is the Function to execute on each value in the array.
// initialValue : This parameter is the Object to use as the first argument to the first call of the callback.
// Return Value: This method returns the reduced single value of the array.  
let arr6 = numbers.reduce(function (a, b) {
    return a + b;
});
console.log(arr6);
//              Array.reduceRight()
// The Array.reduceRight() is used to apply a function against two values of the array as to reduce it to a single value in a right to left manner. 
// Syntax: array.reduceRight(callback[, initialValue])
// Parameter: This method accept two parameter
// callback : This parameter is the Function to execute on each value in the array.
// initialValue : This parameter is the Object to use as the first argument to the first call of the callback.
// Return Value: This method returns the reduced right single value of the array. 
let arr7 = numbers.reduceRight(function (a, b) {
    return a - b;
});
console.log(arr7);
//             Arrays.some()
// The Array.some() is  used to check for some element in the array passes the test implemented by the provided function.
// Syntax: array.some(callback[, thisObject])
// Parameter: This method accept two parameter.
// callback : This parameter is the Function to test for each element.
// thisObject : This parameter is the Object to use as this when executing callback.
// Return Value: This method returns true if some element in this array satisfies the provided testing function.  
function myfunc2(element, index, array) {
    return element > 4;
}
;
let arr9 = numbers.some(myfunc2);
console.log(arr9);
