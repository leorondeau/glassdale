export const Note = (noteObj) => {
    return `
        <div class="noteCard">
           
            <h5>Author: ${noteObj.author}</h5>
                <p>Suspect: ${noteObj.suspect}</p>
                <p>Date of Interview: ${noteObj.dateOfInterview}</p>
                <p>Time Note Entered: ${new Date(noteObj.timestamp).toLocaleDateString('en-US')}</p>
                <p>Note: ${noteObj.note}</p>
        </div>`
}