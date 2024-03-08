import React from "react";
import styles from "./certificates.module.css";
import Image from "next/image";
import CertiCarousel from "../carousel/CertiCarousel";

function Certificates() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.imgContainer}>
        <CertiCarousel></CertiCarousel>
      </div>
    </div>
  );
}

export default Certificates;
