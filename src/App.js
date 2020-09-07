import React, { Suspense, useState } from 'react'
import { Canvas } from 'react-three-fiber'

import GroundPlane from './GroundPlane'
import Obelisk from './Obelisk'
import Cube from './Cube'
import Asset from './Asset'
import PointerLockControls from './PointerLockControls'

const App = () => {
    const [hover, setHover] = useState(null)
    const [text, setText] = useState('')
    const [menuVis, setMenuVis] = useState(false)
    const [forward, setForward] = useState(false)
    const [backward, setBackward] = useState(false)
    const [left, setLeft] = useState(false)
    const [right, setRight] = useState(false)

    console.log('text',text)
    document.onkeydown = (e) => { 
      if (e.keyCode === 32) {
        if (hover) {
          setMenuVis(!menuVis)
        } else {
          setMenuVis(false)
        }
      }
      if (e.keyCode === 89) { // Y
        setForward(true)
      }
      if (e.keyCode === 72) { // H
        setBackward(true)
      }
      if (e.keyCode === 71) { // H
        setLeft(true)
      }
      if (e.keyCode === 74) { // H
        setRight(true)
      }
    }

    document.onkeyup = (e) => {    
      if (e.keyCode === 89) { // Y
        setForward(false)
      }
      if (e.keyCode === 72) { // H
        setBackward(false)
      }
      if (e.keyCode === 71) { // H
        setLeft(false)
      }
      if (e.keyCode === 74) { // H
        setRight(false)
      }
    }

  return (
  <>
  <Canvas>
    <PointerLockControls 
      forward={forward} 
      backward={backward}
      left={left}
      right={right} 
      setText={setText}
    />

    <ambientLight />
    <pointLight 
      position={[10, 10, 10]} 
    />

    <Obelisk 
      setHover={setHover} 
      setMenuVis={setMenuVis}
    />

    <Suspense fallback={<>Loading...</>}>
      <Cube />
    </Suspense>

    <Suspense fallback={<>Loading...</>}>
      <GroundPlane />
    </Suspense>

   <Suspense fallback={<>Loading...</>}>
      <Asset />
    </Suspense> 

  </Canvas>
  <div className="label">{text}</div>
</>
)}

export default App
