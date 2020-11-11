import { useConvictions } from "../convictions/ConvictionProvider.js"
import { useOfficers } from "../officers/OfficerProvider.js"
import { Criminal } from "./Criminal.js"
import { useCriminals, getCriminals } from "./CriminalProvider.js"
import { getFacilities , useFacilities } from "../facility/FacilityProvider.js"
import { getCriminalFacilities , useCriminalFacilities } from "../facility/CriminalFacilityProvider.js"






const eventHub = document.querySelector(".container")
const criminalContainer = document.querySelector(".caseDataContainer")

let facilities = []
let crimFac = []
let criminals = []

export const CriminalList = () => {
    // Kick off the fetching of both collections of data
    getFacilities()
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                facilities = useFacilities()
                crimFac = useCriminalFacilities()
                criminals = useCriminals()

                // Pass all three collections of data to render()
                render(criminals, facilities, crimFac)
            }
        )
}

const render = (criminals, facilities, crimFac) => {
    let criminalsHTMLRepresentations = ""
    // step 1 Iterate all criminals
    // step 2 Filter all relationships to get only the ones for this criminal
    // step 3 Convert the relationships to facilities with map()
    
      criminalsHTMLRepresentations = criminals.map(criminal => {
          const facilityObj = eachCriminalFacility(criminal)
        //   console.log(facilityObj)
          const facility = convertFacilityIdToFacility(facilityObj)
        //   console.log("facility" , facility)
          return Criminal(criminal , facility)
      })

  
      criminalContainer.innerHTML += `
            <h3 class=title>Glassdale Criminals</h3>
            <section class="criminalsList">
              ${criminalsHTMLRepresentations}
            </section>
          `
    }


  
const eachCriminalFacility = (criminal) => {
    const relatedFacilities = crimFac.filter(cf => cf.criminalId === criminal.id)
    return relatedFacilities
}

const convertFacilityIdToFacility = (relationships) => {
    const facilityObj = relationships.map(rf => {
        return facilities.find(facility => facility.id === rf.facilityId)
    })
    return facilityObj
}

// export const CriminalList = () => {

//     getCriminals()
//         .then(() => {

//             const criminalArray = useCriminals()

//             render(criminalArray)
//         })
    
//     }



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






eventHub.addEventListener("officerChosen" , event => {
    if (event.detail.officerThatWasChosen !== "0") {
        // console.log("CriminalList: officerSelected custom event has been heard on the event hub, selected officer name: ", selectedOfficerName)

        const officersArray = useOfficers()
    
        const criminalsArray = useCriminals()
       
       const selectedOfficer = officersArray.find(officerObj => {
           return officerObj.id === event.detail.officerThatWasChosen
       })

       const filteredArrestArray = criminalsArray.filter(crimeObj => {
        // console.log("CRIMOFFARR" , crimeObj)
        // console.log("SelectedOfficer" ,selectedOfficer.id)
        return crimeObj.arrestingOfficer === selectedOfficer.name
           
       })
      //     console.log("CriminalList: Array of criminals filtered for only the criminals that were arrested by selected officer", filteredArrayCriminals)
       render(filteredArrestArray)
       //     console.log("CriminalList: Filtered list of criminals rendered to DOM")
    }
})

