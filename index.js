// Выбираем все элементы с классом ".quantity"
document.querySelectorAll('.quantity').forEach(function (item) {
  // Получаем элемент input[type="number"] относительно текущего перебираемого элемента
  const input = item.querySelector('input[type="number"]')
  // Получаем элемент с классом '.quantity-up' относительно текущего перебираемого элемента
  const btnUp = item.querySelector('.quantity-up')
  // Получаем элемент с классом '.quantity-down' относительно текущего перебираемого элемента
  const btnDown = item.querySelector('.quantity-down')
  
  // Получаем значения атрибутов min и max от элемента input
  const min = input.getAttribute('min')
  const max = input.getAttribute('max')
  // Объявляем переменные для хранения нового и старого значений
  let newVal = ''
  let oldValue = ''
  
  
  // Обрабатываем клик по кнопке btnUp
  btnUp.addEventListener('click', function () {
    // Получаем значение из элемента input и сохраняем в переменной oldValue
    oldValue = parseFloat(input.value)
  
    if (oldValue >= max) {
      newVal = oldValue
    } else {
      newVal = oldValue + 1
    }

    // Находим элемент input внутри текущего перебираемого элемента "item" и записываем в его атрибут value newVal
    item.querySelector('input').value = newVal
  })

  btnDown.addEventListener('click', function() {
    oldValue = parseFloat(input.value)

    if (oldValue <= min) {
      newVal = oldValue;
    } else {
      newVal = oldValue - 1;
    }
    item.querySelector('input').value = newVal
  });
})

// Для строки
// spinner.find("input").trigger("change");
// Надо вынести функции для каждого обработчика кнопки отдельно, например
// function buttonDownHandler() {
//   oldValue = parseFloat(input.value)

//   if (oldValue <= min) {
//     newVal = oldValue;
//   } else {
//     newVal = oldValue - 1;
//   }
//   item.querySelector('input').value = newVal
//   В данной строке т.к. используется триггер на сколько я понимаю, когда на элементе input срабатывает событие change выполняется то же самое, что и для события click по кнопке 'buttonDown'
    // Аналогично будет и для buttonUp
//   item.querySelector('input').addEventListener('change', buttonDownHandler)
// };

// function buttonUpHandler() {
//   oldValue = parseFloat(input.value)

//   if (oldValue >= max) {
//     newVal = oldValue;
//   } else {
//     newVal = oldValue + 1;
//   }
//   item.querySelector('input').value = newVal
// };

// После внутри цикла написать
// btnDown.addEventListener('click', buttonUpHandler)

// Вот эти две строки Jq разбиты на ряд переменных ниже и выполняется все тоже самое что и тут, вычисляется сумма и записывается в html для элемента с классом ".summ"
// let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
// $('.summ').html('$' + summ);

const summElement = document.querySelector('.summ')

const nights = document.querySelector('.nights').value
const sumNights = document.querySelector('.summ').dataset.nights
const guests = document.querySelector('.guests').value
const sumGuests = document.querySelector('.summ').dataset.guests

let summ = nights * sumNights + (guests - 1) * sumGuests

summElement.innerHTML = `$ ${summ}`


// Вот тут на jquery обрабатывается клик по кнопке и вычисляется сумма и записывается в разметку. Ниже анагогичный код на чистом JS
// $('.quantity-button').on('click', function () {
//   let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
//   $('.summ').html('$' + summ);
//   })

document.querySelector('.quantity-button').addEventListener('click', function () {
  let summ = nights * sumNights + (guests - 1) * sumGuests
  summElement.innerHTML = `$ ${summ}`
})
