import { useCriminals, getCriminals } from "./CriminalProvider.js"

const eventHub = document.querySelector(".container")
// contentTarget = document.querySelectorAll(".")

eventHub.addEventListener("associateAlibi" , event => {
    
    // console.log("Heard on AlibiList" , event.detail.associateAlibiSelected)
    
    const criminalArray = useCriminals()

    const criminalOfAssociate = criminalArray.find(criminalObj => {
        
        return criminalObj.id === event.detail.associateAlibiSelected
    })
    console.log("CriminalAlibiChosed" , criminalOfAssociate.known_associates)    

})


const render = (criminalArray) => {

}
export const AlibiList =  