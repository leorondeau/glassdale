import { saveNote } from "./NoteProvider.js"
import { getCriminals , useCriminals} from "../criminals/CriminalProvider.js"
const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

//get and use criminal array
//render(criminalArray)
//bring in data from c



export const NoteForm = () => {
    getCriminals()
        .then(() => {

            const criminalArray = useCriminals()


    return render(criminalArray)
})
}

const render = (criminalArray) => {
    contentTarget.innerHTML = `
    
        <input type="text"  id="note--author" placeholder="Officer Name">
        <select id="noteForm--criminal" class="criminalSelect">
        <option value="0">Please select a criminal</option>
        ${criminalArray.map(criminalObj => {
            return ` <option value="${ criminalObj.id }">${ criminalObj.name }</option>`
        }
        )
    }
        <input type="date" id="note--dateOfInterview">
        </select>
        <textarea id="note--entry"></textarea>
        <button id="saveNote">Save Note</button>
        
    `

}




eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        // console.log(clickEvent.target.id)
        const dateOfInterview = document.querySelector("#note--dateOfInterview").value
        // console.log(document.querySelector("#note--dateOfInterview").value)
        const author = document.querySelector("#note--author").value
        const criminalId = parseInt(document.querySelector("#noteForm--criminal").value)
      
        const note = document.querySelector("#note--entry").value
        const timeStamp = Date.now()

        const newNote = {
            dateOfInterview,
            author,
            criminalId,
            note,
            timeStamp
        
            
        }
        // Change API state and application state
        saveNote(newNote)
        // console.log(saveNote())
    }
})





