import React, { Suspense, useState } from 'react'
import { Canvas } from 'react-three-fiber'

import GroundPlane from './GroundPlane'
import Obelisk from './Obelisk'
import Cube from './Cube'
import PointerLockControls from './PointerLockControls'
import Label from './Label'

const App = () => {
    const [hover, setHover] = useState(null)
    const [menuVis, setMenuVis] = useState(false)
    const [forward, setForward] = useState(false)
    const [backward, setBackward] = useState(false)
    const [left, setLeft] = useState(false)
    const [right, setRight] = useState(false)

    document.onkeydown = (e) => { 
      console.log(e.keyCode)   
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
  <Canvas shadowMap>
    <PointerLockControls 
      forward={forward} 
      backward={backward}
      left={left}
      right={right} 
    />

    <ambientLight />
    <pointLight 
      position={[10, 10, 10]} 
      castShadow
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

  </Canvas>
  { (menuVis && hover) && <div className="menu ">{hover.text}</div>}
  { hover && <Label label={hover.label} /> }
  <div className="focus"></div>
</>
)}

export default App
