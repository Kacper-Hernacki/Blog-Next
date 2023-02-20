"use client";
import axios from "axios";
import { Suspense, useState } from "react";
import useSWR, { mutate } from "swr";
import { useRouter } from "next/navigation";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three-stdlib";
import { Canvas, useLoader } from "@react-three/fiber";
import styled from "styled-components";

const Model = () => {
  // location of the 3D model
  const gltf = useLoader(GLTFLoader, "/toy_rocket/scene.gltf");
  return (
    <>
      {/* Use scale to control the size of the 3D model */}
      <primitive dispose={null} object={gltf.scene} scale={5} />
    </>
  );
};

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();
  const { data } = useSWR("/api/getSubscribers", (apiURL: string) => fetch(apiURL).then(res => res.json()));

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/newsletter", { email });
      await mutate(`/api/getSubscribers`);
      setState("SUCCESS");
      await router.push("/thanks");
    } catch (e: any) {
      console.log(e);
      setErrorMessage(e?.response?.data?.error);
      setState("ERROR");
    }
  };

  return (
    <Container className="flex w-full justify-center mt-10">
      <form className="sm:max-[500px]:m-6 mt-80 mb-32 shadow-xl flex-col mx-5 mb-4 max-w-screen-md align-middle justify-center p-7 bg-gray-800 rounded-xl h-96">
        <h2 className="max-[600px]:text-xl text-2xl font-bold max-w-md text-gray-50">
          Do you want to be updated with the latest tech stuff?
        </h2>
        <h2 className="max-[600px]:text-xl text-2xl font-bold mb-4 text-gray-50">
          Please leave your mail below, and sign up!
        </h2>
        <div className="flex max-[600px]:flex-col">
          <input className=" max-[600px]:mb-3 max-[600px]:mr-0 max-[600px]:text-xl:mr-0 mr-2 shadow appearance-none border rounded w-100 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 type="email"
                 placeholder="Enter your email address"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 disabled={state === "SUCCESS" || state === "LOADING"}
          />
          <button
            disabled={state === "SUCCESS" || state === "LOADING"}
            className=" max-[600px]:ml-0 max-[600px]:text-sm  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded focus:outline-none focus:shadow-outline"
            type="submit" onClick={subscribe}>
            Subscribe
          </button>
        </div>

        {(data) ?
          <h2 className="max-[600px]:text-xl mt-4 text-2xl font-bold text-gray-200">Join <span className="font-bold text-sky-800">{data}</span> happy
            subscribers!</h2> : null
        }
        <h4 className="font-bold mb-4 mt-2 max-w-md text-gray-400">
          I provide there a valuable content, trusted throughout thousands of followers, across many social platforms.
          You
          can unsubscribe anytime.
        </h4>
        {state === "ERROR" && (
          <p className="w-1/2 mt-2 text-red-600">{errorMessage}</p>
        )}
        {state === "SUCCESS" && (
          <p className="text-2xl mt-2 font-bold text-sky-900">Thank you for the subscription 🎉</p>
        )}
      </form>

      <ThreeDContainer className="grid place-items-center mt-80 cursor-grabbing">
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
  @media (max-width: 500px) {
    flex-direction: column;
    
    form{
      height: 450px;
    }
  }
`


const ThreeDContainer = styled.div`
  canvas {
    z-index: 100;
    height: 600px !important;
    width: 400px !important;

    @media (max-width: 500px) {
      display: none !important;
    }
  }
`;

