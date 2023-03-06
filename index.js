/**1. 
Mutating array methods are methods than when applied, modify/change the original array
while non mutating array methods do not affect the original array

Mutating array methods perform actions directly on the original array, e.g. adding, replacing, removing, etc.
While non-mutating array turns a shallow copy of a portion of an array into a new array object

Mutable Examples:           Immutable Examples:
.splice()                   .concat()
.copywithin()               .filter()
.fill()                     .map()
.shift()                    .reduce()
.push()                     .keys()
*/

//2.1
 const languages= ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']
 languages.push('Kotlin');
 console.log(languages);

//2.2
languages.splice(3,0,'Java');
console.log(languages);

//2.3
languages.shift();
console.log(languages);

//2.49
languages.unshift('Scala', 'Swift');
console.log(languages);

//2.5
languages.splice(5,1, 'Go', 'Rust');
console.log(languages);

/** 3
The answer to
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit(fruit) {
    			fruit[2] = "orange";
    			return fruit;
		}
        **/
[ 'apple', 'mango', 'orange' ]

/*/4 
function maxNumber(arrNumbers) {
    for(let arr[i])
}*/



function arrMax(arrNumbers){
let maxNumber = arrNumbers[0]
for(let i = 1; i < arrNumbers.length; i++) {
	if (arrNumbers[i] > maxNumber)
	{
		maxNumber = arrNumbers[i]
	}
}
return maxNumber
}

console.log(arrMax([4, 5, 10, -2]))

//5

let newArr = []
function valTimesIndex(arr){
	for (let i = 0; i < arr.length; i++) {
		newArr.push(i * arr[i])
	}
	return newArr
}
console.log(valTimesIndex([1,2,3,4]))