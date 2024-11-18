# Searching

let numbers = [4,3,9,8,2,1,6];

console.log(numbers.includes(8));

console.log(numbers.indexOf(8));

## Linear Search Algorithm

```JavaScript

function lSearch(numbers,key){
	for(let i=0;i<numbers.length;i++){
		if(key == numbers[i]){
			return true;
		}
	}
	return false;
}

console.log(lSearch(numbers,4))

```

## Binary Search

```JavaScript

function bSearch(numbers,key){

	let start = 0;
	let end = numbers.length-1;

	while (start <= end) {
		let middle = start + (end-start)/2;

		if(numbers[middle] === key) return true;
		else if(key < numbers[middle]) end = middle - 1;
		else if (key > numbers[middle]) start = middle + 1;
	}

	return false;

}

let numbers = [4,3,9,8,2,1,6];
numbers.sort((a,b)=>a-b);

console.log(bSearch(numbers,20));

```

## Ternary Search

```JavaScript


function tSearch(numbers,key){

	let s = 0, e = numbers.length-1;

	while (s <= e){
		let m1 = s + Math.floor((e-s)/3);
		let m2 = e - Math.floor((e-s)/3);
		if(key === numbers[m1] || key === numbers[m2]) return true;
		else if(key < numbers[m1]) e = m1-1;
		else if(key > numbers[m2]) s = m2+1;
		else{
			s = m1+1;
			e = m2-1;
		}
	}

	return false;

}

let numbers = [4,3,9,8,2,1,6];
numbers.sort((a,b)=>a-b);

console.log(tSearch(numbers,9));

```