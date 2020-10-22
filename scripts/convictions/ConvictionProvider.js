let convictions = []

export const useConvictions = () => {
    return [...convictions]
}

export const getConvictions = () => {
    
    return fetch ("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
            .then(convictionsArray => {
               
                convictions = convictionsArray
                
            }
            )
        }
        