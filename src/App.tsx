import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

    return (
    <div className="min-h-screen bg-background text-primary p-8">
      <h1 className="text-4xl font-serif">
        Fondo oscuro con Tailwind
      </h1>

      <div className="mt-6 bg-secondary p-4 rounded">
        Caja secundaria
      </div>
    </div>
  )
}

export default App
