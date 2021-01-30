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
    } else alert("Incorrect creditials")
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
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1rRQMdfefBbctMI0sjhvjlFaBD4EzEbvY" width="640" height="480"></iframe>
    `
    down.innerHTML = str
})
