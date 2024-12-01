"use server";

import React from "react";
import styles from "./page.module.css";
import { Resend } from "resend";

const page = async ({ params, searchParams }) => {
  const apiKey = "re_S4yxyywk_B1YS5ufQQpLLdDMW8rgEarMP";
  const resend = new Resend(apiKey);

  console.log(searchParams);

  try {
    const response = await resend.emails.send({
      from: "Beetkar <beetkar@beetkar.online>",
      to: "omarashvili.giorgi07@gmail.com",
      subject: "New Order!",
      name: "Beetkar",
      html: `<h1>New Order!</h1><p>Name: ${searchParams.name} <br/> Email: ${searchParams.email} <br/> Phone: ${searchParams.phone} <br/> Amount: ${searchParams.amount} <br/></p>`,
    });

    console.log("Email sent successfully:", response);
    console.log(
      searchParams.name,
      searchParams.email,
      searchParams.phone,
      searchParams.amount
    );
  } catch (error) {
    console.error("Error sending email:", error);
  }

  try {
    const response = await resend.emails.send({
      from: "Beetkar <beetkar@beetkar.online>",
      to: "omarashvili.giorgi07@gmail.com",
      subject: "New Order!",
      name: "Beetkar",
      html: `<h1>New Order!</h1><p>Name: ${searchParams.name} <br/> Email: ${searchParams.email} <br/> Phone: ${searchParams.phone} <br/> Amount: ${searchParams.amount} <br/></p>`,
    });

    console.log("Email sent successfully:", response);
    console.log(
      searchParams.name,
      searchParams.email,
      searchParams.phone,
      searchParams.amount
    );
  } catch (error) {
    console.error("Error sending email:", error);
  }

  try {
    const response = await resend.emails.send({
      from: "Beetkar <beetkar@beetkar.online>",
      to: `${searchParams.email}`,
      subject: "New Order!",
      name: "Message From Beetkar",
      html: `<h1>Thank You ${searchParams.name} For Your Request!</h1><p>Hello ${searchParams.name}. We have received your request and we will get in contact with you as soon as possible. <br/> <br/>We appriciate that you are interested in our business idea.<br/> <br/>Sincerely <br/> <br/>Beetkar Team.</p>`,
    });

    console.log("Email sent successfully:", response);
    console.log(
      searchParams.name,
      searchParams.email,
      searchParams.phone,
      searchParams.amount
    );
  } catch (error) {
    console.error("Error sending email:", error);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        მადლობას გიხდით ჩვენთან თანამშრომლობისთვის! {"<3"}
      </h1>
    </div>
  );
};

export default page;
