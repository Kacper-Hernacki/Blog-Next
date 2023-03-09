"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import styled from "styled-components";

const Model = () => {
  // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/space_explorer/scene.gltf");
  return (
    <>
      {/* Use scale to control the size of the 3D model */}
      <primitive dispose={null} object={gltf.scene} scale={0.1} />
    </>
  );
};
export default function Thanks() {
  return (
    <Container className="flex-col w-full justify-center mt-96 pt-10">
      <Banner className="absolute w-full left-1/2 -translate-x-1/2 sm:mx-auto max-[600px]:m-6 text-black flex-col w-max-md mx-10 mb-4 max-w-screen-md align-middle justify-center  z-10 p-5">
        <h1 className="text-3xl font-bold mt-20 max-[600px]:mt-5 text-center w-full drop-shadow-lg">
          Huge Thanks for signing to my Newsletter 🎊
        </h1>
        <h3 className="text-xl font-bold text-center w-full drop-shadow-lg">More aweosme content soon</h3>

      </Banner>
      <ThreeDContainer className="mt-20 absolute w-full top-1/2 left-1/2 -translate-x-1/2 grid place-items-center cursor-grabbing -mt-52 h-96">
        <Canvas className="h-96" shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
          <Suspense fallback={null}>
            <Model />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls autoRotate />
        </Canvas>
      </ThreeDContainer>
    </Container>
  );
}


const Container = styled.div`
  width: 100vw !important;
  height: 100vh !important;
`

const Banner = styled.div`
  z-index: 1000;
  top: 500px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    top: 450px;
  }
`

const ThreeDContainer = styled.div`
  margin-top: -200px;
  width: 100vw !important;
  height: 100vh !important;

  canvas {
    z-index: 100;
    height: 860px !important;
    width: 100%;
  }
`;
