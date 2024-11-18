# JS Sorting Algorithm

In therms of performance for larger inputs,
Insertion Sort is better than Selection Sort which is better than Bubble Sort.

IS < SS < BS

## Inbuilt function

```JavaScript

let arr = [2, 6, 1, 3, 5, 8, 2];
console.log(arr.sort((a,b) => a-b))

```

## Bubble Sorting

Check all values in an array one by one from 0 index to array length. Move the largest to the end.
Use nested for loop.

```JavaScript

function bubbleSort(numbers){

	for(let j=0;j<numbers.length;j++){
		for(let i=0; i<numbers.length; i++){
			if(numbers[i]>numbers[i+1]){
				numbers[i] = numbers[i] + numbers[i+1];
				numbers[i+1] = numbers[i] - numbers[i+1];
				numbers[i] = numbers[i] - numbers[i+1];
			}
		}
	}

	console.log(numbers);
}

let numbers = [6,5,7,3,4,1,2];
bubbleSort(numbers);

```

## Selection Sort

```JavaScript

function findIndex(numbers,i){
	let minIndex = i;
	let minValue = numbers[i];
	for(j=i+1; j<numbers.length; j++){
		if(numbers[j]<minValue){
			minValue = numbers[j];
			minIndex = j;
		}
	}
	return minIndex;
}

function selectionSort(numbers){
	for(let i=0; i<numbers.length; i++){

		let minIndex = findIndex(numbers, i);

		let temp = numbers[i];
		numbers[i] = numbers[minIndex];
		numbers[minIndex] = temp;

	}

	console.log(numbers.join("  "))
}

let numbers = [6,5,7,3,4,1,2];
selectionSort(numbers);

```

## Insertion Sort

Consider an array with sorted and unsorted part. Move elements from unsorted part in to sorted part and loop over.

```JavaScript

function insertionSort(numbers){
	for(let i=0;i<numbers.length; i++){
		let box = i;
		let boxValue = numbers[box];

		for(let j = box-1; j>=0; j--){
			if(boxValue < numbers[j]){
				numbers[j+1] = numbers[j];
				box = j;
			}
		}

		numbers[box] = boxValue;
	}

	console.log(numbers.join("  "));
}

let numbers = [6,5,7,3,4,1,2];
insertionSort(numbers);

function insertionSort2(arr){
	for(let i=1;i<arr.length;i++){
		
		let val = arr[i];
		let j = i-1;

		while(j>=0 && arr[j]>val){
			arr[j+1] = arr[j];
			j--;
		}
		arr[j+1] = val;
	}
	console.log(arr);
}

insertionSort2(numbers);

```

### Counting Sort

```JavaScript
function countingSort(numbers){

}

//Counting Sort

function countingSort(arr){
	
	// This freq finding is called hashing method
	let freq = {};

	for(let i=0; i<arr.length; i++){
		freq[arr[i]] = 0;
	}

	for(let i=0; i<arr.length; i++){
		freq[arr[i]]++;
	}

	let newArr = [];

	for(key in freq){
		for(let i=0; i<freq[key]; i++){
			newArr.push(key);
		}
	}

	console.log(newArr.join(" "));
}

let arr = [2, 6, 1, 3, 5, 8, 2];
countingSort(arr);

```

### Merge Sort

```JavaScript

function merg(leftArr, rightArr){
	let sortedArr = [];
	while(leftArr.length && rightArr.length){
		if(leftArr[0]<rightArr[0]){
			sortedArr.push(leftArr.shift());
		}else{
			sortedArr.push(rightArr.shift());
		}
	}

	return [...sortedArr, ...leftArr, ...rightArr];
}

function mergeSort(arr){

	if(arr.length<2) return arr;
	
	let mid = Math.floor(arr.length / 2);

	let leftArr = arr.slice(0,mid);
	let rightArr = arr.slice(mid);
	// console.log(leftArr, rightArr);
	return merg(mergeSort(leftArr), mergeSort(rightArr));

}

let arr = [2, 6, 1, 3, 5, 8, 2, -2];
console.log(mergeSort(arr).join(" "));

```