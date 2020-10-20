import { Criminal } from "./Criminal.js"
import { useCriminals, getCriminals } from "./CriminalProvider.js"



const criminalContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {

    getCriminals()
        .then(() => {

            const criminalArray = useCriminals()

            criminalContainer.innerHTML = `
                    <article class="glassdaleCriminals">
                        ${criminalArray.map(criminal => Criminal(criminal)).join("")}
                    </article>`

        }
        )
}






