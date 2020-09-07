import React, { useRef } from 'react'
import { useFrame, useThree } from 'react-three-fiber'

function Obelisk({setHover, setMenuVis}) {
  const group = useRef()
  
  const hover = {
    label: "Obelisk",
    text: "A mysterious floating object. It is cold to the touch."
  }

  const { clock } = useThree()
  
    useFrame(() => {
      group.current.position.y = (Math.sin(clock.elapsedTime) /20)
    })

    return (
      <group 
        ref={group}
        onPointerOver={() => {
          setHover(hover)}}
        onPointerOut={(e) =>{
          setMenuVis(false)
          setHover(null)}}
      >
      <mesh
        position={[0, 0, 0]}
        scale={[1,1,1]}
      >
        <boxBufferGeometry attach="geometry" args={[1,2,1]} />
        <meshStandardMaterial 
          attach="material"
          color="#666"
          roughness={1}
          metalness={0.5}
        />    
      </mesh>

      <mesh 
        position={[0,-1,0]}
      >
      <boxGeometry attach="geometry" args={[1,1,1]} />
      <meshStandardMaterial 
        attach="material"
        color="#666"
        transparent
        roughness={1}
        metalness={0.5}
      />
      </mesh>
      </group>
    )
  }
  
export default Obelisk