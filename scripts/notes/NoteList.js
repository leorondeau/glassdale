import { getNotes , useNotes } from "./NoteProvider.js"
import { Note } from "./Note.js"
import { getCriminals , useCriminals } from "../criminals/CriminalProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteAside")

eventHub.addEventListener("noteStateChanged", () => NotesList())

const notesArray = useNotes()
// console.log(getNotes())

export const NotesList = () => {

    
    
    getNotes()
    .then(() => {
        const notesArray = useNotes()
        render(notesArray)
        // console.log(notesArray)

    })
}

const render = (notesArray , criminalArray) => {


    contentTarget.innerHTML = notesArray.map(note => {
        const relatedCriminal = criminalArray.find(criminal => criminal.id === note.criminalId)
        return `
            <section class="note">
                <h2>Note about ${relatedCriminal.name}</h2>
                ${note.noteText}
             </section>   
             `
    })
   
    
    }