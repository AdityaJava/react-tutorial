import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// This is the main entry point of the React application. It uses ReactDOM to render the App component into the root DOM node.'
// StrictMode is a tool for highlighting potential problems in an application.
// It activates additional checks and warnings for its descendants.
// This is used in script tag in index.html
function MyApp() {
  return (
    <>
      My App !
    </>
  )
}

const element = (
  <a href="https://www.google.com" target="_blank">
    Go to Google
  </a>
)

createRoot(document.getElementById('root')).render(
  //MyApp()
  //element


  /*This App component will be converted to object like below by babel transpiler
  {
    type: App,
    props: {},
    children: undefined
  }
  Then React will take this object and render it to the DOM
  This is done by ReactDOM library
  ReactDOM will create the DOM elements and append them to the root element
  This is done in ReactDOM.render() method
  ReactDOM.render() method takes two arguments, first is the react element and second is the container where the element should be rendered
  In this case, the container is the root element
  The root element is defined in index.html file
  The root element is a div with id 'root'
  The root element is selected using document.getElementById('root')
  The root element is passed to ReactDOM.render() method as second argument
  The react element is passed to ReactDOM.render() method as first argument */
  <App></App>
)
