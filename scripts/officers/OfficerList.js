import { getOfficers , useOfficers } from "./OfficerProvider.js"
import { Officer } from "./Officer.js"

export const OfficerList = () => {
    const officerContainer = document.querySelector(".officersContainer")
    let officerHTMLRepresentation = ""
    
    getOfficers()
     .then(() => {
        const officerArray = useOfficers()

        for (const officer of officerArray) {
            
            officerHTMLRepresentation += Officer(officer)

            officerContainer.innerHTML = `
                <article class="glassdaleOfficers">
                    ${officerHTMLRepresentation}
                </article>`

        }


    }
     )
}