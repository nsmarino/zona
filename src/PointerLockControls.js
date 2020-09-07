import React, { useRef } from 'react'
import * as THREE from 'three'
import { extend, useThree, useFrame } from 'react-three-fiber'
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";

extend({ PointerLockControls });

const CameraControls = ({ forward, backward, left, right }) => {
    const {
      camera,
      gl: { domElement },
    } = useThree();
    
    const controls = useRef();

    domElement.addEventListener('click', () => {
      if (!controls.current.isLocked) controls.current.lock()
    })  

    let vector = new THREE.Vector3()
    const speed = 0.1
    useFrame(() => {
      if (forward) {
        camera.getWorldDirection(vector)
        camera.position.x = camera.position.x + (vector.x * speed)
        camera.position.z = camera.position.z + (vector.z * speed)
      }
      if (backward) {
        camera.getWorldDirection(vector)
        camera.position.x = camera.position.x - (vector.x * speed)
        camera.position.z = camera.position.z - (vector.z * speed)
      }

      if (right) {
        camera.getWorldDirection(vector)
        camera.position.x = camera.position.x - (vector.z * speed)
        camera.position.z = camera.position.z + (vector.x * speed)
      }

      if (left) {
        camera.getWorldDirection(vector)
        camera.position.x = camera.position.x + (vector.z * speed)
        camera.position.z = camera.position.z - (vector.x * speed)
      }
    })

    return <pointerLockControls ref={controls} args={[camera, domElement]} />;
  };

export default CameraControls