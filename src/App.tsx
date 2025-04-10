import { Route, Routes } from 'react-router'
import './App.css'
import MenuCard from './components/Card'
import HomePage from './pages/HomePage'
import MiniNotesApps from './pages/MiniNotesPage'

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<HomePage />} /> */}
        {/* <MenuCard /> */}
        {/* <MoodButton /> */}
        <Route path='/' element={<MiniNotesApps />} />
      </Routes>
    </>
  )
}

export default App
