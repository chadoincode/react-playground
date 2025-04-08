import { useState } from "react";

type NoteProps = {
  id: number
  text: string
}

export const MiniNotesCard =  ({id, text}: NoteProps) => {
  return(
    <div className="">
      <h3>{text}</h3>
      <button>Delete</button>
    </div>
  )
}

const MiniNotesApps = () => {
  const [input, setInput] = useState<string>("")
  const [notes, setNotes] = useState<NoteProps[]>([])

  const handleSubmit = () => {
    if(input !== ""){
      return setNotes([...notes, {id: notes.length + 1, text: input}])
    } else {
      alert("Input can't be blank")
    }
  }
  return(
    <div>
      <h2>Mini Notes App</h2>
      <input 
        type="text" 
        onChange={(e) => setInput(e.target.value)}
        className="border-b-gray-50 bg-amber-600 rounded-lg p-2 mr-2"
      />
      <button 
        onClick={handleSubmit}
        className="p-1"
      >Submit</button>
      {notes.map((note) =>(
        <MiniNotesCard 
          key={note.id}
          id={note.id}
          text={note.text}
        />
      ))}
    </div>
  )
}

export default MiniNotesApps