import React from "react";
import styles from "./MainLayout.module.scss";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className={styles.topBorder}></div>
      <main>{children}</main>
    </div>
  );
};
