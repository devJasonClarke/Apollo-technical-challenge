import React from "react";
import img from "../../assets/images/card.png";
import icon from "../../assets/images/Xicon.png";
import { HeadingSm } from "../HeadingSm/Heading";
import styles from "./CardDetails.module.scss";

interface Props {
  toggle: (param: any) => void;
  id: string;
  details: any;
}

export const CardDetails: React.FC<Props> = ({ toggle, id, details }) => {


  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <HeadingSm text={`MegaKong #${id}`} />
        <span className={styles.close_icon_container} onClick={toggle}>
          <img src={icon} alt="img" className={styles.close_icon} />
        </span>
      </div>
      <img
        src={`${details?.image.replace("ipfs://", "https://ipfs.io/ipfs/")}`}
        alt="img"
        className={styles.main_card_img}
      />
      <div className={styles.card_info}>
        {details.attributes.map((detail: any, index: any) => (
          <button className={styles.button} key={`${detail.value} ${index}`}>
            <p className={styles.title}>{detail.trait_type}</p>
            <p className={styles.info}>{detail.value}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
