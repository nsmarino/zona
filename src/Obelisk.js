import React, { useRef, useState } from 'react'
import { useFrame, useThree } from 'react-three-fiber'

function Obelisk({toggleMenu}) {
    const { clock } = useThree()
    const cone = useRef()
    const group = useRef()
  
    const [hovered, setHover] = useState(false)
    // const [active, setActive] = useState(false)

    useFrame(() => {
      group.current.position.y = (Math.sin(clock.elapsedTime) /20)
    })

    return (
      <group 
        ref={group}
        onClick={toggleMenu}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
      <mesh
        position={[0, 1, 0]}
        ref={cone}
        scale={[1,3,1]}
        castShadow
        receiveShadow     
      >
        <cylinderBufferGeometry attach="geometry" args={[0.1, 0.5, 1, 4]} />
        <meshStandardMaterial 
          attach="material"
          color={hovered ? "#888" : "#666"}
          transparent
          roughness={1}
          metalness={0.5}
        />    
      </mesh>
      <mesh 
        position={[0,-1,0]}
        castShadow
      >
      <sphereGeometry attach="geometry" args={[0.5, 16, 16]} />
      <meshStandardMaterial 
        attach="material"
        color={hovered ? "#888" : "#666"}
        transparent
        roughness={1}
        metalness={0.5}
      />
      </mesh>
      </group>
    )
  }
  
export default Obelisk