import React, { useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Context from './context'
import './main.css'

const ContextApi: React.FC = () => {
  const [cars, setCars] = useState([])
  const [edit, setEdit] = useState(false)

  const ProviderValue = useMemo(
    () => ({ cars, setCars, edit, setEdit }),
    [cars, setCars, edit, setEdit]
  )
  return <Context.Provider value={ProviderValue}><App /></Context.Provider>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextApi />
    </BrowserRouter>
  </React.StrictMode>
)
