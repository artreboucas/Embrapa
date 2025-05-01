import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/index'
import Simulacao1 from './pages/first-simulation/index'
import Simulacao2 from './pages/second-simulation/index'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulacao1" element={<Simulacao1 />} />
        <Route path="/simulacao2" element={<Simulacao2 />} />
      </Routes>
    </Router>
  )
}

export default App
