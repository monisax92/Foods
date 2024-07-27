/////////
// navbar
/////////

document.querySelector('.menu').addEventListener('click', () => {
  document.querySelectorAll('.target').forEach(item => {
    item.classList.toggle('change');
  })
})

//////////////////////////
// section 1 icons slides
/////////////////////////

const icons = document.querySelectorAll('.section-1-icons i');
let iconCounter = 1;

setInterval(() => {
  iconCounter++;
  const icon = document.querySelector('.section-1-icons .change');

  icon.classList.remove('change');

  if(iconCounter > icons.length) {
    icons[0].classList.add('change');
    iconCounter = 1;
  } else {

  }

  icon.nextElementSibling.classList.add('change');
}, 3000)