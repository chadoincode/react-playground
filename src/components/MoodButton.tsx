import { useState } from "react"
import Header from "./Header"

const MoodButton = () => {
  const [mood, setMood] = useState<string>("")

  return(
    <>
      {/* <Header title="Mood Button App" /> */}
      <div className="flex flex-col justify-center items-center h-screen gap-3">
        <h2 className="md:text-2xl text-light font-bold text-lg">How's your mood today? {mood}</h2>
        <div className="flex flex-col md:flex-row gap-3 mt-5">
          <button onClick={() => setMood("😫")} className="cursor-pointer">Tired</button>
          <button onClick={() => setMood("😰")} className="cursor-pointer">Anxious</button>
          <button onClick={() => setMood("😴")} className="cursor-pointer">Sleepy</button>
          <button onClick={() => setMood("😄")} className="cursor-pointer">Happy</button>
          <button onClick={() => setMood("☹️")} className="cursor-pointer">Sad</button>
          <button onClick={() => setMood("😡")} className="cursor-pointer">Angry</button>
          <button onClick={() => setMood("😒")} className="cursor-pointer">Dissapoint</button>
          <button onClick={() => setMood("😨")} className="cursor-pointer">Scared</button>
        </div>
      </div>
    </>
  )
}

export default MoodButton