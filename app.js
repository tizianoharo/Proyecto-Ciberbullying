const secciones = [
  {
    text: 'Inicio',
    link: ''
  },
  {
    text: 'Nosotros',
    link: 'nosotros-inf'
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
  
  for(let seccion of secciones) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.innerText = seccion.text
    a.href = `#${seccion.link}`
    
    li.appendChild(a)
    ul.appendChild(li)
  }
  
  navBar.appendChild(ul)
}

addSections()