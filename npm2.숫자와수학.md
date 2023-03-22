const pi = 3.14159265358979;
console.log(pi);

// .toFixed(n) 소수점 n번째 자리까지 표시
const str = pi.toFixed(2) // 3.14
console.log(str);
console.log(typeof str); // toFixed()는 문자를 리턴

// 전역함수 parseInt(), parseFloat()
const integer = parseInt(str);
const float = parseFloat(str);
console.log(integer);// 3
console.log(float); // 3.14
console.log(typeof integer, typeof float); // number number

// Math
console.log(Math.abs(-12)) // 12 절대값
console.log(Math.min(2, 8)) // 2 최소값
console.log(Math.max(2, 8)) // 8 최대값
console.log(Math.ceil(3.14)) // 4 올림
console.log(Math.floor(3.14)) // 3 내림
console.log(Math.round(3.14)) // 3 반올림
console.log(Math.random()) // 난수생성