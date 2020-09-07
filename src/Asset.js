import React from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import assetUrl from './assets/testCube.gltf' 

function Asset() {
  const gltf = useLoader(GLTFLoader, assetUrl)
  return <primitive scale={[2,2,2]} position={[0,-0.001,0]} object={gltf.scene} dispose={null} />
}

export default Asset