import { buttonRender } from "./WitnessButton.js"
import { Witness } from "./Witness.js"
import { getWitnesses, useWitnesses } from "./WitnessDataProvider.js"

const witnessContainer = document.querySelector(".caseDataContainer")
const eventHub = document.querySelector(".container")

export const WitnessList = () => {
    
    getWitnesses()
    .then(() => {
        const witnessArray = useWitnesses()

        render(witnessArray)
    })
    
}

const render = (witnessArray) => {
    let witnessHTMLRepresentations = ""
    for (const witness of witnessArray) {
  
      witnessHTMLRepresentations += Witness(witness)
  
      witnessContainer.innerHTML = `
            <h3>Witness LIst</h3>
            <section class="witnessList">
              ${witnessHTMLRepresentations}
            </section>
          `
    }

}




eventHub.addEventListener("witnessClicked" , () => WitnessList())