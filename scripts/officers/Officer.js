// Creates the HTML representation for each officer object and exports that function 
// to the Officerlist where it can invoked in the .map method


export const Officer = (officerObj) => {
    return `
   
    <div class="officerCard">
        <h4>${officerObj.name}</h4>
            <p>${officerObj.id}</p>
    </div>
    `
}