import 'virtual:uno.css'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MobileLayout from './components/MobileLayout'
import BottomNavigation from './components/BottomNavigation'

function App() {
  return (
    <BrowserRouter>
      <MobileLayout>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" />
        </Routes>
        <BottomNavigation />
      </MobileLayout>
    </BrowserRouter>
  )
}

export default App
