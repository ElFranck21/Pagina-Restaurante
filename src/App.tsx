
import { Route, Routes } from 'react-router-dom'
import Contacto from './components/contacto'


function App() {
    return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-background text-primary p-8">
            <h1 className="text-4xl font-serif">
              Fondo oscuro con Tailwind
            </h1>
            <div className="mt-6 bg-target p-4 rounded">
              Caja secundaria
            </div>
          </div>
        }
      />

      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  )
}

export default App
