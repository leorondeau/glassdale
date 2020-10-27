const eventHub = document.querySelector(".container")


export const Criminal = (criminalObj) => {
    return `
        <div class="criminalCard">
            <h4>${criminalObj.name}</h4>
            <p>ID:${criminalObj.id}</p>
                <p>Age:${criminalObj.age}</p>
                <p>Crime:${criminalObj.conviction}</p>
                <p>Term start:${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
                <p>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
                <button id="associates--${criminalObj.id}">Associate Alibis</button>
        </div>`
}


eventHub.addEventListener("click" , event => {
    if(event.target.id.startsWith("associates--")) {
        
        const [prefix , chosenCriminal] = event.target.id.split("--")
       const customEvent = new CustomEvent ("associateAlibi" , {
            
        detail: {
                associateAlibiSelected: parseInt(chosenCriminal)
                
            }
            
        })
        eventHub.dispatchEvent(customEvent)
        console.log(chosenCriminal)
    }
})

