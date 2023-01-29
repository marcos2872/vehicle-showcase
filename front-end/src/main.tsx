import React, { useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Context from './context'
import './main.css'

const ContextApi: React.FC = () => {
  const [cars, setCars] = useState([])

  const ProviderValue = useMemo(
    () => ({ cars, setCars }),
    [cars, setCars]
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
