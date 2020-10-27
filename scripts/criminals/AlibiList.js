import { useCriminals, getCriminals } from "./CriminalProvider.js"

const eventHub = document.querySelector(".container")

    
eventHub.addEventListener("associateAlibi" , event => {
    
    // console.log("Heard on AlibiList" , event.detail.associateAlibiSelected)
    
    const criminalArray = useCriminals()
    // console.log(criminalArray)

    const criminalOfAssociate = criminalArray.find(criminalObj => {
        
        return criminalObj.id === event.detail.associateAlibiSelected
    })
    // console.log("CriminalAlibiChosed" , criminalOfAssociate.known_associates)    
    render(criminalOfAssociate)
})


const render = (criminalObj) => {
    const contentTarget = document.querySelector(`#criminal-${criminalObj.id}`)
   
    contentTarget.innerHTML += `
    <div class="alibi_list">
        ${criminalObj.known_associates.map(
            criminalAlibi => {
                return `<p>${criminalAlibi.name}</p>
                        <p>${criminalAlibi.alibi}</p>`
               
            }
        ).join("")}
    </div>`
}
