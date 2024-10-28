const sections = [
  {
    text: 'Inicio',
    link: ''
  },
  {
    text: '1. Introducción',
    link: 'introduccion-Section'
  },
  {
    text: '2. Tipos',
    link: 'tipos-Section'
  },
  {
    text: '3. Consecuencias',
    link: 'consecuencias-Section'
  },
  {
    text: '4. Estrategias de los perpetradores',
    link: 'estratPerp-Section'
  },
  {
    text: '5. Medidas',
    link: 'medidasProtec-Section'
  },
  {
    text: '6. Leyes',
    link: 'leyes-Section'
  },
  {
    text: 'Nosotros',
    link: 'nosotros-inf'
  },

]


const navBar = document.getElementById('nav-bar')
const barsOpt = document.getElementById('bars-opt')

function showChoices() {
  barsOpt.addEventListener('click', () => {
    navBar.classList.toggle('active')
  })
  
}
showChoices()

function addSections() {
  const ul = document.createElement('ul')
  
  for(let section of sections) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.innerText = section.text
    a.href = `#${section.link}`
    
    li.appendChild(a)
    ul.appendChild(li)
  }
  
  navBar.appendChild(ul)
}

addSections()