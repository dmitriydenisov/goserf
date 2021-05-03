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

document.querySelectorAll(".quantity-button").forEach(btn=> {
  btn.addEventListener("click", sum)
})

const nightsElement = []
const guestsElement = []
let countElement = 0

function addResult() {
    document.querySelectorAll(".quantity").forEach((item) => {
        if (countElement % 2 == 0) {
            nightsElement.push(item)
        } else {
            guestsElement.push(item)
        }
        countElement++
    })

    if (countElement == 16) {
        const summ = document.querySelectorAll(".summ")
        for (let i in nightsElement) {
            const nights = nightsElement[i].querySelector(".nights").value
            const guests = guestsElement[i].querySelector(".guests").value
            const sum = nights * sumNights + (guests - 1) * sumGuests
            summ[i].innerText = `$ ${sum}`
        }
    }
}

addResult()

function sum() {
  if (this !== window) {
      parent = this.parentNode
      parent = parent.parentNode
      parent = parent.parentNode
      parent = parent.parentNode
      parent = parent.parentNode
       let nights = parent.querySelectorAll(".holder-slider__info-item")[1]
      let guests = parent.querySelectorAll(".holder-slider__info-item")[2]
      nights = nights.querySelector(".holder-slider__info-title>.quantity>.nights").value
      guests = guests.querySelector(".holder-slider__info-title>.quantity>.guests").value
      sumElement = parent.querySelectorAll(".holder-slider__info-item")[3]
      const summ = nights * sumNights + (guests - 1) * sumGuests
      sumElement = sumElement.querySelector(".holder-slider__info-title>.summ").innerText = `$ ${summ}`
  }
}
sum()