# JS Sorting Algorithm

In therms of performance for larger inputs,
Insertion Sort is better than Selection Sort which is better than Bubble Sort.

IS < SS < BS

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

### Insertion Sort

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

```

### Counting Sort

```JavaScript


```

### Merge Sort

```JavaScript



```