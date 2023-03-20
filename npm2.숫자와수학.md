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