/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 burger.gltf --transform
Author: z3song (https://sketchfab.com/z3song)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/burger-cute-d8affb3d76ee4ddcbfce7ddda46bc0b0
Title: Burger_Cute
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/burger-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Burger_011_01_-_Default_0'].geometry} material={materials['01_-_Default']} position={[0, 0.23, 0]} rotation={[Math.PI / 2, 0, Math.PI]} scale={[0.1, 0.1, 0.169]} />
    </group>
  )
}

useGLTF.preload('/burger-transformed.glb')