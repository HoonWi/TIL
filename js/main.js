// 반복문 (For operator)
// for (시작조건; 종료조건; 변화조건) {}

const ulEl = document.querySelector('ul')

console.log(ulEl)

for(let i = 0; i < 3; i ++){
  const li = document.createElement('li')
  li.textContent = `list-${i + 1}`
  ulEl.appendChild('li')
}