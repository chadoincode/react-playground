import { Route, Routes } from 'react-router'
import './App.css'
import MenuCard from './components/Card'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <MenuCard /> */}
        {/* <MoodButton /> */}
        {/* <MiniNotesApps /> */}
      </Routes>
    </>
  )
}

export default App
