import React from 'react'
import { useLoader } from 'react-three-fiber'
import { ImageLoader } from 'three'
import TextureURL from './assets/rsz_img.jpg'

const Cube = () => {
  const texture = useLoader(ImageLoader, TextureURL )

  return (
    <mesh
      position={[2,0,2]}
      userData={{
        text: 'THIS IS THE CUBE'
      }}
    >
      <boxBufferGeometry attach="geometry" args={[1,1,1]} />
      <meshPhongMaterial attach="material">
        <texture 
          attach="map" 
          image={texture} 
          onUpdate={self => texture && (self.needsUpdate = true)} 
        />
      </meshPhongMaterial>
    </mesh>
  )
}

export default Cube