import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "./certiCarousel.module.css";

function CertiCarousel() {
  return (
    <div className={styles.container}>
      <Carousel showThumbs={false} width={750} infiniteLoop={true}>
        <div>
          <img src="/certi1.png" />
          <p className="legend">Nasa Space-Apps Challenge</p>
        </div>
        <div>
          <img src="/certi2.png" />
          <p className="legend">Winner In 2023 Agro Bootcamp</p>
        </div>
        <div>
          <img src="/certi3.png" />
          <p className="legend">React</p>
        </div>
        <div>
          <img src="/certi4.jpg" />
          <p className="legend">2023 Tech-Bootcamp Winner</p>
        </div>
        <div>
          <img src="/certi5.jpg" />
          <p className="legend">HTML/CSS, Javascript, Python</p>
        </div>
        <div>
          <img src="/certi6.jpg" />
          <p className="legend">FrontEnd Development, Arduino, CorelDraw</p>
        </div>
        <div>
          <img src="/certi7.jpg" />
          <p className="legend">Python</p>
        </div>
      </Carousel>
    </div>
  );
}

export default CertiCarousel;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
