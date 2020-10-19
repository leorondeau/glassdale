export const Criminal = (criminalObj) => {
    return `
        <div class="criminalCard">
            <h4>${criminalObj.name}</h4>
            <p>ID:${criminalObj.id}</p>
                <p>Age:${criminalObj.age}</p>
                <p>Crime:${criminalObj.conviction}</p>
                <p>Term start:${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
                <p>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        </div>`
}


