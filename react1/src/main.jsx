import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

const reactElement = React.createElement(
  'a',
  {href: 'https://vitejs.dev', target: '_blank'},
  'click here to ViteJS'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
