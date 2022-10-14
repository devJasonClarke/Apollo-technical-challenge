import React from "react";
import styles from "./LoginLayout.module.scss";

interface Props {
  children: React.ReactNode;
}

export const LoginLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className={styles.topBorder}></div>
      <main>{children}</main>
    </div>
  );
};
