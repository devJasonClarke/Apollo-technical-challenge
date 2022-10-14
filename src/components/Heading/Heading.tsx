import React from "react";
import styles from "./Heading.module.scss";

interface Props {
  text: string;
}

export const Heading: React.FC<Props> = ({ text }) => {
  return <h1 className={styles.heading}>{text}</h1>;
};
