import { useConvictions } from "../convictions/ConvictionProvider.js"
import { Criminal } from "./Criminal.js"
import { useCriminals, getCriminals } from "./CriminalProvider.js"




const eventHub = document.querySelector(".container")
const criminalContainer = document.querySelector(".criminalsContainer")



  
export const CriminalList = () => {

    getCriminals()
        .then(() => {

            const criminalArray = useCriminals()

            render(criminalArray)
        })
    
    }



eventHub.addEventListener("crimeSelected", event => {
    // debugger
    // console.log("crimeSelected event happened", event.detail.crimeThatWasChosen)
  
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== 0) {

        const criminalArray = useCriminals()
        // console.log("CRIMARRAY" , criminalArray)

        const convictionsArray = useConvictions()

        const convictionThatWasChosen = convictionsArray.find(convictionObj => {
            return convictionObj.id === event.detail.crimeThatWasChosen
        })
        const filteredCriminalsArray = criminalArray.filter(criminalObj => {
            return criminalObj.conviction === convictionThatWasChosen.name
        })
        render(filteredCriminalsArray)
        console.log(filteredCriminalsArray)
    }

})


const render = (criminalsArray) => {
    let criminalsHTMLRepresentations = ""
    for (const criminal of criminalsArray) {
  
      criminalsHTMLRepresentations += Criminal(criminal)
  
      criminalContainer.innerHTML = `
            <h3>Glassdale Criminals</h3>
            <section class="criminalsList">
              ${criminalsHTMLRepresentations}
            </section>
          `
    }

}







