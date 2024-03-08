"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import NavLink from "./navLink/NavLink";
import Image from "next/image";

function Navbar() {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "About",
      url: "/about",
    },
    {
      id: 3,
      title: "Services",
      url: "/myServices",
    },
    {
      id: 4,
      title: "Contact",
      url: "/contact",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <Image
            src={"/beetkarLogo.png"}
            alt="beetkari"
            fill={true}
            className={styles.img}
          ></Image>
        </div>
      </div>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.id} />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
