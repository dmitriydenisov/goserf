document.querySelectorAll('.surfboard-box__circle').forEach(item => {
    item.addEventListener('click', function () {
      this.classList.toggle('active')
    })
  })
    
  document.querySelector('[data-menu]').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle("active");  
  })

document.querySelectorAll('.quantity').forEach(function (item) {
  const input = item.querySelector('input[type="number"]')
  const btnUp = item.querySelector('.quantity-up')
  const btnDown = item.querySelector('.quantity-down')
  const min = input.getAttribute('min')
  const max = input.getAttribute('max')
  let newVal = ''
  let oldValue = ''
  
  function changeValue(value,num){
    oldValue = parseFloat(input.value)  
    if (value) {
      newVal = oldValue
    } else {
      newVal = oldValue + num
    }
    item.querySelector('input').value = newVal  
  }  
  btnUp.addEventListener('click', function () {
    changeValue(oldValue >= max,1)
  })
  btnDown.addEventListener('click', function() {
    changeValue(oldValue <= min,-1)
  });
})


function buttonUpHundler(){
  changeValue(oldValue >= max,1)
};


const summElement = document.querySelector('.summ')
const sumNights = document.querySelector('.summ').dataset.nights
const sumGuests = document.querySelector('.summ').dataset.guests


function sum(){
  const nights = document.querySelector('.nights').value
  const guests = document.querySelector('.guests').value
  let summ = nights * sumNights + (guests - 1) * sumGuests
  summElement.innerHTML = `$ ${summ}`
}

sum()

document.querySelectorAll(".quantity-button").forEach(btn=> {
  btn.addEventListener("click", sum)
})