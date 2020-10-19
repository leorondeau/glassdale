import { Criminal } from "./Criminal.js"
import { useCriminals, getCriminals } from "./CriminalProvider.js"



const criminalContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {


    getCriminals()
        .then(() => {

            const criminalArray = useCriminals()
            console.log("USECRIM", useCriminals())
            
            let criminalHTMLRepresentation = ""
            
            for (const criminal of criminalArray) {

                criminalHTMLRepresentation += Criminal(criminal)
                // console.log("CRIMHTML", criminalHTMLRepresentation)
                criminalContainer.innerHTML += `
                    <article class="Glassdale Criminals">
                        ${criminalHTMLRepresentation}
                    </article>`
            
            }
            
        }


        )

}

