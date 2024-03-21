"use client";

import React, { useState } from "react";
import styles from "./orderWindow.module.css";
import { useRouter } from "next/navigation";

function OrderWindow() {
  const price = 380; //price of the pizza in USD,

  const [numInput, setNumInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const router = useRouter();

  function handleOrder() {
    if (
      nameInput != "" &&
      emailInput != "" &&
      phoneInput != "" &&
      numInput != ""
    ) {
      const queryParams = {
        name: nameInput,
        email: emailInput,
        phone: phoneInput,
        amount: numInput,
      };
      const queryString = new URLSearchParams(queryParams).toString();
      router.push(`/thanks?${queryString}`);
    } else {
      alert("please fill all the fields");
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>წინასწარი შეკვეთა</h1>
        </div>
        <div className={styles.infoContainer}>
          <form action="" className={styles.form}>
            <input
              type="text"
              placeholder="Name"
              className={styles.textInput}
              onChange={(event) => setNameInput(event.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className={styles.textInput}
              onChange={(event) => setEmailInput(event.target.value)}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className={styles.textInput}
              onChange={(event) => setPhoneInput(event.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              className={styles.numberInput}
              onChange={(event) => setNumInput(event.target.value)}
            />
          </form>
          <button className={styles.btn} onClick={handleOrder}>
            შეკვეთა {price * numInput}₾
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderWindow;
