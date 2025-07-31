document.addEventListener('DOMContentLoaded', () => {
  console.log('witaj świecie');

  document.querySelector('.sampleText').style.fontSize = '40px';
  const rangeInput = document.querySelector('.rangeInput');
  const sampleText = document.querySelector('.sampleText');
  const fontSelector = document.querySelector('.fontSelector');

  rangeInput.addEventListener('input', (e) => {
    sampleText.style.fontSize = e.target.value + 'px';
  });

  fontSelector.addEventListener('change', (e) => {
    sampleText.style.fontFamily = e.target.value;
  });
});
