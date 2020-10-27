import { getNotes , useNotes } from "./NoteProvider.js"
import { Note } from "./Note.js"
import { getCriminals } from "../criminals/CriminalProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteAside")

eventHub.addEventListener("noteStateChanged", () => NotesList())

const notesArray = useNotes()
// console.log(getNotes())

export const NotesList = () => {

    
    console.log(notesArray)
    getNotes()
    .then(() => {
        const notesArray = useNotes()
        render(notesArray)


    })
}

const render = (notes) => {


    contentTarget.innerHTML = `
   
    ${notes.map(
        notesObj => {
      return Note(notesObj)
    }
    )
}` 
}