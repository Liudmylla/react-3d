import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import texture from "../../public/grasse.jpg";

export default function Sphera() {
  const textureMap = useLoader(TextureLoader, texture);
  return (
    <mesh position={[0, 0, -2]}>
      <sphereGeometry args={[2, 32]} />
      <meshStandardMaterial map={textureMap} />
    </mesh>
  );
}
