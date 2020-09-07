import ReactDOM from 'react-dom'
import React from 'react'
import App from './app'
import './index.css'

const addFocus = () => {
  const div = document.createElement("div")
  div.classList.add("focus")
  document.body.appendChild(div)
}

document.body.onload = addFocus

ReactDOM.render(<App />,
  document.getElementById('root')
)