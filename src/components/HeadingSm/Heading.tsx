import React from "react";
import styles from "./HeadingSm.module.scss";

interface Props {
  text: string;
}

export const HeadingSm: React.FC<Props> = ({ text }) => {
  return <h2 className={styles.heading}>{text}</h2>;
};
