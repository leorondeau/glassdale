// This module contains all the data to be used in the scripts. Specifically this calls API through the fetch method and converts into json 
// which stands for javaScript Object Notation which is a much easier format to read. Once it's converted it's then assigned to the empty array
// which is the cloned through with the slice() method not to be confuse with the splice() method. 40 minutes I'll never get back. It's then exported
// to the List module so that it can be mapped through and represented in HTML.


let officers = []

export const useOfficers = () => {
    return officers.slice()
}

export const getOfficers = () => {
    return fetch ("https://criminals.glassdale.us/officers")
    .then(response => response.json())
    .then(
        parsedOfficers => {
             
            officers = parsedOfficers
           
        }
    )
}