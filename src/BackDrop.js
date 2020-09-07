import React from 'react'

const BackDrop = () => {
    return (
      <mesh receiveShadow position={[0,-1,-5]}>
        <planeBufferGeometry attach="geometry" args ={[500,500]} />
        <meshStandardMaterial attach="material" color='#222' />
      </mesh>
    )
  }
  
export default BackDrop