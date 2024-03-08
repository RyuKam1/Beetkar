import React, { useState } from "react";
import styles from "./interactiveText.module.css";

function InteractiveText() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      className={styles.nameContainer}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isHovering && (
        <h1 href="/" className={styles.name}>
          ბითკარი
        </h1>
      )}
      {!isHovering && (
        <h1 href="/" className={styles.name}>
          Beetkar
        </h1>
      )}
    </div>
  );
}

export default InteractiveText;
