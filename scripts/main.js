import { getCriminals, useCriminals } from "./criminals/CriminalProvider.js"
import { getOfficers, useOfficers } from "./officers/OfficerProvider.js"

// console.log("TEST" , useOfficers())

// console.log("Welcome to the main module")

// console.table("GET" , getOfficers())
console.table("GETCRIME" , getCriminals())
console.log("USEARRAY" , useCriminals())