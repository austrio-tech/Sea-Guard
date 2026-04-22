import React, { Suspense, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber'; 
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls, Stage, Html } from '@react-three/drei';
import * as THREE from 'three';

const Loader = () => {
  return (
    <Html center>
      <div style={{ 
        color: '#01FF70', 
        fontSize: '1rem', 
        whiteSpace: 'nowrap', 
        textTransform: 'uppercase', 
        letterSpacing: '4px', 
        fontWeight: 'bold',
        fontFamily: 'var(--font-mono)',
        background: 'rgba(0,8,20,0.8)',
        padding: '1rem 2rem',
        border: '1px solid var(--green-neon)'
      }}>
        INITIALIZING 3D SYSTEMS...
      </div>
    </Html>
  );
};

// Camera light component to ensure the model is always visible from the user's perspective
const CameraLight = () => {
  const lightRef = useRef();
  
  useFrame((state) => {
    if (lightRef.current) {
      // Sync light position with camera position
      lightRef.current.position.copy(state.camera.position);
    }
  });

  return <pointLight ref={lightRef} intensity={10.5} color="#ffffff" distance={50} decay={2} />;
};

const Model = () => {
  const objPath = '/boat_Obj/d2939d7c91aa61ab7e5a9d36a6416243.obj';
  const mtlPath = '/boat_Obj/material.mtl';
  
  const materials = useLoader(MTLLoader, mtlPath);
  const obj = useLoader(OBJLoader, objPath, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  const meshRef = useRef();

  obj.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      // Ensure the material is actually visible
      if (child.material) {
        child.material.side = THREE.DoubleSide;
        child.material.transparent = false;
        child.material.opacity = 1;
      }
    }
  });

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.1;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return <primitive ref={meshRef} object={obj} />;
};

const BoatModel = () => {
  return (
    <div className="boat-canvas-container">
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        camera={{ position: [5, 5, 10], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={<Loader />}>
          <CameraLight />
          
          {/* Custom User Lighting */}
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#01FF70" />
          <pointLight position={[0, -10, 0]} intensity={1.5} color="#ffffff" /> 
          
          <Stage 
            environment="city" 
            intensity={0.5} 
            contactShadow={true} 
            shadows="contact" 
            adjustCamera={true}
          >
            <Model />
          </Stage>
          
          <OrbitControls 
            enableZoom={false} 
            autoRotate={false} 
            enablePan={false}
            minPolarAngle={0}
            maxPolarAngle={Math.PI}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BoatModel;
