const down = document.getElementById('result')
const heart = document.getElementById('heart')
const dia = document.getElementById('dia')
const mybutton = document.getElementById("myBtn");
const about = document.getElementById('div3')
const locate = document.getElementById('div2')
const name = document.getElementById('name')
const pass = document.getElementById('password')
const but = document.getElementById('sub')

const login = ()=> {
    console.log("hello")
    if(name.value === "root" && pass.value === "") {
        const log = document.querySelector('.login')
        log.style.display = "none"
        const grid = document.querySelector('.grids')
        grid.style.display = "grid"
    }
    else if(name.value === "yogi" && pass.value === "") {
        const log = document.querySelector('.login')
        log.style.display = "none"
        const grid = document.querySelector('.grids')
        grid.style.display = "grid"
    }
    else if(name.value === "abhishek" && pass.value === "") {
      const log = document.querySelector('.login')
      log.style.display = "none"
      const grid = document.querySelector('.grids')
      grid.style.display = "grid"
  }
  else if(name.value === "saitama" && pass.value === "<3") {
    const log = document.querySelector('.login')
    log.style.display = "none"
    const grid = document.querySelector('.grids')
    grid.style.display = "grid"
  }
    else alert("Incorrect creditials")
}

but.addEventListener('click', (e)=> {
    e.preventDefault()
    login()
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

locate.addEventListener('click', ()=> {
    let str = ""
    str += `
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d55923.177560818694!2d80.92998711491155!3d26.836892888147844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shospitals!5e1!3m2!1sen!2sin!4v1612035761842!5m2!1sen!2sin" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    `
    down.innerHTML = str
})