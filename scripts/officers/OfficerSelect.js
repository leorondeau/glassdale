import { getOfficers, useOfficers } from "./OfficerProvider.js"

const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")


const render = officerCollection => {

    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${officerCollection.map(
        officerObj => {

            return `<option value="${officerObj.id}">${officerObj.name}</option>`
        }

    )
        }
        </select>
        `
}

export const OfficerSelect = () => {

    getOfficers()
        .then(() => {
            const arrestingOfficer = useOfficers()

            render(arrestingOfficer)
        })

}


eventHub.addEventListener("change", event => {
  if(event.target.id === "officerSelect") {
    // console.log("OfficerSelect: Change event happened in the officers dropdown")
    // console.log("OfficerSelect: Build custom event for officerSelected")  
    const customEvent = new CustomEvent ("officerChosen" , {

          detail: { 
              officerThatWasChosen: parseInt(event.target.value)
            
          }
          
      })
    //   console.log("OfficerSelect: Dispatch officerSelected event to event hub")
      eventHub.dispatchEvent(customEvent)
      
  }
})


  