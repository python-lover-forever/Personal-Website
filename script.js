
// particle background

let c=document.getElementById("bgCanvas")
let ctx=c.getContext("2d")

c.width=window.innerWidth
c.height=window.innerHeight

let dots=[]

for(let i=0;i<120;i++){
dots.push({
x:Math.random()*c.width,
y:Math.random()*c.height,
vx:(Math.random()-.5)*.5,
vy:(Math.random()-.5)*.5
})
}

function loopx(){

ctx.clearRect(0,0,c.width,c.height)

dots.forEach(d=>{

ctx.fillStyle="#0ff"
ctx.fillRect(d.x,d.y,2,2)

d.x+=d.vx
d.y+=d.vy

})

requestAnimationFrame(loopx)

}

loopx()



// skills animation

let bars=document.querySelectorAll(".bar")

function showBars(){

bars.forEach(b=>{

let v=b.dataset.s
b.style.width=v+"%"

})

}

setTimeout(showBars,800)



// mini game

let inp=document.getElementById("gameInput")
let msg=document.getElementById("gameMsg")

inp.addEventListener("keyup",()=>{

if(inp.value==="build"){
msg.innerText="Nice! You build things fast."
}

})



// robotics demo canvas

let rc=document.getElementById("robotCanvas")
let rctx=rc.getContext("2d")

rc.width=500
rc.height=250

let rx=0

function robo(){

rctx.clearRect(0,0,500,250)

rctx.fillStyle="#0ff"

rctx.fillRect(rx,120,40,20)

rx+=2

if(rx>500)rx=-40

requestAnimationFrame(robo)

}

robo()



// easter egg

let seq=[]
let kon=[38,38,40,40,37,39,37,39,66,65]

window.addEventListener("keydown",(e)=>{

seq.push(e.keyCode)

if(seq.toString().indexOf(kon.toString())>=0){
alert("secret unlocked : keep building cool things")
seq=[]
}

})
