import { saveNote } from "./NoteProvider.js"
const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
    
        <input type="text" id="note--author"  placeholder="Officer Name">
        <input type="date" id="note--dateOfInterview">
        <input type="text" id="note--suspect" placeholder="Criminal Name">
        <textarea id="note--entry"></textarea>
        <button id="saveNote">Save Note</button>
        
    `


}

export const NoteForm = () => {
    render()
}


eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        console.log(clickEvent.target.id)
        const dateOfInterview = document.querySelector("#note--dateOfInterview").value
        console.log(document.querySelector("#note--dateOfInterview").value)
        const author = document.querySelector("#note--author").value
        const suspect = document.querySelector("#note--suspect").value
        const note = document.querySelector("#note--entry").value
        const timeStamp = Date.now()

        const newNote = {
            dateOfInterview,
            author,
            suspect,
            note,
        
            
        }
        // Change API state and application state
        saveNote(newNote)
        console.log(saveNote())
    }
})





