import React from 'react'
import Atom from './Atom'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { styled } from 'styled-components'

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 100px;
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

const Development = () => {
  return (
    <>
      <Canvas>
          <Stage environment='city' intensity={0.6}>
              <Atom />
          </Stage>
          <OrbitControls autoRotate />
      </Canvas>
      <Desc>React Logo blah blah blah</Desc>
    </>
  )
}

export default Development
