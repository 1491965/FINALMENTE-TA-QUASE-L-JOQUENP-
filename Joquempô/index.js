var $buttonS1 = document.querySelector('.button-stone-1')
var $buttonP1 = document.querySelector('.button-paper-1')
var $buttonSC1 = document.querySelector('.button-scissors-1')

var $buttonS2 = document.querySelector('.button-stone-2')
var $buttonP2 = document.querySelector('.button-paper-2')
var $buttonSC2 = document.querySelector('.button-scissors-2')

var $field1 = document.querySelector('.field-1')
var $field2 = document.querySelector('.field-2')

$buttonS1.addEventListener('click', function(){
    $field1.innerHTML = "<img class='image-move' src='./styles/imagens/stone.png' />"
})

$buttonP1.addEventListener('click', function(){
    $field1.innerHTML = "<img class='image-move' src='./styles/imagens/paper.png' />"
})

$buttonSC1.addEventListener('click', function(){
    $field1.innerHTML = "<img class='image-move' src='./styles/imagens/scissors.png' />"
})

$buttonS2.addEventListener('click', function(){
    $field2.innerHTML = "<img class='image-move' src='./styles/imagens/stone.png' />"
})

$buttonP2.addEventListener('click', function(){
    $field2.innerHTML = "<img class='image-move' src='./styles/imagens/paper.png' />"
})

$buttonSC2.addEventListener('click', function(){
    $field2.innerHTML = "<img class='image-move' src='./styles/imagens/scissors.png' />"
})