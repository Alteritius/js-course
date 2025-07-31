//starty kod proceduralny
const btn = document.querySelector('button');
let number = 1;
function addElement() {
  const div = document.createElement('div');
  div.textContent = number;
  number++;
  document.body.appendChild(div);
}
btn.addEventListener('click', addElement);
