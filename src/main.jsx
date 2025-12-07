import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CalcJuros from './pages/CalcJuros.jsx'
import CalcLenght from './pages/CalcLenght.jsx'
import GeradSenha from './pages/GeradSenha.jsx'
import TestSenha from './pages/TestSenha.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/calculadora-de-juros",
    element: <CalcJuros />
  },
  {
    path: "/contador-de-caracteres",
    element: <CalcLenght />
  },
  {
    path: "/gerador-de-senha",
    element: <GeradSenha />
  },
  {
    path: "/avaliador-de-senha",
    element: <TestSenha />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
