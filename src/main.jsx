import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './page/Home'
import Global from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Global />
  </React.StrictMode>,
)
