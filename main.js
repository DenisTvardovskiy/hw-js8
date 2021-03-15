// Task1 

const TASK1REF = document.querySelector(".task1")
const SPANREF = document.querySelector(".task1 > span");
SPANREF.textContent = "Очікую вводу даних"
const INPUTTASK1REF = document.createElement("input")
INPUTTASK1REF.maxLength = "30"
INPUTTASK1REF.classList.add("input-task1")

const edit = document.addEventListener("keydown", function(event){
    if(event.altKey && event.code ==="KeyA"){
        event.preventDefault()
        handlerEdit()
    }
})
const save = document.addEventListener("keydown", function(event){
    if(event.shiftKey && event.code ==="KeyS"){
        event.preventDefault()
        SPANREF.textContent=event.target.value
        handlerSave()
    }
})

function handlerEdit(){
    INPUTTASK1REF.placeholder = SPANREF.textContent
    SPANREF.textContent =""
    TASK1REF.appendChild(INPUTTASK1REF)
}

function handlerSave(){
    TASK1REF.removeChild(INPUTTASK1REF)
}


// Task2


const task2SpanRef = document.querySelector(".task2 > span")
const windowSize = window.innerWidth
task2SpanRef.textContent= windowSize > 600 ? task2SpanRef.textContent = "Десктоп версія": task2SpanRef.textContent = "Мобільна версія";

window.addEventListener("resize", function(event){
    
    const windowSize = window.innerWidth
    windowSize > 600 ? task2SpanRef.textContent = "Десктоп версія": task2SpanRef.textContent = "Мобільна версія" 
})



// Task3 

const newSpan = document.querySelector(".task3 >p> span")
const inputRef = document.querySelector(".task3 > input[type='text']")

inputRef.addEventListener("input", _=(event)=>{newSpan.textContent = event.target.value})

// Task4

const taskRef = document.querySelector(".task4")

// Create modal window
const modal = document.createElement("div")
modal.style.display="none"
modal.classList.add("modal");


const mon = document.createElement("pre")
mon.id = "Dount"
modal.appendChild(mon)
const title = document.createElement("p")
title.textContent="(Alt+C to close)"
modal.appendChild(title)
document.body.appendChild(modal)

document.addEventListener("keydown", _=(event)=>{
    if(event.altKey && event.code==="KeyO"){
        modal.style.display="flex"
    }
    if(event.altKey && event.code==="KeyC"){
        modal.style.display="none"
    }
})


//Task 5
const modalPef = document.querySelector(".js-modal")
const closeButton = document.querySelector(".js-modal > button")
const openButton = document.querySelector(".task5 > button")

const modalInput = document.querySelector(".js-modal > input[type='text']")
const modalSpan = document.querySelector(".js-modal > p > span")
modalSpan.textContent=''
modalInput.addEventListener("input", _=(event)=>{
    
    modalSpan.textContent = event.target.value})


openButton.addEventListener("click", _=>modalPef.style.display = "flex")
closeButton.addEventListener("click", _=>modalPef.style.display = "none")