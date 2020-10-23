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
    // console.log("CRIMEVENT" , event)
    // console.log("crimeSelected event happened", event.detail.crimeThatWasChosen)
  
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== 0) {

        const criminalArray = useCriminals()
        // console.log("CRIMARRAY" , criminalArray)

        const convictionsArray = useConvictions()

        const convictionThatWasChosen = convictionsArray.find(convictionObj => {
        
            //     console.log("CONARRAY" , convictionsArray)

        // console.log("CONVIOBJ" , convictionObj)
        //     // console.log("CONID" , convictionObj.id === event.detail.crimeThatWasChosen)
        //     // return true or false based on what object selected
            return convictionObj.id === event.detail.crimeThatWasChosen
        })
        
       
        const filteredCriminalsArray = criminalArray.filter(criminalObj => {
            // console.log("CONCHOSEN" , convictionThatWasChosen)
            return criminalObj.conviction === convictionThatWasChosen.name
            
        })
        // console.log("FILTCRIME" , filteredCriminalsArray)
        render(filteredCriminalsArray)
        // console.log(filteredCriminalsArray)
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

eventHub.addEventListener("officerSelected" , officerSelectedEventObj => {
    const selectedOfficerName = officerSelectedEventObj.detail.officerName
    console.log("CriminalList: officerSelected custom event has been heard on the event hub, selected officer name: ", selectedOfficerName)

    const criminalsArray = useCriminals()
    console.log("Criminal Array" , criminalsArray)
    const filteredArrayCriminals = criminalsArray.filter(
        (criminalObj) => {
          return criminalObj.arrestingOfficer === selectedOfficerName
  
        }
      )
    console.log("CriminalList: Array of criminals filtered for only the criminals that were arrested by selected officer", filteredArrayCriminals)
    render(filteredArrayCriminals)
    console.log("CriminalList: Filtered list of criminals rendered to DOM")
        })
