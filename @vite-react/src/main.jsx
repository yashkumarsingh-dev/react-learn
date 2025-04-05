import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App! and chai</h1>
    </div>
  )
}

// const reactElemet = {
//   type: 'a',
//   props:{
//       href:'http://www.google.com',
//       target:'_blank'
//   },
//   children: 'Click me to go to Google'
// }

const anotherElement = (
  <a href="http://www.google.com" target="_blank">Click me to go to Google</a>
)

const anotherUser = "Sahil and Coffee"

const reactElemet = React.createElement(
  'a',
  {
    href: 'http://www.google.com',
    target: '_blank'
  },
  'Click me to go to Google',
  anotherUser,
)

createRoot(document.getElementById('root')).render(

  reactElemet

)
