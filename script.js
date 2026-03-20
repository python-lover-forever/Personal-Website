const cursorBot = document.getElementById('cursorBot')
document.addEventListener('mousemove', e => {
  cursorBot.style.left = e.clientX + 'px'
  cursorBot.style.top = e.clientY + 'px'
})
const bgCanvas = document.getElementById('bgCanvas')
const bgCtx = bgCanvas.getContext('2d')
bgCanvas.width = window.innerWidth
bgCanvas.height = window.innerHeight

let dustParticles = []
for(let i = 0; i < 180; i++){
  dustParticles.push({
    x: Math.random() * bgCanvas.width,
    y: Math.random() * bgCanvas.height,
    vx: (Math.random() - 0.5) * 1.4,
    vy: (Math.random() - 0.5) * 1.4,
    size: Math.random() * 3 + 1
  })
}
function paintDust(){
  bgCtx.clearRect(0,0,bgCanvas.width,bgCanvas.height)
  dustParticles.forEach(p => {
    bgCtx.fillStyle = '#00ffee'
    bgCtx.fillRect(p.x, p.y, p.size, p.size)
    p.x += p.vx
    p.y += p.vy
    if(p.x < 0 || p.x > bgCanvas.width) p.vx *= -1
    
    if(p.y < 0 || p.y > bgCanvas.height) p.vy *= -1
  })
  requestAnimationFrame(paintDust)
}
paintDust()
document.addEventListener('mousemove', e => {
  dustParticles.forEach(p => {
    let dx = e.clientX - p.x
    let dy = e.clientY - p.y
    p.vx += dx * 0.000028
    p.vy += dy * 0.000028
  })
})
document.querySelectorAll('.b').forEach(bar => {
  setTimeout(() => {
    bar.style.width = bar.dataset.v + '%'
  }, 800)
  
})
let lastBeep = Date.now()
function robotBeep(){
  if(Date.now() - lastBeep > 420){
    let audio = new (window.AudioContext || window.webkitAudioContext)()
    let osc = audio.createOscillator()

  
    osc.type = 'sawtooth'
    osc.frequency.value = 640
    osc.connect(audio.destination)
    osc.start()
    osc.stop(audio.currentTime + 0.03)
    lastBeep = Date.now()
  }
}
window.addEventListener('scroll', robotBeep)
const progressBar = document.getElementById('pr')
window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY
  let docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  let scrollPercent = (scrollTop / docHeight) * 100
  progressBar.style.width = scrollPercent + '%'
})
const heroTitle = document.getElementById('heroTitle')
function glitchTitle(){
  heroTitle.style.opacity = 0.6
  setTimeout(() => heroTitle.style.opacity = 1, 80)
}
setInterval(glitchTitle, 2400)
const terminalContent = document.getElementById('terminalContent')
const storyLines = [
  "My name is Ahmed Farouk but my friends who know me best call me Modie.",
  "I am a young technologist who originates from Alexandria, Egypt because technology represents more to me than just programming languages.",
  "The technology lets me design educational concepts which will transform how students learn and create and solve issues.",
  "My curiosity started my journey. I wanted to understand how things work—computers, robots, software, systems.",
  "The curiosity which I had developed led me to begin my work.",
  "I began learning programming languages like Python, C, C++, and JavaScript while creating projects and working on electronics and robotics through Arduino and Raspberry Pi.",
  "The Techno X Academy program I attended helped me build my programming and robotics abilities which I used to win first place.",
  "The Future Makers organization helped me develop as an instructor who now teaches upcoming innovators after I learned new skills and deepened my fundamental knowledge.",
  "I wanted to learn about the process which transforms concepts into practical outcomes.",
  "I studied Business and Entrepreneurship to prepare myself for launching my startup \"E3lan 3almashy\" which I will announce soon.",
  "My dedication extends beyond my own work because I aim to support others.",
  "My organization Adapt operates as a nonprofit organization which helps teenagers develop their STEM and freelancing and entrepreneurship skills through our resource and mentorship and future development programs.",
  "The project SOE – Save Our Environment motivates people to take small daily actions which protect our planet while they monitor their beneficial actions throughout the day.",
  "My current project COMMAND – The Future Vision of Education uses AI and Augmented Reality technology to create a platform that will enable children to access educational content."
]

let currentLine = 0
function typeTerminal(){
  if(currentLine >= storyLines.length) return
  let lineEl = document.createElement('div')
  lineEl.className = 'terminal-line'
  terminalContent.appendChild(lineEl)
  let text = storyLines[currentLine]
  let i = 0
  function typeChar(){
    if(i < text.length){
      lineEl.textContent += text.charAt(i)
      i++
      setTimeout(typeChar, 28 + Math.random()*22)
    } else {
      currentLine++
      setTimeout(typeTerminal, 420)
    }
  }
  typeChar()
}
setTimeout(typeTerminal, 800)

document.getElementById('playGameBtn').addEventListener('click', () => {
  window.open('maze.html', '_blank')
})
window.addEventListener('resize', () => {
  bgCanvas.width = window.innerWidth
  bgCanvas.height = window.innerHeight
})
document.addEventListener('keydown', e => {
  if(e.key.toLowerCase() === 'r'){
    dustParticles = []
    for(let i = 0; i < 180; i++){
      dustParticles.push({
        x: Math.random() * bgCanvas.width,
        y: Math.random() * bgCanvas.height,
        vx: (Math.random() - 0.5) * 1.4,
        vy: (Math.random() - 0.5) * 1.4,
        size: Math.random() * 3 + 1
      })
    }
  }
})
