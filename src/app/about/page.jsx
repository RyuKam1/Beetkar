"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from "./about.module.css";
import ProgressBar from "@/components/progressBar/ProgressBar";
import CountUp from "react-countup";
import Background from "@/components/background/Background";
import Image from "next/image";
import OrderWindow from "@/components/order/OrderWindow";

function About() {
  const [showMe, setShowMe] = useState(false);
  function toggle() {
    setShowMe(!showMe);
    console.log(showMe);
  }
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
          <button className={styles.btn} onClick={toggle}>
            წინასწარი შეკვეთა
          </button>
        </div>
        {showMe ? <OrderWindow /> : null}
      </div>
      <div className={styles.beetkariContainer}>
        <div className={styles.beetkari}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Beetkari</h1>
          </div>
        </div>
        <div className={styles.beetkariPreviewContainer}>
          <video width="1280" height="700" autoPlay loop muted>
            <source src="/beetkari360.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={styles.beetkarInfoContainer}>
          <div className={styles.irInfoContainer}>
            <div className={styles.irTitleContainer}>
              <h1 className={styles.irTitle}>IR Technology</h1>
              <div className={styles.irDescContainer}>
                <p className={styles.irDesc}>
                  Beetkar uses IR Technology <br />
                  to detect varroa mites
                </p>
              </div>
            </div>
            <div className={styles.beetkariImgContainer}>
              <Image
                src={"/irBee.jpg"}
                alt="BeeIRFootage"
                fill={true}
                className={styles.img}
              ></Image>
            </div>
          </div>

          <div className={styles.counterInfoContainer}>
            <div className={styles.counterTitleContainer}>
              <h1 className={styles.counterTitle}>Bee Counter</h1>
              <div className={styles.counterDescContainer}>
                <p className={styles.counterDesc}>
                  Beetkar uses AI Technology <br />
                  to get estimated number of amount of <br />
                  bees in the hive
                </p>
              </div>
            </div>
            <div className={styles.beetkariImgContainer}>
              <Image
                src={"/irBee.jpg"}
                alt="BeeIRFootage"
                fill={true}
                className={styles.img}
              ></Image>
            </div>
          </div>

          <div className={styles.sensorInfoContainer}>
            <div className={styles.sensorTitleContainer}>
              <h1 className={styles.sensorTitle}>
                High-Tech <br />
                Sensors
              </h1>
              <div className={styles.sensorDescContainer}>
                <p className={styles.sensorDesc}>
                  Beetkar uses various <br />
                  high-tech sensors <br />
                  to get information about <br />
                  temperature and humidity <br />
                  in the hive
                </p>
              </div>
            </div>
            <div className={styles.beetkariImgContainer}>
              <Image
                src={"/irBee.jpg"}
                alt="BeeIRFootage"
                fill={true}
                className={styles.img}
              ></Image>
            </div>
          </div>

          <div className={styles.heaterInfoContainer}>
            <div className={styles.heaterTitleContainer}>
              <h1 className={styles.heaterTitle}>Temperature Control</h1>
              <div className={styles.heaterDescContainer}>
                <p className={styles.heaterDesc}>
                  Beetkar can make sure that <br />
                  temperature is kept safe <br />
                  for bees in the hive <br />
                </p>
              </div>
            </div>
            <div className={styles.beetkariImgContainer}>
              <Image
                src={"/irBee.jpg"}
                alt="BeeIRFootage"
                fill={true}
                className={styles.img}
              ></Image>
            </div>
          </div>
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
                  src={"/giorgi.jpg"}
                  alt="beetkari"
                  fill={true}
                  className={styles.memberImg}
                ></Image>
              </div>
              <div className={styles.nameContainer}>
                <h3>Giorgi Omarashvili</h3>
              </div>
              <div className={styles.descContainer}>
                <p>mechanik</p>
              </div>
            </div>

            <div className={styles.member}>
              <div className={styles.memberImgContainer}>
                <Image
                  src={"/gary.jpg"}
                  alt="beetkari"
                  fill={true}
                  className={styles.memberImg}
                ></Image>
              </div>
              <div className={styles.nameContainer}>
                <h3>Gary Kinkladze</h3>
              </div>
              <div className={styles.descContainer}>
                <p>mechanik</p>
              </div>
            </div>

            <div className={styles.member}>
              <div className={styles.memberImgContainer}>
                <Image
                  src={"/aleqsandre.jpg"}
                  alt="beetkari"
                  fill={true}
                  className={styles.memberImg}
                ></Image>
              </div>
              <div className={styles.nameContainer}>
                <h3>Aleksandre Gaganashvili</h3>
              </div>
              <div className={styles.descContainer}>
                <p>mechanik</p>
              </div>
            </div>

            <div className={styles.member}>
              <div className={styles.memberImgContainer}>
                <Image
                  src={"/albuta.jpg"}
                  alt="beetkari"
                  fill={true}
                  className={styles.memberImg}
                ></Image>
              </div>
              <div className={styles.nameContainer}>
                <h3>Nikoloz Albutashvili</h3>
              </div>
              <div className={styles.descContainer}>
                <p>mechanik</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
