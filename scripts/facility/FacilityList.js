import { buttonRender } from "./DisplayFacilitiesButton.js"
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js"
import { getFacilities , useFacilities } from "./FacilityProvider.js"
import { getCriminalFacilities , useCriminalFacilities } from "./CriminalFacilityProvider.js"
import { Facility } from "./Facility.js"

const contentTarget = document.querySelector(".caseDataContainer")
const eventHub = document.querySelector(".container")

buttonRender()

let facilities = []
let crimFac = []
let criminals = []
// console.log(facilities)

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
                // console.log("facilities" , facilities)
                // Pass all three collections of data to render()
                render()
            }
        )
}

const render = () => {
    contentTarget.innerHTML = 
    facilities.map(
        facility => {
            const facilityRelationship = crimFac.filter(cf => cf.facilityId === facility.id)
            // debugger
            // console.log("facilityRelations" , facilityRelationship)
            const criminalsInFacility = facilityRelationship.map(fr => {
                const matchingCriminals= criminals.find(f => fr.criminalId === f.id )
                // debugger
                // console.log("criminals in Facility" , matchingCriminals)
                return matchingCriminals
            })
            // console.log(criminalsInFacility)
           
            return Facility(facility, criminalsInFacility,)
        
    }).join("")
}


eventHub.addEventListener("facilityClicked" , () => FacilityList())

