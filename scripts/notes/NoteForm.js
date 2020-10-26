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

        const dateOfInterview = document.querySelector("#dateOfInterview")
        const author = document.querySelector("#note--author")
        const suspect = document.querySelector("#note--suspect")
        const note = document.querySelector("#note--entry")

    }
})





