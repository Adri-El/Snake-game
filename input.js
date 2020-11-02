let inputDirection = {x: 0, y: 0}
let lastInputDirection = {x: 0, y: 0}

const arrowUp = document.getElementById("arrowUp")
const arrowDown = document.getElementById("arrowDown")
const arrowLeft = document.getElementById("arrowLeft")
const arrowRight = document.getElementById("arrowRight")

window.addEventListener("click", (e)=>{
    switch(e.target){
        case arrowUp:
            if(lastInputDirection.y !== 0) break
            inputDirection = {x: 0, y: -1}
            break
        case arrowDown:
            if(lastInputDirection.y !== 0) break
            inputDirection = {x: 0, y: 1}
            break
        case arrowLeft:
            if(lastInputDirection.x !== 0) break
            inputDirection = {x: -1, y: 0}
            break
        case arrowRight:
            if(lastInputDirection.x !== 0) break
            inputDirection = {x: 1, y: 0}
            break    
    }


})

window.addEventListener('keydown', e =>{
    switch(e.key){
        case 'ArrowUp':
            if(lastInputDirection.y !== 0) break
            inputDirection = {x: 0, y: -1}
            break
        case 'ArrowDown':
            if(lastInputDirection.y !== 0) break
            inputDirection = {x: 0, y: 1}
            break
        case 'ArrowLeft':
            if(lastInputDirection.x !== 0) break
            inputDirection = {x: -1, y: 0}
            break
        case 'ArrowRight':
            if(lastInputDirection.x !== 0) break
            inputDirection = {x: 1, y: 0}
            break
    }
})

export function getInputDirection(){
    lastInputDirection = inputDirection  
    return inputDirection
}