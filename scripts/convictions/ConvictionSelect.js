import { getConvictions, useConvictions } from "./ConvictionProvider.js"

const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", event => {
console.log(event)
    // Action if 'crimeselect' element was changed
    if (event.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeSelected", {
            detail: {
                crimeThatWasChosen: parseInt(event.target.value)
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})



export const ConvictionSelect = () => {

    getConvictions()
        .then(() => {
            const convictions = useConvictions()
            render(convictions)

        })
}

const render = convictionsCollection => {

    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${convictionsCollection.map(
                convictionObj => {

            return `<option value="${convictionObj.id}">${convictionObj.name}</option>`
        }

    )
        }
        </select>
        `
}


