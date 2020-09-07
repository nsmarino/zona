import React, { Suspense, useState } from 'react'
import { Canvas } from 'react-three-fiber'

import GroundPlane from './GroundPlane'
// import BackDrop from './BackDrop'
import Obelisk from './Obelisk'
// import OrbitControls from './OrbitControls'
import PointerLockControls from './PointerLockControls'

const App = () => {
    const [menuVis, setMenuVis] = useState(false)

    const toggleMenu = () => setMenuVis(!menuVis)

  return (
  <>
  <Canvas shadowMap>
    <PointerLockControls />

    <ambientLight />
    <pointLight 
      position={[10, 10, 10]} 
      castShadow
    />

    <Obelisk toggleMenu={toggleMenu} />

    <Suspense fallback={<>Loading...</>}>
    <GroundPlane />
    </Suspense>

  </Canvas>
  <div className="test"></div>
  { menuVis && <div className="menu">
      A floating object. It is cold to the touch.</div>}
</>
)}

export default App
