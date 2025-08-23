import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// This is the main entry point of the React application. It uses ReactDOM to render the App component into the root DOM node.'
// StrictMode is a tool for highlighting potential problems in an application.
// It activates additional checks and warnings for its descendants.
// This is used in script tag in index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
