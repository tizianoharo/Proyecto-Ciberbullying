const questions = [
  {
    question: '¿Qué es el ciberbullying?',
    choices: [
      'Un ataque físico de una persona a otra.',
      'Un acto agresivo que tiene como objetivo acosar, agredir y dañar a otro mediante medios telemáticos.',
      'Una simple broma',
      'Un videojuego'
    ],
    answer: 'Un acto agresivo que tiene como objetivo acosar, agredir y dañar a otro mediante medios telemáticos.'
  },
  {
    question: '¿Cuál de estas consecuencias puede sufrir la victima de ciberbullying?',
    choices: [
      'Aislamiento social y problemas psicológicos.',
      'Autolesiones e intentos de suicidio.',
      'Desconfianza y conflictos en el entorno.',
      'Todas son correctas.'
    ],
    answer: 'Todas son correctas.'
  },
  {
    question: '¿Cuál de estas es una medida de protección?',
    choices: [
      'Aceptar a cualquiera como amigo.',
      'Dar información personal.',
      'Proteger tu privacidad.',
      'No hablar con nadie sobre lo que te está ocurriendo.'
    ],
    answer: 'Proteger tu privacidad.'
  },
  {
    question: '¿En cuál de estos tipos de ciberbullying el acosador mantiene su anonimato?',
    choices: [
      'Camuflado.',
      'Stalking.',
      'Sextorsión.',
      'Ninguna de las anteriores.'
    ],
    answer: 'Camuflado.'
  },
  {
    question: '¿Cuál de las siguientes acciones es un rol esencial de los amigos en la prevención del ciberbullying?',
    choices: [
      'No participar ni promover el ciberbullying.',
      'Informar a un adulto si saben que alguien está sufriendo ciberbullying.',
      'Apoyar a la víctima y hacerle saber que están ahí para ayudar.',
      'Todas son correctas.'
    ],
    answer: 'Todas son correctas.'
  },
  {
    question: '¿Cuál de estos, es el caso emblemático relacionado con el ciberbullying?',
    choices: [
      'Star Trek kid.',
      'Fortnite kid.',
      'Star Wars kid.',
      'Batman kid.'
    ],
    answer: 'Star Wars kid.'
  },
  {
    question: '¿En qué año se utilizó por primera vez el término ciberbullying?',
    choices: [
      '2000.',
      '2004.',
      '2003.',
      'Ninguna es correcta.'
    ],
    answer: '2004.'
  },
  {
    question: 'El ciberbullying en el impacto académico ¿Qué puede causar?',
    choices: [
      'Problemas en el desarrollo personal y social.',
      'Menor participación en actividades escolares y sociales.',
      'Aumento de la inasistencia escolar.',
      'Todas son correctas.'
    ],
    answer: 'Todas son correctas.'
  },
  {
    question: 'En las estrategias más comunes del ciberbullying ¿en cuál se hacen pasar por alguien?',
    choices: [
      'Difamación.',
      'Mensajes amenazantes.',
      'Suplantación.',
      'Comentarios crueles.'
    ],
    answer: 'Suplantación.'
  },
  {
    question: '¿Cómo puedo proteger mi información personal para que no caiga en manos equivocadas?',
    choices: [
      'No compartir tu información personal en internet.',
      'Regular el contenido compartido en redes.',
      'Mantener tu privacidad en las redes sociales.',
      'Todas son correctas.'
    ],
    answer: 'Todas son correctas.'
  }
]

let indCurrentQuestion = 0
let score = 0
const containerQuiz = document.querySelector('#container-quiz')

const showQuestion = ( index ) => {
  containerQuiz.innerHTML = ""
  
  if (index >= questions.length) {
    endGame()
    return
  }
  
  const sctnQuestion = document.createElement('section')
  sctnQuestion.id = 'question'
  
  const headerQuiz = document.createElement('header')
  headerQuiz.className = 'headerQuiz'
  
  const questionText = document.createElement('h1')
  questionText.innerText = questions[index].question
  
  headerQuiz.appendChild(questionText)
  sctnQuestion.appendChild(headerQuiz)
  
  const choices = document.createElement('div')
  choices.id = 'choices'
  
  questions[index].choices.forEach( choice => {
    const button = document.createElement('button')
    button.className = 'btnQuiz'
    button.textContent = choice
    
    button.addEventListener('click', () => checkAnswer( choice, questions[index].answer ))
    
    choices.appendChild(button)
  })
  
  sctnQuestion.appendChild(choices)
  
  const footerQuiz = document.createElement('footer')
  footerQuiz.className = 'footerQuiz'
  
  const footerText = document.createElement('h2')
  footerText.textContent = `Pregunta Nro. ${index + 1} de ${questions.length}`
  
  footerQuiz.appendChild(footerText)
  sctnQuestion.appendChild(footerQuiz)
  
  containerQuiz.appendChild(sctnQuestion)
}

const checkAnswer = ( selectedAnswer, correctAnswer ) => {
  const verification = document.createElement('div')
  verification.className = 'verification'
  
  if (selectedAnswer === correctAnswer) {
    verification.classList.add('msgCorrect')
    verification.textContent = 'Respuesta CORRECTA!!'
    score++
  } else {
    verification.classList.add('msgIncorrect')
    verification.innerHTML = `
    <span>Respuesta INCORRECTA!!</span> <br>
    La opción correcta es: <span>${correctAnswer}</span>`
  }

  containerQuiz.insertBefore(verification, containerQuiz.firstChild)
 
  const buttons = document.querySelectorAll('.btnQuiz')
  buttons.forEach( btn => {
    btn.disabled = true
  })

  setTimeout(() => {
    indCurrentQuestion++
    showQuestion(indCurrentQuestion)
  }, 3000)
}

const endGame = () => {
  const div = document.createElement('div')
  div.className = 'divQuiz'
  const h1 = document.createElement('h1')
  const p = document.createElement('p')
  h1.innerText = 'Fin del juego'
  p.innerHTML = `
  Felicitaciones. Haz obtenido un puntaje de: <br> <br> 
  <span class="puntaje">${score}</span> / <span class="nroDePreguntas">${questions.length}</span>`

  div.appendChild(h1)
  div.appendChild(p)
  containerQuiz.appendChild(div)
}

showQuestion(indCurrentQuestion)
