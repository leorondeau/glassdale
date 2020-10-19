let criminals = []

export const useCriminals = () => {
    return criminals.slice()
}

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedCriminals => {
                // console.table("CRIME" , parsedCriminals)
                // console.log("CRIMELOG" , parsedCriminals)
                criminals.push(parsedCriminals)
            }
        )
}

console.log("ARRAY" , criminals)
