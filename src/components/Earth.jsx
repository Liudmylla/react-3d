/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Akshat (https://sketchfab.com/shooter24994)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/earth-41fc80d85dfd480281f21b74b2de2faa
title: Earth
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
export function Earth(props) {
  const meshRef = useRef(null);
  // requestAnimationFrame
  // поворачиваем `mesh` по оси `z` на 0.003 единицы 60 раз в секунду (зависит от платформы)
  useFrame(() => (meshRef.current.rotation.z += 0.003));

  const { nodes, materials } = useGLTF("/earth/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
            <mesh
              ref={meshRef}
              geometry={nodes.Sphere_Material002_0.geometry}
              material={materials["Material.002"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");