
function ibg(){

  let ibg=document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
  if(ibg[i].querySelector('img')){
  ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
  }
  }
  }
  
ibg();


function art() {
  let number = 143;
  function sc(){
  for (let index = 0; index < number; index++) {
    console.log(index)
  }
}
return setInterval(sc,1000)
}

let number = document.getElementById('number')
let number2 = document.getElementById('number2')
let number3 = document.getElementById('number3')
let number4 = document.getElementById('number4')

function printNumbers(from, to, element, time) {
  let current = from;
  let timerId = setInterval(function() {
    element.textContent = current;
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 700/time);
}

let burger = document.getElementById('burger'),
  menu__body = document.getElementById('menu');
let menu__link =  document.querySelectorAll('.menu__link');
burger.addEventListener('click', function name() {
  burger.classList.toggle('active')
  menu.classList.toggle('active')
} 
)


// menu__link.addEventListener('click', function name() {
//     burger.classList.remove('active') 
//     menu.classList.remove('active')
// } 
// )
document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector('.scrollto').offsetHeight;
      // const topOffset = 0; // если не нужен отступ сверху 
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});


// использование:
printNumbers(1, 142, number, 142);
printNumbers(1, 63, number2, 63);
printNumbers(1, 18, number3, 18);
printNumbers(1, 27, number4, 27);
