import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import NavBar from '../components/NavBar'
import Error404Page from '../components/Error404Page'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>
)
