const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

// Where is any of this coming from?
export const saveNote = note => {
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
    console.log(dispatchStateChangeEvent)
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveNote") {
        let num = 0
        // Make a new object representation of a note
        const newNote = {
            dateOfInterview,
            author,
            suspect,
            note,
            ID: ++num
            
        }
        // Change API state and application state
        saveNote(newNote)
    }
})

const NoteForm = () => {

}


// eventHub.addEventListener("click", clickEvent => {
//     if (clickEvent.target.id === "saveNote") {

//         const dateOfInterview = document.querySelector("#dateOfInterview")
//         const author = document.querySelector("#note--author")
//         const suspect = document.querySelector("#note--suspect")
//         const note = document.querySelector("#note--entry")
        
//     }
// })