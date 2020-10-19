import { Criminal } from "./Criminal.js"
import { useCriminals, getCriminals } from "./CriminalProvider.js"



const criminalContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {

       getCriminals()
        .then(() => {

            const criminalArray = useCriminals()
            
            
            let criminalHTMLRepresentation = ""
            
            for (const criminal of criminalArray) {
                
                criminalHTMLRepresentation += Criminal(criminal)
          
                
                criminalContainer.innerHTML = `
                    <article class="glassdaleCriminals">
                        ${criminalHTMLRepresentation}
                    </article>`
            
            }
            
        }


        )

}

