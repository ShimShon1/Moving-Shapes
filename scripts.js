let container = document.querySelector(".container")
let firstShape = document.querySelector(".shape")
let button = document.querySelector("button")



//function for ranges
let randomRange = (myMin, myMax) => {return Math.floor(Math.random() * (myMax - myMin + 1) ) + myMin;}

button.addEventListener("click", displayShape)


function displayShape(){
    let shapeDisplayed = document.createElement("div")
    shapeDisplayed.classList.add("shape")

    shapeDisplayed.style.top = ` ${randomRange(0,50)}vh`
    shapeDisplayed.style.left = `${randomRange(0,50)}vw`
    shapeDisplayed.style.width = `${randomRange(7,12)}vw`
    shapeDisplayed.style.height = `${randomRange(7,12)}vh`
    shapeDisplayed.style.borderRadius = `${randomRange(0,70)}%`
    shapeDisplayed.style.backgroundColor= `rgb(${randomRange(0,255)}%,${randomRange(0,255)}%,${randomRange(0,255)}%)`
    container.append(shapeDisplayed)
}















