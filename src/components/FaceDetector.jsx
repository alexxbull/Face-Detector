import React from "react";
import styles from "../styles/FaceDetector.module.css";

const drawBoxes = box => {
  return box.map((coordinates, index) => {
    return (
      <div
        className={styles.boundingBox}
        key={index}
        style={{
          left: coordinates.leftCol,
          top: coordinates.topRow,
          right: coordinates.rightCol,
          bottom: coordinates.bottomRow
        }}
      />
    );
  });
};

const FaceDetector = ({ box, imageURL }) => {
  return (
    <div className={"center"}>
      <div className={`${styles.image} center`}>
        <img id="inputImage" src={imageURL} alt="" width="100%" height="auto" />
        {drawBoxes(box)}
      </div>
    </div>
  );
};

export default FaceDetector;
