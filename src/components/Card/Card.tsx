import React, { useEffect, useState } from "react";
import icon from "../../assets/images/Icon.png";
import { HeadingSm } from "../HeadingSm/Heading";
import styles from "./Card.module.scss";
import Modal from "react-modal";
import { CardDetails } from "../CardDetails/CardDetails";

Modal.setAppElement("#root");

interface Props {
  description: string;
  id: string;
}

interface Details {
  description: string;
  external_url: string;
  image: string;
  name: string;
  attributes: (
    | {
        trait_type: string;
        value: string;
      }
    | {
        trait_type: string;
        value: null;
      }
  )[];
}

export const Card: React.FC<Props> = ({ description, id }) => {
  const [details, setDetails] = useState<Details>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    let parse = JSON.parse(description);

    let details = [
      { trait_type: "Fur" },
      { trait_type: "Background" },
      { trait_type: "Chest" },
      { trait_type: "Ear" },
      { trait_type: "Eyebrows" },
      { trait_type: "Eyes" },
      { trait_type: "Head Accessory" },
      { trait_type: "Mouth" },
      { trait_type: "Stripe" },
    ];

    const neccesaryAttributes = parse.attributes.filter((el: any) => {
      return details.some((f) => {
        return f.trait_type === el.trait_type;
      });
    });

    parse.attributes = neccesaryAttributes;
    console.log(parse);
    setDetails(parse);
  }, []);

  return (
    <div className={styles.card}>
      <img
        src={`${details?.image.replace("ipfs://", "https://ipfs.io/ipfs/")}`}
        alt="img"
        className={styles.main_card_img}
      />
      <div className={styles.card_info}>
        <HeadingSm text={`MegaKong #${id}`} />
        {/*    <p>{description}</p> */}
        <button className={styles.button} onClick={toggleModal}>
          <p>View MetaData</p>
          <img src={icon} alt="img" className={styles.main_card_img} />
        </button>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <CardDetails toggle={toggleModal} id={id} details={details} />
      </Modal>
    </div>
  );
};
