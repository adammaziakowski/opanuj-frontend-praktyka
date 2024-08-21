/*
* Założenia:
* Liczba musi być:
* 1. większa od 0
* 2. mniejsza od 100
* 3. być podzielna przez 2 (parzysta)
*
*
* Aplikacja nie działa poprawnie, ponieważ input.value jest interpretowany jako string
* */
function isValueValid(value) {
  if (typeof value !== 'number') return false;
  return value > 0 && value < 100 && value % 2 === 0;
}

function validator() {
  const input = document.getElementById('input');
  const validateButton = document.getElementById('button');
  const clearButton = document.getElementById('button2');
  const result = document.getElementById('result');

  validateButton.addEventListener('click', () => {
    const inputValue = Number(input.value);
    if (inputValue && Number.isInteger(inputValue) && isValueValid(inputValue)) {
      result.innerHTML = 'Valid';
    } else {
      result.innerHTML = 'Invalid';
    }
  });

  clearButton.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
