# JS String

## slice

stringVariable.slice(starting Index, Ending Index);

```JavaScript
let word = "apple";
console.log(word.slice(1,)); //pple
```

## String traversal

let word = "apple";

```JavaScript
for(let char of word){
	console.log(char)
}
```

```JavaScript
for(let index in word){
	console.log(word[index]);
}
```

```JavaScript
for(let i=0; i<word; i++){
	console.log(word[i]);
}
```

```JavaScript
let i=0;
while( i<word; ){
	console.log(word[i]);
	i++;
}

do{
	console.log(word[i]);
	i++;
}while( i<word; )

```

## Recursion : is a function that calls itself.

```JavaScript
function printChars(){
	console.log(word);
	printChars()
}

printChars();
```

### Print word 3 times

```JavaScript

function printChars(word,count,times){
	if(count === times) return;
	console.log(word);
	printChars(word,count+1,times)
}

printChars(word,0,3);
```

#### Reverse the string

1. Print the word from reverse
2. Two pointer technique

```JavaScript
	let charArray = word.split("");
	
	let first = 0;
	let last = charArray.length-1;
	
	while (first<last){
		let char = charArray[first];
		charArray[first] = charArray[last];
		charArray[last] = char;
		
		first++;
		last--
	}
	
	console.log(charArray.join(""));
	
```

3. Reverse using Recursion

```JavaScript

function reverse(word){
	if(word === "") return;
	
	//console.log(word.charAt(0)); //To print the values in straight order.
	
	reverse(word.slice(1,));
	console.log(word.charAt(0)); //To print the values in reverse.
	
	//reverse(word.slice(1,0)) + word.charAt(0) // Alternate to above method.

}

let word = "apple";
reverse(word);

```
