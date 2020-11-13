const eventHub = document.querySelector(".container")


export const Facility = (facilityObj , criminals) => {
    
    return `
        <div class="facilityCard" id="facility-${facilityObj.id}">
            <h4>${facilityObj.facilityName}</h4>
                 <p>ID: ${facilityObj.id}</p>
                
                <ul>Criminals: ${criminals.map(c => `<li>${c.name}<li>`).join("")}</ul>
                
                 <p>Security Level: ${facilityObj.securityLevel}</p>
                 <p>Capacity: ${facilityObj.capacity}</p>

        </div>`
}


eventHub.addEventListener("click" , event => {
    if(event.target.id.startsWith("associates--")) {
        
        const [prefix , chosenfacility] = event.target.id.split("--")
       const customEvent = new CustomEvent ("associateAlibi" , {
            
        detail: {
                associateAlibiSelected: parseInt(chosenCriminal)
                
            }
            
        })
        eventHub.dispatchEvent(customEvent)
        console.log(chosenCriminal)
    }
})
