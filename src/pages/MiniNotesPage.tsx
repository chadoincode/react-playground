import { useState } from "react";
import Header from "../components/Header";

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
      <Header title="Mini Notes App"/>
      <input 
        type="text" 
        onChange={(e) => setInput(e.target.value)}
        className="border-b-gray-50 bg-light rounded-lg p-1.5 mr-2"
      />
      <button 
        onClick={handleSubmit}
        className="p-2 text-sm bg-light cursor-pointer rounded-lg"
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