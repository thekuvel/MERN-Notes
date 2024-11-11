# JS Array methods

let array = [1,2,3,4,6]

## splice
<p>To insert and or delete values in the middle or anywhere in the array.</p>
array.splice(index, deletionCount, valuesTobeInserted) <br/>

```js
array.splice(4,0,5) // [1,2,3,4,5,6]
```


## join
<p>Join all elements in the array to a single string.</p>

```JavaScript
const fruits = ['Apple', 'Banana', 'Cherry'];
const result = fruits.join(' - ');
console.log(result);  // Output: "Apple - Banana - Cherry"

```

## shift and unShift

## push and pop