# JavaScript Concepts

### Hoisting and Scoping

Hoisting - Moving variables,functions, classes to global or local scope.
Global Execution Context
- In JS the code runs 2 times.
  - First it will allocate memory
  - Then code will be executed
- Global Execution Context
  - The var will be moved to global scope, first "undefined" will be assigned as value. Then after execution vales will be assigned.
- Local Execution Scope
  - The functions creates their own scope and perform scoping and execution. 

### Difference betweer var, let and const

-  var - Hoisting allowed, Global scope, Re-Declaration allowed
-  let - Hoisting not allowed, Local or Block scope, Re-Declaration not allowed

### Closures in JavaScript

A closure is a combination of the inner function and variables from its parent function or outer function.  
It is created every time when the function is created.
	
> **Definition**  
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
In other words, a closure gives a function access to its outer scope.
In JavaScript, closures are created every time a function is created, at function creation time.


