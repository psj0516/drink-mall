import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { useGLTF, Html } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const ThreeCanModel = ({
  currentTexture,
  setCurrentTexture,
  triggerRotation,
  setTriggerRotation,
  textureFlow,
  isFinalStep,
  zeroOption,
  isDone,
}: {
  currentTexture: string;
  setCurrentTexture: React.Dispatch<React.SetStateAction<string>>;
  triggerRotation: boolean;
  setTriggerRotation: React.Dispatch<React.SetStateAction<boolean>>;
  textureFlow: string[];
  isFinalStep: boolean;
  zeroOption: boolean;
  isDone: boolean;
}) => {
  const LoadingScreen = () => <div style={{ color: "black", background: "transparent", textAlign: "center", fontSize: "20px" }}>Loading...</div>;

  const { scene } = useGLTF("/model/can.glb");
  const textures = useLoader(THREE.TextureLoader, textureFlow);
  const modelRef = useRef<THREE.Group>(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  // 마지막 텍스처 결정
  const finalTexture = zeroOption ? "/texture/test-four.jpg" : "/texture/test-three.jpg";

  // 모델 초기 위치 & 회전 설정
  useEffect(() => {
    if (scene && modelRef.current) {
      modelRef.current.position.x = 1;
      modelRef.current.position.y = -1.5;
      modelRef.current.rotation.x = -Math.PI / 2;
      modelRef.current.rotation.y = -Math.PI / 6;
      modelRef.current.rotation.z = Math.PI / 3;

      if (modelRef.current.position.y == -1.5) {
        setIsModelLoaded(true);
      }
    }
  }, [scene]);

  // 회전 & 텍스처 변경
  useEffect(() => {
    if (triggerRotation && modelRef.current) {
      const currentIndex = textureFlow.indexOf(currentTexture);

      // 마지막 단계라면 finalTexture 적용
      const nextTexture = isFinalStep ? finalTexture : textureFlow[currentIndex + 1];

      if (currentTexture === finalTexture) return; // 이미 최종 텍스처라면 변경하지 않음

      gsap.to(modelRef.current.rotation, {
        z: modelRef.current.rotation.z + Math.PI * 2,
        duration: 1,
        ease: "power2.inOut",
        onUpdate: function () {
          if (this.progress() > 0.5 && this.progress() < 0.6) {
            setCurrentTexture(nextTexture);
          }
        },
        onComplete: () => {
          setTriggerRotation(false);
        },
      });
    }
  }, [triggerRotation, isFinalStep, zeroOption]);

  // 텍스처 적용
  useEffect(() => {
    const textureMap = textureFlow.reduce((acc, path, index) => {
      acc[path] = textures[index];
      return acc;
    }, {} as Record<string, THREE.Texture>);

    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = textureMap[currentTexture];
        child.material.needsUpdate = true;
        child.material.metalness = 0.4;
      }
    });
  }, [currentTexture]);

  // 로딩 중 회전 효과
  useEffect(() => {
    if (isDone && modelRef.current) {
      gsap.to(modelRef.current.rotation, {
        z: modelRef.current.rotation.z + Math.PI * 4,
        duration: 3,
        ease: "power2.inOut",
      });
    }
  }, [isDone]);

  return (
    <>
      {!isModelLoaded && (
        <Html center>
          <LoadingScreen />
        </Html>
      )}
      <primitive ref={modelRef} object={scene} scale={0.3} />
    </>
  );
};

export default ThreeCanModel;
