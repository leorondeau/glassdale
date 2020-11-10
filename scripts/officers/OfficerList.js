// First import the functions to be called within this module.


import { getOfficers, useOfficers } from "./OfficerProvider.js"
import { Officer } from "./Officer.js"
import { useCriminals } from "../criminals/CriminalProvider.js"

const eventHub = document.querySelector(".container")

// Export the function to main.js because that is the only page linked to the index.html.
export const OfficerList = () => {
    // Assign the doc.selec, which is where the information will be rendered on the index.html page, to a variable.
    const officerContainer = document.querySelector(".officersContainer")
//    Very important step, call the getOfficers function because that's how the module is getting the data to be rendered i.e. fetching the API.
    getOfficers() 
    // This is a little fuzzy...but the .then is...
        .then(() => {
            const officerArray = useOfficers()
            // This is where the HTML is mapped over and converted into a string so the browser can read it. Previously we had empty HTML "" vars to push each obj into but with the
            // the map method that is streamlined.
            officerContainer.innerHTML = `
            <h3 class="title">Glassdale Officers</h3> 
            <article class="glassdaleOfficers">
                    ${officerArray.map(officer => Officer(officer)).join("")}
                </article>`

        }
        )
}

