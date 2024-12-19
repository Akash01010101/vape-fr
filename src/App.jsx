import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage'
import StarterKit from './pages/StarterKit';
import Productpage from './pages/Productpage';
import Regular from './pages/Regular';
import Saltnic from './pages/Saltnic'
import Coils from './pages/Coils'
import Juul from './pages/Juul'
import Disposable from './pages/Disposable'
import Iqos from './pages/Iqos'
import Snus from './pages/Snus'
function App() {

  return (
   <>
   <Router>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/Starterkit" element={<StarterKit />} />
    <Route path="/Regular" element={<Regular />} />
    <Route path="/Saltnic" element={<Saltnic />} />
    <Route path="/Coils" element={<Coils />} />
    <Route path="/Juul" element={<Juul />} />
    <Route path="/Disposable" element={<Disposable />} />
    <Route path="/Iqos" element={<Iqos />} />
    <Route path="/Snus" element={<Snus />} />
    <Route path="/Product/:id" element={<Productpage />} />
    </Routes>
   </Router>
   </>
  )
}

export default App
