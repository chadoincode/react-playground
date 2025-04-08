import { useState } from "react"

const MoodButton = () => {
  const [mood, setMood] = useState<string>("")

  return(
    <>
    
      <h2 className="font-bold text-xl">How's your mood today? {mood}</h2>
      <div className="flex flex-row gap-3 mt-5">
        <button onClick={() => setMood("😫")} className="cursor-pointer">Tired</button>
        <button onClick={() => setMood("😰")} className="cursor-pointer">Anxious</button>
        <button onClick={() => setMood("😴")} className="cursor-pointer">Sleepy</button>
        <button onClick={() => setMood("😄")} className="cursor-pointer">Happy</button>
        <button onClick={() => setMood("☹️")} className="cursor-pointer">Sad</button>
        <button onClick={() => setMood("😡")} className="cursor-pointer">Angry</button>
        <button onClick={() => setMood("😒")} className="cursor-pointer">Dissapoint</button>
        <button onClick={() => setMood("😨")} className="cursor-pointer">Scared</button>
      </div>
    </>
  )
}

export default MoodButton