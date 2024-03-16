"use client";

import React, { useState } from "react";
import styles from "./orderWindow.module.css";
import { Resend } from "resend";

function OrderWindow() {
  const price = 380; //price of the pizza in USD,

  const [numInput, setNumInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const resend = new Resend("re_WMGSNjMy_4qWkYdBdiD4BoWnm9SK2JZu6");

  function handleOrder() {
    resend.emails.send({
      from: "Beetkar <beetkar.online>",
      to: "omarashvili.giorgi07@gmail.com",
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });
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
              type="text"
              placeholder="Email"
              className={styles.textInput}
              onChange={(event) => setEmailInput(event.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number (optional)"
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
          <a href="/thanks">
            <button className={styles.btn} onClick={handleOrder}>
              შეკვეთა {price * numInput}₾
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default OrderWindow;
