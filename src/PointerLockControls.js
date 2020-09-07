import React, { useRef } from 'react'
import { extend, useThree } from 'react-three-fiber'
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";

extend({ PointerLockControls });

const CameraControls = () => {
    const {
      camera,
      gl: { domElement },
    } = useThree();

    const controls = useRef();
    
    domElement.addEventListener('click', () => {
      if (!controls.current.isLocked) controls.current.lock()
      // controls.current.isLocked ?
      //   controls.current.unlock()
      //   :
      //   controls.current.lock()
    })  

    return <pointerLockControls ref={controls} args={[camera, domElement]} />;
  };

export default CameraControls