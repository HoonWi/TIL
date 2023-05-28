const numbers = [1, 2, 3, 4]
const fruits = ['apple', 'banana', 'Cherry']


// .length 배열의 아이템의 갯수 확인
console.log(numbers.length) // 4
coonsole.log(fruits.length) // 3
coonsole.log([1, 2].length) // 2

console.log([].length) // 0

// .concat() 두 개의 배열을 더해서 반환해준다. 원본 데이터에 손상이 가지 않음.
console.log(numbers.concat(fruits)) // 

// .foreach(element, index, array)
// .map = foreach와 동일하지만 return값이 있다.
