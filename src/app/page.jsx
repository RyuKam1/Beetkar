"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Typed from "react-typed";
import Background from "@/components/background/Background";
import InteractiveText from "@/components/interactiveText/interactiveText";
import { getElement } from "@syncfusion/ej2-react-progressbar";
import { checkout } from "../../checkout";
import OrderWindow from "@/components/order/OrderWindow";

export default function Home() {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
    console.log(showMe);
  }

  return (
    <main className={styles.main}>
      <Background></Background>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Beetkar</h1>
        <span className={styles.proffesion}>
          The beekeeper&apos;s eyes into the hive
        </span>
        <span className={styles.desc}>
          ჩვენ ვეხმარებით მეფუტკრეებს დაავადებების აღმოჩენაში სპეციალური
          ტექნოლოგიით
        </span>
        <div className={styles.btnContainer}>
          <button className={styles.btn}>
            <a href="/about">ჩვენს შესახებ</a>
          </button>
          <button className={styles.btn} onClick={toggle}>
            წინასწარი შეკვეთა
          </button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={"/hive.png"}
          alt="me"
          fill={true}
          className={styles.img}
        ></Image>
      </div>
      {showMe ? <OrderWindow /> : null}
    </main>
  );
}
