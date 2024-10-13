const preguntas = [
  {
    pregunta: '¿Qué es el ciberbullying?',
    opciones: [
      'Un ataque físico de una persona a otra.',
      'Un acto agresivo que tiene como objetivo acosar, agredir y dañar a otro mediante medios telemáticos.',
      'Una simple broma',
      'Un videojuego'
    ],
    respuesta: 'Un acto agresivo que tiene como objetivo acosar, agredir y dañar a otro mediante medios telemáticos.'
  },
  {
    pregunta: '¿Cuál de estas consecuencias puede sufrir la victima de ciberbullying?',
    opciones: [
      'Aislamiento social y problemas psicológicos.',
      'Autolesiones e intentos de suicidio.',
      'Desconfianza y conflictos en el entorno.',
      'Todas son correctas.'
    ],
    respuesta: 'Todas son correctas.'
  },
  {
    pregunta: '¿Cuál de estas es una medida de protección?',
    opciones: [
      'Aceptar a cualquiera como amigo.',
      'Dar información personal.',
      'Proteger tu privacidad.',
      'No hablar con nadie sobre lo que te está ocurriendo.'
    ],
    respuesta: 'Proteger tu privacidad.'
  },
  {
    pregunta: '¿En cuál de estos tipos de ciberbullying el acosador mantiene su anonimato?',
    opciones: [
      'Camuflado.',
      'Stalking.',
      'Sextorsión.',
      'Ninguna de las anteriores.'
    ],
    respuesta: 'Camuflado.'
  },
  {
    pregunta: '¿Cuál de las siguientes acciones es un rol esencial de los amigos en la prevención del ciberbullying?',
    opciones: [
      'No participar ni promover el ciberbullying.',
      'Informar a un adulto si saben que alguien está sufriendo ciberbullying.',
      'Apoyar a la víctima y hacerle saber que están ahí para ayudar.',
      'Todas son correctas.'
    ],
    respuesta: 'Todas son correctas.'
  },
  {
    pregunta: '¿Cuál de estos, es el caso emblemático relacionado con el ciberbullying?',
    opciones: [
      'Star Trek kid.',
      'Fortnite kid.',
      'Star Wars kid.',
      'Batman kid.'
    ],
    respuesta: 'Star Wars kid.'
  },
  {
    pregunta: '¿En qué año se utilizó por primera vez el término ciberbullying?',
    opciones: [
      '2000.',
      '2004.',
      '2003.',
      'Ninguna es correcta.'
    ],
    respuesta: '2004.'
  },
  {
    pregunta: 'El ciberbullying en el impacto académico ¿Qué puede causar?',
    opciones: [
      'Problemas en el desarrollo personal y social.',
      'Menor participación en actividades escolares y sociales.',
      'Aumento de la inasistencia escolar.',
      'Todas son correctas.'
    ],
    respuesta: 'Todas son correctas.'
  },
  {
    pregunta: 'En las estrategias más comunes del ciberbullying ¿en cuál se hacen pasar por alguien?',
    opciones: [
      'Difamación.',
      'Mensajes amenazantes.',
      'Suplantación.',
      'Comentarios crueles.'
    ],
    respuesta: 'Suplantación.'
  },
  {
    pregunta: '¿Cómo puedo proteger mi información personal para que no caiga en manos equivocadas?',
    opciones: [
      'No compartir tu información personal en internet.',
      'Regular el contenido compartido en redes.',
      'Mantener tu privacidad en las redes sociales.',
      'Todas son correctas.'
    ],
    respuesta: 'Todas son correctas.'
  },
];

const juego = document.querySelector('#juego-container')
const puntajeContainer = document.querySelector('#puntaje-container')
const btnEnviar = document.getElementById('enviar-btn')

let puntaje = 0

const crearSeccion = () => {

  preguntas.forEach((pregunta, ind) => {
    const juegoSeccion = document.createElement('section')
    juegoSeccion.className = 'question'
    
    const header = document.createElement('header')
    header.className = 'headerQuestion'

    const tituloSeccion = document.createElement('h2')
    const parrafoElem = document.createElement('p')

    tituloSeccion.textContent = `Pregunta Nro. ${ind + 1}`
    parrafoElem.textContent = pregunta.pregunta

    header.appendChild(tituloSeccion)
    header.appendChild(parrafoElem)
    
    juegoSeccion.appendChild(header)
    
    const opcionesDiv = document.createElement('div')
    opcionesDiv.className = 'opciones'
    
    pregunta.opciones.forEach((opcion) => {
      const labelElem = document.createElement('label')
      const inputElem = document.createElement('input')
      inputElem.type = 'radio'
      inputElem.name = `opcion${ind}`
      inputElem.value = opcion

      const txtNodeLabel = document.createTextNode(opcion)
      labelElem.appendChild(inputElem)
      labelElem.appendChild(txtNodeLabel)
      
      opcionesDiv.appendChild(labelElem)
    })
    
    juegoSeccion.appendChild(opcionesDiv)
    
    const footer = document.createElement('footer')
    footer.className = 'footerQuestion'
    
    juegoSeccion.appendChild(footer)
    juego.appendChild(juegoSeccion)    
  })

}

function mostrarPuntaje() {
  puntaje = 0
  preguntas.forEach( (pregunta, ind) => {
    const selectedOption = document.querySelector(`input[name="opcion${ind}"]:checked`)
    if (selectedOption && selectedOption.value === pregunta.respuesta) {
      puntaje++
    }
  })

  puntajeContainer.innerHTML = `Has acertado ${puntaje} de ${preguntas.length} preguntas.`
}

btnEnviar.addEventListener('click', mostrarPuntaje)

crearSeccion()
