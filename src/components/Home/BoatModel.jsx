import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls, Stage, PerspectiveCamera, Html } from '@react-three/drei';
import * as THREE from 'three';

const Loader = () => {
  return (
    <Html center>
      <div style={{ color: '#01FF70', fontSize: '1.2rem', whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>
        3D Object Loading...
      </div>
    </Html>
  );
};

// const Model = () => {
//   const objPath = '/boat_Obj/d2939d7c91aa61ab7e5a9d36a6416243.obj';
//   const mtlPath = '/boat_Obj/material.mtl';
  
//   const materials = useLoader(MTLLoader, mtlPath, (loader) => {
//     loader.setResourcePath('/boat_Obj/');
//   });
//   const obj = useLoader(OBJLoader, objPath, (loader) => {
//     materials.preload();
//     loader.setMaterials(materials);
//   });
//   obj.traverse((child) => {
//     if (child.isMesh) {
//       child.material = new THREE.MeshStandardMaterial({
//         color: 'orange',
//       });
//     }
//   });
//   const meshRef = useRef();

//   useFrame((state) => {
//     if (meshRef.current) {
//       const time = state.clock.elapsedTime;
//       // Continuous slow rotation around Y axis
//       meshRef.current.rotation.y += 0.005;
      
//       // Move up and down on origin (centered at 0)
//       meshRef.current.position.y = (Math.sin(time/2) * 0.1 + 0.11)/2;
      
//       // Slight rocking rotation (pitch and roll) around the center
//       meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.05;
//       meshRef.current.rotation.z = Math.cos(time * 0.5) * 0.05;
//     }
//   });

//   return <primitive ref={meshRef} object={obj} scale={0.5} />;
// };


const Model = () => {
  const objPath = '/boat_Obj/d2939d7c91aa61ab7e5a9d36a6416243.obj';

  const obj = useLoader(OBJLoader, objPath);

  obj.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        color: 'orange',
      });
    }
  });

  return <primitive object={obj} scale={0.5} />;
};

const BoatModel = () => {
  return (
    <div style={{ width: '100%', height: '500px', cursor: 'grab' }}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 25], fov: 45 }}>
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        <Suspense fallback={<Loader />}>
          <Stage environment="city" intensity={0.5}>
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default BoatModel;
