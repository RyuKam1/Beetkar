"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from "./about.module.css";
import ProgressBar from "@/components/progressBar/ProgressBar";
import CountUp from "react-countup";
import Background from "@/components/background/Background";
import Image from "next/image";

function About() {
  return (
    <div className={styles.mainContainer}>
      <Background></Background>
      <div className={styles.container}>
        <div className={styles.aboutContainer}>
          <h1 className={styles.title}>ჩვენს შესახებ.</h1>

          <p className={styles.storyText}>
            Beetrkar-ის დაბადება არ იყო მხოლოდ პრობლემის ძიება. ეს ყველაფერი
            წარსულის უბრალო შესწავლით დაიწყო, მეფუტკრეობის ტრადიციით გაჟღენთილი
            მდიდარი ოჯახური მემკვიდრეობის გამოვლენით. ჩვენი ოჯახის ისტორიაზე
            დაფიქრებისას მიხვდით, რომ ჩვენი ბებია და ბაბუები ოდესღაც მეფუტკრეები
            იყვნენ, ზრუნავდნენ სკამებზე და იღებენ თაფლს. თუმცა, ეს საგვარეულო
            ხელობა არ გადმოეცა ჩვენს თაობას, რაც ეხმიანება უფრო ფართო ტენდენციას
            საზოგადოებაში. Ამავდროულად ვიცით, რომ საქართველო როგორც ღვინის ასევე
            თაფლის სამშობლოცაა, ჩვენს ქვეყანაშ აღმოჩენილია უძველესი თაფლის
            ნმუშები.
          </p>
          <br />
          <p className={styles.storyText}>
            ამ პრობლემების გათვალისწინებით და ჩვენს გარემოცვაში მიმდინარე
            მოვლენებიდან გამომდინარე გადავწყვითეთ პრობლემები გვეძია და
            გავესაუბრეთ მეფუტკრეებს, ვესაუბრეთ მიზეზებზე თუ რატომ არ იყო
            მეფუტკრე დღეს დღეისობით მყარი და შემოსავლიანი პროფესია და
            გამოვავლინედ პრობლემები. Პრობლემები რომელიც უმეტესად მოიცავდა
            დაავადებებიდ და ტკიპის აღმოჩენას და მასთან ბრძოლად. Აქედან
            გამომდინარე ჩვენ გადავწყვიტეთ ჩვენი ტექნოლოგიური ცოდნითა და ჩვენი
            გამოცდილებით შეგვექმნა სტარტაპი რომელიც ორიენტირებული იქნებოოდა ამ
            პროებლემის მოგვარებაზე. Აი ასე დაიბადა Beetkar-ის იდეაა
          </p>
        </div>
        {/* id="css"
            value="81" 62 57 74 37
            max="100" */}
        <div className={styles.skillContainer}>
          <Image
            src={"/progressImg.jpg"}
            alt="beetkari"
            fill={true}
            className={styles.img}
          ></Image>
        </div>
      </div>

      <div className={styles.infoContainerContainer}>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <h3>Email:</h3>
            <p>beetk4r@gmail.com</p>
          </div>
          <div className={styles.info}>
            <h3>Location:</h3>
            <p>Akhmeta</p>
          </div>
          <div className={styles.info}>
            <h3>Phone:</h3>
            <p>599-63-59-93</p>
          </div>
          <div className={styles.info}>
            <h3>Address:</h3>
            <p>Cholokashvili st., Akhmeta, Georgia</p>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.btn}>წინასწარი შეკვეთა</button>
        </div>
      </div>
      <div className={styles.team}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>ჩვენი გუნდი</h1>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={"/groupImg.png"}
            alt="beetkari"
            fill={true}
            className={styles.img}
          ></Image>
        </div>
        <div className={styles.membersContainer}>
          <div className={styles.members}>
            <div className={styles.member}>
              <div className={styles.memberImgContainer}>
                <Image
                  src={"/profile.png"}
                  alt="beetkari"
                  fill={true}
                  className={styles.memberImg}
                ></Image>
              </div>
              <div className={styles.nameContainer}>Giorgi Omarashvili</div>
              <div className={styles.descContainer}>mechanik</div>
            </div>

            <div className={styles.member}>
              <div className={styles.memberImgContainer}>
                <Image
                  src={"/profile.png"}
                  alt="beetkari"
                  fill={true}
                  className={styles.memberImg}
                ></Image>
              </div>
              <div className={styles.nameContainer}>Gary Kinkladze</div>
              <div className={styles.descContainer}>mechanik</div>
            </div>

            <div className={styles.member}>
              <div className={styles.memberImgContainer}>
                <Image
                  src={"/profile.png"}
                  alt="beetkari"
                  fill={true}
                  className={styles.memberImg}
                ></Image>
              </div>
              <div className={styles.nameContainer}>
                Aleqsandre Gaganashvili
              </div>
              <div className={styles.descContainer}>mechanik</div>
            </div>

            <div className={styles.member}>
              <div className={styles.memberImgContainer}>
                <Image
                  src={"/profile.png"}
                  alt="beetkari"
                  fill={true}
                  className={styles.memberImg}
                ></Image>
              </div>
              <div className={styles.nameContainer}>Nikoloz Albutashvili</div>
              <div className={styles.descContainer}>mechanik</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
