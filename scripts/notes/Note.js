export const Note = (noteObj) => {
    return `
        <div class="noteCard">
            <h4>${noteObj.author}</h4>
            <p>Crime:${noteObj.suspect}</p>
            <p>Date of Interview:${new Date(noteObj.dateOfInterview.start).toLocaleDateString('en-US')}</p>
            <p>Time Stamp: ${date.now()}</p>
               
        </div>`
}