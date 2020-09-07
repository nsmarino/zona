import React, { useRef } from 'react'
import * as THREE from 'three'
import { extend, useThree, useFrame } from 'react-three-fiber'
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";

extend({ PointerLockControls });

const CameraControls = ({ forward, backward, left, right, setText }) => {
    const {
      camera,
      gl: { domElement },
      raycaster,
      scene,
    } = useThree();
    
    const controls = useRef();

    domElement.addEventListener('click', () => {
      if (!controls.current.isLocked) controls.current.lock()
    })  

    let worldDirection = new THREE.Vector3()
    let worldPosition = new THREE.Vector3()
    const speed = 0.1

    useFrame(() => {
      camera.getWorldDirection(worldDirection)
      camera.getWorldPosition(worldPosition)

      raycaster.set( worldPosition, worldDirection )
      const intersect = raycaster.intersectObjects(scene.children)
      if (intersect[0] && controls.current.isLocked) { 
        if (intersect[0].object.userData.text) {
          setText(intersect[0].object.userData.text)
        } else setText(null)
      }

      if (forward) {
        camera.position.x = camera.position.x + (worldDirection.x * speed)
        camera.position.z = camera.position.z + (worldDirection.z * speed)
      }
      if (backward) {
        camera.position.x = camera.position.x - (worldDirection.x * speed)
        camera.position.z = camera.position.z - (worldDirection.z * speed)
      }

      if (right) {
        camera.position.x = camera.position.x - (worldDirection.z * speed)
        camera.position.z = camera.position.z + (worldDirection.x * speed)
      }

      if (left) {
        camera.position.x = camera.position.x + (worldDirection.z * speed)
        camera.position.z = camera.position.z - (worldDirection.x * speed)
      }
    })

    return <pointerLockControls ref={controls} args={[camera, domElement]} />;
  };

export default CameraControls