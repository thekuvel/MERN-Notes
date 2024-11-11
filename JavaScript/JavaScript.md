# JavaScript Important Topics and Syntax <br/>

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
-  var => Hoisting allowed, Global scope, Re-Declaration allowed
-  let => Hoisting not allowed, Local or Block scope, Re-Declaration not allowed

<br/>

# Functions
- Arrow Function ()=>{}
  ```js
    let myFunction = (num1,num2) = {
      let sum = num1 + num2;
      console.log("Im a Arrow => Function. Sum = ",sum);
      return sum;
    };
    ```

- Anonymous Function
  ```js
    let anonymous = function(){
      console.log("Anonymous Function");
    };
    ```

- IIFE Immediately Invoked function
  ```js
    (function(){
      console.log("IIFE")
    })();
    ```

<br/>

# Data type convertion
- String to Number
  ```js
  let str = "10";
  let num = Number(str);
  num = +str;
  num = parseInt(str);
  num = parseFloat(str);
  ```
  
- Number to String
  ```js
  let num = 256;
  let str = "" + num;
  str = num.toString();
  str = num.toString(2);
  ```

- Json to String
  ```js
  let str = Json.stringify(dummyJsonObj);
  ```

- Json to String
  ```js
  let JsonObj = Json.parse(str);
  ```
  
<br/>

# Split and Join

- Split -> String to Array
  ```js
  let str = "50 46";
  let arr = str.split(" "); //inside split brackets the separator will be given.
  // Output => arr = [50,46]
  ```

- Join -> Array to String
  ```js
  let arr = [1,2,3];
  let str = arr.join("-");
  //Output => str = "1-2-3"
  ```
<br/>

# Fixed decimal numbers toFixed(\<number of decimal places\>)
- toFixed() -> Fixed number of decimal numbers
  ```js
  let num = 2;
  console.log(num.toFixed(2)); // 2.00
  num = 4.6782;
  console.log(num.toFixed(1)); // 4.6
  ```
  
<br/>

# Statements
-  Contitional Statements
  -  if
  -  if else
  -  else if
  -  nested if
    
-  Looping Statements
  -  while
  -  doWhile
  -  for

- Logical Operators
  -  AND
  -  OR
  -  NOT

 <br/>
 
# Shallow or Deep copy

### Array and Object destructure
### Shorthand Property
### String literals or Template literals
### OOPS
### Factory MEthod
### .this
### Constructor Functions
### Proptotypes (To add methods to objects)
### Class

<br/>

# Four Pillars of OOPS
-  Abstraction
-  Encapsulation
-  Inherittance
-  Polymorphism

<br/>

### XML HTTP Requests
### MRF
## DOM Manupulation
### getElement, querySelector, inner Html, innet text. innertext context
### Append and append child
### Onclick, alert, confirm and prompt
### setTimeout, cleartimeout, setinterval, cleatInterval and events
## Async Programming
### Callback - Synchronoys callback
### Callback - A-Synchronoys callback
### Callback - Hell
### Promise
### Async await
### Event loop, call stack, micro task queue
### Fectch (GET,PUT,PATCH,DELETE)
### 
### 
### 
### 
