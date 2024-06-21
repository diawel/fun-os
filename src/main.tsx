import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const params = new URL(document.location.href).searchParams
const test = params.get('test')
if (test) {
  window.localStorage.setItem('TEST', test)
  location.replace(location.href.split('?')[0])
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
