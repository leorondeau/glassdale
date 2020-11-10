import { getNotes , useNotes } from "./NoteProvider.js"
import { Note } from "./Note.js"
import { getCriminals , useCriminals } from "../criminals/CriminalProvider.js"
import { deleteNote } from "./NoteProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteAside")

eventHub.addEventListener("noteStateChanged", () => NotesList())


// console.log(getNotes())

export const NotesList = () => {

        const notesArray = useNotes()
        // console.log(notesArray)
        const criminalsArray = useCriminals()
        // console.log(criminalsArray)

        const arrayOfNoteHTMLRepresentations = notesArray.map(note => {
            const criminal = criminalsArray.find(criminalObj => criminalObj.id === note.criminalId )
            // console.log("criminal" , criminal)
            const html = Note(note , criminal)
            return html
        }).join("")


        render(arrayOfNoteHTMLRepresentations)
        // console.log(notesArray)

    
}

const render = (notes) => {


    contentTarget.innerHTML = `
    <h3 class="title">Notes</h3>    
         <section>
            <p>${notes}</p>
        </section>`
    
 }

 eventHub.addEventListener("click" , event => {
    if(event.target.id.startsWith("deleteNote--")) {
        const [prefix , id] = event.target.id.split("--")
        console.log("buttonClick" , id)
        deleteNote(id)
        .then(() =>
        {
            const updatedNotes = useNotes()
            const criminals = useCriminals()
            // console.log("updated notes" , updatedNotes)
            // console.log("criminals" , criminals)
            const newNoteArray = updatedNotes.map(note => {
                const newCriminal = criminals.find(criminalObj => criminalObj.id === note.criminalId)
                const newNote = Note(note, newCriminal)
                return newNote
            }).join("")
            // console.log("note card" , newNote)
            render(newNoteArray)
        })
    }
 })
 
