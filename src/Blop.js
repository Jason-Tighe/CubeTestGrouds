import React, { useState, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import "./styles.css";
import styled from "styled-components";

import { TextureLoader } from "three/src/loaders/TextureLoader.js";

const Button = styled.button`
  height: 40px;
  margin: 12px 0 12px 12px;
  padding: 0 12px;
  border: 0;
  border-radius: 3px;
`;

const Bar = styled.div`
  height: 20vh
  width: 100%;
  background: #528a7b;
`;

function QRCube(props) {
  //So Spring: state name doesnt matter, so we can have different states for differnt controls.

  // const i = 0 + `${props.vertSpin}`;
  // const j = 0 + `${props.hertSpin}`;
  // const q = 0 + `${props.increment}`;
  const texture_1 = useLoader(TextureLoader, "cube/JGit.svg");
  const texture_2 = useLoader(TextureLoader, "cube/JLinkedIN.svg");
  const texture_3 = useLoader(TextureLoader, "cube/Meme1.svg");
  const texture_4 = useLoader(TextureLoader, "cube/Meme2.svg");
  const texture_5 = useLoader(TextureLoader, "cube/Meme3.svg");
  const texture_6 = useLoader(TextureLoader, "cube/RRoll.svg");
  // // const mesh = useRef();

  // const { scale } = useSpring({
  //   scale: active ? 75 : 50,
  //   config: config.wobbly
  // });

  // // interpolate values from commong spring
  // const scale = spring.to([0, 1], [1, 1]);

  // //This rotation will change to the next face.  Will probably need to change scale or something to a state.
  // // const rotationY = spring.to([0, 1], [0, Math.PI * 0.5]);
  // const rotationY = spring.to([0, 1], [0, Math.PI * 0.5]);

  // // const rotationX = spring.to([0, 1], [0, Math.PI * 0.5]);

  // const color = spring.to([0, 1], ["#6246ea", "#e45858"]);
  // // useFrame(() => {
  // //   mesh.current.rotation.x += .01;
  // //   // mesh.current.rotation.y = j;
  // // });

  return (
    <>
      <a.group position-y={props.scale}>
        <a.mesh
          rotation-y={props.rotationY}
          rotation-x={props.rotationX}
          rotation-z={props.rotationZ}
          scale-x={props.scale}
          scale-z={props.scale}
          //Not sure why Number() works?
          // onClick={() => setXenon(Number(xenon + 1))}
        >
          <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
          {/* <a.meshStandardMaterial
          roughness={0.5}
          attach="material"
          color={color}
        /> */}
          <a.meshStandardMaterial map={texture_1} attachArray="material" />
          <a.meshStandardMaterial map={texture_2} attachArray="material" />
          <a.meshNormalMaterial map={texture_3} attachArray="material" />
          <a.meshStandardMaterial map={texture_4} attachArray="material" />
          <a.meshStandardMaterial map={texture_5} attachArray="material" />
          <a.meshNormalMaterial map={texture_6} attachArray="material" />
        </a.mesh>
      </a.group>
    </>
  );
}

export default function Blop(props) {
  const [xenon, setXenon] = useState(0);
  const [yoga, setYoga] = useState(0);
  const [zed, setZed] = useState(0);

  const { rX } = useSpring({
    rX: xenon,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 }
  });

  const { rY } = useSpring({
    rY: yoga,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 }
  });

  const { rZ } = useSpring({
    rZ: zed,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 }
  });

  // interpolate values from commong spring
  const scale = rX.to([0, 1], [1,1]);


  //function to rotate the axis to update the postion of the axis
  //This rotation will change to the next face.  Will probably need to change scale or something to a state.
  // const rotationY = spring.to([0, 1], [0, Math.PI * 0.5]);
  const rotationY = rX.to([0, 1], [0, Math.PI * 0.5]);

  const rotationX = rY.to([0, 1], [0, Math.PI * 0.5]);

  const rotationZ = rZ.to([0, 1], [0, Math.PI * 0.5]);
  // const color = rX .to([0, 1], ["#6246ea", "#e45858"]);
  // useFrame(() => {
  //   mesh.current.rotation.x += .01;
  //   // mesh.current.rotation.y = j;
  // });

  return (
    <>
     
      <Canvas perspective camera={{ position: [0, 0, 10], fov: 30 }}>
        {/* <color attach="background" args={"black"} /> */}
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <QRCube
            scale={scale}
            rotationY={rotationY}
            rotationX={rotationX}
            rotationZ={rotationZ}
            color={rotationY}
          />
        </Suspense>
      </Canvas>
       <Bar>
        <Button onClick={() => setXenon(Number(xenon + 1))}>
          X: Rotate Clockwise
        </Button>
        <Button onClick={() => setXenon(Number(xenon - 1))}>
          X: Rotate Coutner-Clockwise
        </Button>
        <Button onClick={() => setYoga(Number(yoga + 1))}>
          Y: Rotate Clockwise
        </Button>
        <Button onClick={() => setYoga(Number(yoga - 1))}>
          Y: Rotate Coutner-Clockwise
        </Button>
        <Button onClick={() => setZed(Number(zed + 1))}>
          Z: Rotate Clockwise
        </Button>
        <Button onClick={() => setZed(Number(zed - 1))}>
          Z: Rotate Coutner-Clockwise
        </Button>
      </Bar>
    </>
  );
}
