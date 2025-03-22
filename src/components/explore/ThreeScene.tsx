"use client";

import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import ThreeCanModel from "./ThreeCanModel";

const LoadingScreen = () => <div style={{ color: "black", background: "transparent", textAlign: "center", fontSize: "20px" }}>Loading...</div>;

const ThreeScene = ({
  currentTexture,
  setCurrentTexture,
  triggerRotation,
  setTriggerRotation,
  textureFlow,
  isFinalStep,
  zeroOption,
  isDone,
  resultExist,
}: {
  currentTexture: string;
  setCurrentTexture: React.Dispatch<React.SetStateAction<string>>;
  triggerRotation: boolean;
  setTriggerRotation: React.Dispatch<React.SetStateAction<boolean>>;
  textureFlow: string[];
  isFinalStep: boolean;
  zeroOption: boolean;
  isDone: boolean;
  resultExist: boolean;
}) => {
  const orbitRef = useRef<any>(null);

  useEffect(() => {
    if (!resultExist && orbitRef.current) {
      orbitRef.current.reset();
    }
  }, [resultExist]);

  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }} style={{ maxHeight: "80%", background: "transparent" }}>
      {isDone && <OrbitControls ref={orbitRef} />}
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <pointLight position={[0, 5, 3]} intensity={5} />
      <spotLight position={[0, 10, 10]} intensity={5} angle={0.3} penumbra={0.5} />
      <Suspense
        fallback={
          <Html center>
            <LoadingScreen />
          </Html>
        }
      >
        <ThreeCanModel
          currentTexture={currentTexture}
          setCurrentTexture={setCurrentTexture}
          triggerRotation={triggerRotation}
          setTriggerRotation={setTriggerRotation}
          textureFlow={textureFlow}
          isFinalStep={isFinalStep}
          zeroOption={zeroOption}
          isDone={isDone}
        />
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;
