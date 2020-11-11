const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
    // console.log("NOTESTATE" , noteStateChangedEvent)
}

let notes = ""

export const useNotes = () => {
    return notes.slice()
}

export const getNotes = () => {
    return fetch('http://localhost:8087/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}



// Where is any of this coming from?
export const saveNote = note => {
    return fetch('http://localhost:8087/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
    
}

export const deleteNote = noteId => { 
    return fetch(`http://localhost:8087/notes/${noteId}`,{
        method: "DELETE"
    })
    .then(getNotes)
}


const NoteForm = () => {

}