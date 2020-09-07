import React from 'react'
import { useLoader } from 'react-three-fiber'
import { ImageLoader, RepeatWrapping, NearestFilter } from 'three'
import TextureURL from './assets/checker.png'

const GroundPlane = () => {
    const texture = useLoader(ImageLoader, TextureURL )
    // texture.wrapS = RepeatWrapping
    // texture.wrapT = RepeatWrapping
    // texture.magFilter = NearestFilter
    // const repeats = planeSize / 2
    // texture.repeat.set(repeats, repeats)

    return (
      <mesh receiveShadow rotation={[-1.5708,0,0]} position={[0,-2,-5]}>
        <planeBufferGeometry attach="geometry" args={[100,100]}/>
        <meshPhongMaterial attach="material">
        <texture 
          attach="map" 
          image={texture} 
          wrapS={RepeatWrapping} 
          wrapT={RepeatWrapping}
          magFilter={NearestFilter} 
          repeat={[50,50]}
          onUpdate={self => texture && (self.needsUpdate = true)} 
        />
        </meshPhongMaterial>
      </mesh>
    )
  }

export default GroundPlane