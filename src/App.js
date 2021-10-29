import Blop from "./Blop";
import React, { useState, useEffect } from "react";

export default function App(props) {
  const [scale, setScale] = useState(50);
  const [spin, setSpin] = useState(0);
  const [hertSpin, setHertSpin] = useState(0);
  const [vertSpin, setVertSpin] = useState(0);
  const [increment, setIncrement] = useState(0);

  const increase = () => {
    let i = 10;
    setScale(scale + i);
    console.log(scale);
  };

  const plus = () => {
    let i = 1;
    setIncrement(increment + i);
  };

  const decrease = () => {
    let i = 10;
    setScale(scale - i);
  };

  const stopSpin = () => {
    setSpin(0.01);
  };
  //bad way to rotate the face from the top face.
  const vertSpinner = () => {
    let i = Math.PI * 0.5;
    console.log(i);
    setVertSpin(vertSpin + i);
  };

  //bad way to rotate the face side face
  const hertSpinner = () => {
    let i = 1;
    setHertSpin(hertSpin + i);
  };

  const screenH = "80vh";
  const screenW = window.width;

  return (
    <>
      <div
        className="container-flex"
        style={{ height: screenH, width: screenW }}
      >
        <Blop />
      </div>

      {/* <div className="face1 bg-danger">FACE 1</div>

      <div className="d-flex justify-content-around bg-success fixed-bottom">
        <button className="btn btn-primary" onClick={increase}>
          {" "}
          Increase the Size{" "}
        </button>

        <button className="btn btn-primary" onClick={decrease}>
          {" "}
          Decrease the Size{" "}
        </button>
        <button className="btn btn-primary" onClick={stopSpin}>
          {" "}
          Stop Spin{" "}
        </button>
        <button className="btn btn-primary" onClick={vertSpinner}>
          {" "}
          Rotate Y face{" "}
        </button>
        <button className="btn btn-primary" onClick={hertSpinner}>
          {" "}
          Rotate X face / On the Y axis{" "}
        </button>
        <button className="btn btn-primary" onClick={plus}>
          {" "}
          test incrementer
        </button>
      </div> */}
    </>
  );
}
