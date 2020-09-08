const $INSTRUCTIONS = document.querySelector('#instructions')
const $FIGURES = document.querySelector('.figures')
const $SQUARE = document.querySelector('.figures__square')
const $RECTANGLE = document.querySelector('.figures__rectangle')
const $CIRCLE = document.querySelector('.figures__circle')
const $TRIANGLE = document.querySelector('.figures__triangle')
const $DIAMOND = document.querySelector('.figures__diamond')
const $TRAPEZE = document.querySelector('.figures__trapeze')
const $WIDTH = document.querySelector('#width')
const $HEIGHT = document.querySelector('#height')
const $BASE = document.querySelector('#base')
const $BUTTON = document.querySelector('#button')
const $BACK = document.querySelector('#back')
const list = [$SQUARE, $RECTANGLE, $CIRCLE, $TRIANGLE, $DIAMOND, $TRAPEZE]

const removeFigures = exception => {
  for(i = 0; i < list.length; i++){
    if(exception != list[i]){
      list[i].classList.add('remove')
    }
  }
  $INSTRUCTIONS.innerText = "Fill in the all the fields"
  $FIGURES.classList.remove('figures')
  exception.classList.remove('selectable')
  exception.style.margin = '0 auto'
  $WIDTH.style.visibility = 'initial'
  switch(exception){
    case $SQUARE:
      $WIDTH.placeholder = 'Side'
      $BUTTON.addEventListener('click', () => alert(`The Area of the Square is: ${parseFloat($WIDTH.value * 4)}`))
      break
    case $RECTANGLE:
      $WIDTH.placeholder = 'Base'
      $HEIGHT.style.visibility = 'initial'
      $HEIGHT.placeholder = 'Height'
      $BUTTON.addEventListener('click', () => alert(`The Area of the Rectangle is: ${parseFloat($WIDTH.value) * parseInt($HEIGHT.value)}`))
      break
    case $CIRCLE:
      $WIDTH.placeholder = 'Radius'
      $BUTTON.addEventListener('click', () => alert(`The Area of the Circle is: ${parseFloat($WIDTH.value) * 3.1416}`))
      break
    case $TRIANGLE:
      $WIDTH.placeholder = 'Base'
      $HEIGHT.style.visibility = 'initial'
      $HEIGHT.placeholder = 'Height'
      $BUTTON.addEventListener('click', () => alert(`The Area of the Triangle is: ${(parseFloat($WIDTH.value) * parseFloat($HEIGHT.value)) / 2}`))
      break
    case $DIAMOND:
      $WIDTH.placeholder = 'Base'
      $HEIGHT.style.visibility = 'initial'
      $HEIGHT.placeholder = 'Height'
      $BUTTON.addEventListener('click', () => alert(`The Area of the Diamond is: ${(parseFloat($WIDTH.value) * parseFloat($HEIGHT.value) / 2)}`))
      break
    case $TRAPEZE:
      $WIDTH.placeholder = 'Short base'
      $HEIGHT.style.visibility = 'initial'
      $HEIGHT.placeholder = 'Height'
      $BASE.style.visibility = 'initial'
      $BASE.placeholder = 'Long base'
      $BUTTON.addEventListener('click', () => alert(`The Area of the Trapeze is: ${((parseFloat($WIDTH.value) + parseFloat($BASE.value)) * parseFloat($HEIGHT.value)) / 2}`)
      )
      break
  }
  $BUTTON.style.visibility = 'initial'
  $BACK.style.visibility = 'initial' 
}

const goBack = () =>{
  for (i = 0; i < list.length; i++) {
    list[i].classList.remove('remove')
    if(!list[i].classList.contains('selectable')){
      list[i].classList.add('selectable')
      list[i].style.margin = 'unset'
    }
  }
  $INSTRUCTIONS.innerText = "Choose a Figure"
  $FIGURES.classList.add('figures')
  $WIDTH.style.visibility = 'hidden'
  $HEIGHT.style.visibility = 'hidden'
  $BASE.style.visibility = 'hidden'
  $BUTTON.style.visibility = 'hidden'
  $BACK.style.visibility = 'hidden' 
}

$SQUARE.addEventListener('click', () => removeFigures($SQUARE))
$RECTANGLE.addEventListener('click', () => removeFigures($RECTANGLE))
$CIRCLE.addEventListener('click', () => removeFigures($CIRCLE))
$TRIANGLE.addEventListener('click', () => removeFigures($TRIANGLE))
$DIAMOND.addEventListener('click', () => removeFigures($DIAMOND))
$TRAPEZE.addEventListener('click', () => removeFigures($TRAPEZE))
$BACK.addEventListener('click', () => goBack())