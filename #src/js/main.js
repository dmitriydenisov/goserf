document.querySelectorAll('.surfboard-box__circle').forEach(item => {
    item.addEventListener('click', function () {
      this.classList.toggle('active')
    })
  })
    
  document.querySelector('[data-menu]').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle("active");  
  })