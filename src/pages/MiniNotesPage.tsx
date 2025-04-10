import { useState } from "react";
import Header from "../components/Header";

type NoteProps = {
  id: number
  text: string
}

export const MiniNotesCard =  ({id, text}: NoteProps) => {
  return(
    <div className="flex bg-accent rounded-2xl p-3 justify-between gap-3 align-center items-center">
      <h3 className="font-medium text-2xl">{text}</h3>
      <button className="p-2">Delete</button>
    </div>
  )
}

const MiniNotesApps = () => {
  const [input, setInput] = useState<string>("")
  const [notes, setNotes] = useState<NoteProps[]>([])

  const handleSubmit = () => {
    if(input !== ""){
      setNotes([...notes, {id: notes.length + 1, text: input}])
      setInput("")
    } else {
      alert("Input can't be blank")
    }
  }
  return(
    <div>
      <Header title="Mini Notes App"/>
      <input 
        value={input}
        type="text" 
        onChange={(e) => setInput(e.target.value)}
        className="border-b-gray-50 bg-light rounded-lg p-1.5 mr-2"
      />
      <button 
        onClick={handleSubmit}
        className="p-2 text-sm bg-light cursor-pointer rounded-lg"
      >Submit</button>
      <div className="flex flex-col gap-3 mt-7">
        {notes.map((note) =>(
          <MiniNotesCard 
            key={note.id}
            id={note.id}
            text={note.text}
          />
        ))}
      </div>
    </div>
  )
}

export default MiniNotesApps