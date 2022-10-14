import React from "react";
import styles from "./DashboardLayout.module.scss";

interface Props {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className={styles.topBorder}></div>
      <main className={styles.background}>{children}</main>
    </div>
  );
};
