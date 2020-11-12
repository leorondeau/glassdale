


const contentTarget = document.querySelector(".facility__button")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {

    if (event.target.id === "facilitySelect") {
        
        const customEvent = new CustomEvent("facilityClicked")
    
        eventHub.dispatchEvent(customEvent)
        console.log(customEvent)
    }
})




export const buttonRender = () => {

    contentTarget.innerHTML = `
    <button id="facilitySelect">Facilities</button>`
}

buttonRender()