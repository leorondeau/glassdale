let criminals = []
// console.log("ONE")
export const useCriminals = () => {
    return criminals.slice()
}

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedCriminals => {
        
                criminals.push(parsedCriminals)
                
            }
        )      
}
// console.log("THREE")
// console.log("USECRIME" ,useCriminals())
//  console.log("ARRAY" , criminals)

