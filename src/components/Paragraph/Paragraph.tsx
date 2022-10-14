import React from "react";
import styles from "./Paragraph.module.scss";

interface Props {
  text: string;
  color: string;
}

export const Paragraph: React.FC<Props> = ({ text, color }) => {
  return (
    <h1
      className={
        color === "alt" ? `${styles.paragraph} ${styles.alt}` : styles.paragraph
      }
    >
      {text}
    </h1>
  );
};
