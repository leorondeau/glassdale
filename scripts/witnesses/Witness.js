export const Witness = (witnessObj) => {
        return `
       
        <div class="witnessCard">
            <h4>${witnessObj.name}</h4>
                <p>${witnessObj.statements}</p>
        </div>
        `
    }