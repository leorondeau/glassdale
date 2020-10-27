

const contentTarget = document.querySelector(".button__witnesses")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {

    if (event.target.id === "witnessSelect") {
        
        const customEvent = new CustomEvent("witnessClicked")
    
        eventHub.dispatchEvent(customEvent)
    }
})




export const buttonRender = () => {

    contentTarget.innerHTML = `
    <button id="witnessSelect">Witness Statements</button>`
}

buttonRender()