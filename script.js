
// scroll reveal animation

const sections = document.querySelectorAll("section")

function reveal(){

let screenPos = window.innerHeight * 0.85

sections.forEach(sec => {

let top = sec.getBoundingClientRect().top

if(top < screenPos){
sec.style.opacity = "1"
sec.style.transform = "translateY(0px)"
}

})

}

sections.forEach(s=>{
s.style.opacity="0"
s.style.transform="translateY(40px)"
s.style.transition="all 0.7s"
})

window.addEventListener("scroll",reveal)

reveal()



// project filtering

const buttons = document.querySelectorAll(".project-filter button")
const cards = document.querySelectorAll(".project-card")

buttons.forEach(btn=>{

btn.addEventListener("click",()=>{

let type = btn.dataset.type

cards.forEach(card=>{

if(type==="all"){
card.style.display="block"
return
}

if(card.dataset.type===type){
card.style.display="block"
}else{
card.style.display="none"
}

})

})

})
