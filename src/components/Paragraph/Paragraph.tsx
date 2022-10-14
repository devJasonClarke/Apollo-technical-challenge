import React from "react";
import styles from "./Paragraph.module.scss";

interface Props {
  text: string;
  color: string;
}

export const Paragraph: React.FC<Props> = ({ text, color }) => {
  return (
    <p
      className={
        color === "alt" ? `${styles.paragraph} ${styles.alt}` : styles.paragraph
      }
    >
      {text}
    </p>
  );
};
