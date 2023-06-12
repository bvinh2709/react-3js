import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Burger from './Burger'
import { styled } from 'styled-components'


const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
  color: black;
  font-size: 14px;
  font-weight: 300;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`

const WebDesign = () => {
  return (
    <>
      <Canvas>
          <Stage environment='city' intensity={0.3}>
              <Burger />
          </Stage>
          <OrbitControls autoRotate />
      </Canvas>
      <Desc>A website that sells soul food and let customers check out through Stripe</Desc>
    </>
  )
}

export default WebDesign
