import { CriminalList } from "./criminals/CriminalList.js"
import { getCriminals, useCriminals } from "./criminals/CriminalProvider.js"
import { OfficerList } from "./officers/OfficerList.js"
import { getOfficers, useOfficers } from "./officers/OfficerProvider.js"
import { getConvictions, useConvictions } from "./convictions/ConvictionProvider.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { NotesList } from "./notes/NoteList.js"




CriminalList()
OfficerList()
ConvictionSelect()
getConvictions()
OfficerSelect()
NoteForm()
NotesList()