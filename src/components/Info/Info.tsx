import React from "react";
import style from "./Info.module.css";

const Info: React.FC = () => {
  return (
    <div className={style.infoContainer}>
      <p className={style.text}>
        <span className={style.textItem}>&#8727;</span>
        The application accepts a .zip archive as a single binary file, which
        contains a two-dimensional array of bytes. Each element of the array
        represents the sea surface temperature in Fahrenheit for a specific
        latitude and longitude.
      </p>
    </div>
  );
};

export default Info;
