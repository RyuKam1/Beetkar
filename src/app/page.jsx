"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Typed from "react-typed";

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <main className={styles.main}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Hello! I'm
          <div
            className={styles.nameContainer}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {isHovering && (
              <h1 href="/" className={styles.name}>
                გიორგი
              </h1>
            )}
            {!isHovering && (
              <h1 href="/" className={styles.name}>
                Giorgi
              </h1>
            )}
          </div>
        </h1>
        <span className={styles.proffesion}>
          And I Am
          <Typed
            strings={[
              "Web Developer",
              "React Developer",
              "Python Developer",
              "Software Engineer",
              "Arduino Programmer",
              "Electrical Engineer",
              "Unreal Engine Developer",
            ]}
            typeSpeed={50}
            loop={true}
            className={styles.typing}
          />
        </span>
        <span className={styles.desc}>
          I am Developer and Electrical Engineer with 2+ years of experience.{" "}
          <br /> My experience contains Web Development(HTML, CSS, Javascript,
          React.js, Next.js),
          <br /> Software Development(Python), <br /> Unreal Engine Game
          Developing (with some unity experience too) <br />
          and Arduino/raspberryPI Electrical Engineering
        </span>
        <button className={styles.btn}>Hire Me</button>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={`/coolerMe.jpg`}
          alt="me"
          fill={true}
          className={styles.img}
        ></Image>
      </div>
    </main>
  );
}
