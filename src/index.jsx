import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './pages/main'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);