import { buttonRender } from "./DisplayFacilitiesButton.js"

const contentTarget = document.querySelector(".caseDataContainer")
const eventHub = document.querySelector(".container")

buttonRender()

let facilities = []
let crimFac = []
let criminals = []

export const FacilityList = () => {
    // Kick off the fetching of both collections of data
    getCriminals()
    .then(getFacilities)
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                facilities = useFacilities()
                crimFac = useCriminalFacilities()
                criminals = useCriminals()

                // Pass all three collections of data to render()
                render()
            }
        )
}

// export const render = () => {
//     contentTarget.innerHTML = 
    
// }


