// CLICAR NO MENU ABRIR O BOX E MENU

const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu')
const box = document.querySelector('.box')
const menuX = document.querySelector('.icon-close-x')
const links = document.querySelectorAll('.menu ul li a')
const btnSelect = document.querySelectorAll('.btn-select')
const modal = document.querySelector('.modal-start')
const iconClose = document.getElementById('icon-close')

hamburguer.addEventListener('click', () => {
  hamburguer.style.display = 'none'
  menuX.style.display = 'block'
  menuX.style.visibility = 'visible'
  menuX.style.position = 'relative'
  menuX.style.zIndex = 2000

  menu.classList.toggle('active')
  box.classList.toggle('transperent')
})

// AO CLICAR NO X SAIR DO MENU
menuX.addEventListener('click', function () {
  menu.classList.remove('active')
  box.classList.remove('transperent')
  menuX.style.display = 'none'
  hamburguer.style.display = 'block'
})

// CLICAR NOS LINKS DO MENU FECHAR
for (let lk of links) {
  lk.addEventListener('click', function () {
    menu.classList.remove('active')
    box.classList.remove('transperent')
    menuX.style.display = 'none'

    if(window.innerWidth >= 900){
      hamburguer.style.display='none'
    }else{
      hamburguer.style.display = 'block'
    }
  })
}

// MODAL BACK THIS PROJECT
// AO CLICAR NO SELECT REWARD ELE ABRE O MODAL

for (let element of btnSelect) {
  element.addEventListener('click', () => {
    modal.classList.toggle('show')
    // faz com que dê um scroll até o top 0 e left 0 smooth
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  })
}

// clicar no IconClose  da Modal ele fecha e retira a seleção das opções selecionadas
iconClose.addEventListener('click', () => {
  modal.classList.toggle('show')
  for (let element of arraySelectItem) {
    element.classList.remove('show')
  }
  // colocar todas as bordas do grid modal item cinza
  for (let element of arrayGridModalItem) {
    // element.style.transition='1s ease'
    element.style.border = '1px solid gray'
  }
  // remover todas as classes moderate-cyan dos elementos arrayH5
  for (let element of arrayH5) {
    element.classList.remove('moderate-cyan')
  }
})

// seleção do radio na pagina
const arraySelectItem = document.querySelectorAll('.selected-item')

// BUTÕES RADIO
const arrayRadio = document.querySelectorAll('.reward')

const arrayGridModalItem = document.querySelectorAll('.grid-modal-item')

let arrayH5 = document.querySelectorAll('.grid-modal-item .selected h5')

// Botões da Classe SelectItem do meu modal
const arrayButtons = document.querySelectorAll('.selected-item button')
// Class validation
const validation = document.querySelector('.validation')
// butao Got IT
const check = document.getElementById('check')

arrayRadio[0].addEventListener('click', function () {
  let color = `#3cb4ac`
  // remover a classe show dos select Item
  for (let element of arraySelectItem) {
    element.classList.remove('show')
  }
  // colocar todas as bordas do grid modal item cinza
  for (let element of arrayGridModalItem) {
    // element.style.transition='1s ease'
    element.style.border = '1px solid gray'
  }
  // remover todas as classes moderate-cyan dos elementos arrayH5
  for (let element of arrayH5) {
    element.classList.remove('moderate-cyan')
  }
  arrayH5[0].classList.toggle('moderate-cyan')
  arraySelectItem[0].classList.toggle('show')
  // arraySelectItem[0].style.transition='1s ease'
  arrayGridModalItem[0].style.border = `1.5px solid ${color}`
})

arrayRadio[1].addEventListener('click', function () {
  let color = `#3cb4ac`
  for (let element of arraySelectItem) {
    element.classList.remove('show')
  }

  for (let element of arrayGridModalItem) {
    element.style.border = '1px solid gray'
  }

  for (let element of arrayH5) {
    element.classList.remove('moderate-cyan')
  }

  arrayH5[1].classList.toggle('moderate-cyan')

  arraySelectItem[1].classList.toggle('show')
  arrayGridModalItem[1].style.border = `1.5px solid ${color}`
})

arrayRadio[2].addEventListener('click', function () {
  let color = `#3cb4ac`
  for (let element of arraySelectItem) {
    element.classList.remove('show')
  }

  for (let element of arrayGridModalItem) {
    element.style.border = '1px solid lightgray'
  }

  for (let element of arrayH5) {
    element.classList.remove('moderate-cyan')
  }

  arrayH5[2].classList.toggle('moderate-cyan')

  arraySelectItem[2].classList.toggle('show')
  arrayGridModalItem[2].style.border = `1.5px solid ${color}`
})

const ArrayInputs = document.querySelectorAll('.cash input')

//Ao clicar no botao ele abre o card validation e verifica se a d
for (let btnContinue of arrayButtons) {
  btnContinue.addEventListener('click', function () {
    if (
      ArrayInputs[0].value != '' ||
      ArrayInputs[1].value != '' ||
      ArrayInputs[2].value != ''
    ) {
      validation.classList.toggle('show')
    } else if (ArrayInputs[0].value === '') {
      alert('Fill in the field before completing the operation.')
    } else if (ArrayInputs[1].value === '') {
      alert('Fill in the field before completing the operation.')
    } else if (ArrayInputs[2].value === '') {
      alert('Fill in the field before completing the operation.')
    }
  })
}

check.addEventListener('click', () => {
  validation.classList.remove('show')
  modal.classList.remove('show')
})


// CLICAR NA LOGO BOOK-MARK ALTERAR A COR DO BGCOLOR BOOK MARK

const btn = document.querySelector('.btn-and-logo img')

btn.addEventListener('click', function(){
  const boxBookMark = document.querySelector('.container-book-mark')
  const p = document.querySelector('.container-book-mark p')
  if(window.innerWidth >= 900){
    if(boxBookMark.classList.value ===  "container-book-mark bgAndColor"){
      boxBookMark.style.transition = '.2s ease'
      boxBookMark.classList.toggle('bgAndColor')
      boxBookMark.style.backgroundColor= `rgb(184, 184, 184)`;
      p.style.color=`#1c1c1c`
      

    }else{
      boxBookMark.classList.toggle('bgAndColor')
      boxBookMark.style.backgroundColor= `#3cb4ac`;
      p.style.color=`#fff`
    }

  }else{
    boxBookMark.style.backgroundColor=`#fff`
  }
  
})



