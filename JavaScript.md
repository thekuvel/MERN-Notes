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

### Functions
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

### Data type convertion
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

### Split and Join

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

### Fixed decimal numbers toFixed(\<number of decimal places\>)
- toFixed() -> Fixed number of decimal numbers
  ```js
  let num = 2;
  console.log(num.toFixed(2)); // 2.00
  num = 4.6782;
  console.log(num.toFixed(1)); // 4.6
  ```


### .this
### Spread and Rest
### Destructuring Array and Object
### Shorthand Property
### Class
### MRF
