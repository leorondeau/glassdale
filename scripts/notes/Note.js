export const Note = (noteObj , criminalObj) => {
    // console.log('here')
    // console.log("note , criminal" , noteObj , criminalObj)
    return `
        <div class="noteCard">
           
            <h5>Author: ${noteObj.author}</h5>
                <p>Criminal: ${criminalObj.name}</p>
                <p>Date of Interview: ${noteObj.dateOfInterview}</p>
                <p>Time Note Entered: ${new Date(noteObj.timeStamp).toLocaleDateString('en-US')}</p>
                <p>Note: ${noteObj.note}</p>
                <button id="deleteNote--${noteObj.id}">Delete</button>
        </div>`
}