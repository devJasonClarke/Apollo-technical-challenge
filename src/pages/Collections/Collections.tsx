import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Heading } from "../../components/Heading/Heading";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import styles from "./collections.module.scss";
import axios, { AxiosRequestConfig } from "axios";

interface API {
  token_address: string;
  token_id: string;
  owner_of: string;
  block_number: string;
  block_number_minted: string;
  token_hash: string;
  amount: string;
  contract_type: string;
  name: string;
  symbol: string;
  token_uri: string;
  metadata: string;
  last_token_uri_sync: string;
  last_metadata_sync: string;
}

const Collections: React.FC = () => {
  const [NFT, setNFT] = useState<API[]>([]);

  const web3ApiKey: string | undefined = process.env.REACT_APP_MORALIS;

  const options: AxiosRequestConfig = {
    method: "GET",
    url: `https://deep-index.moralis.io/api/v2/${process.env.REACT_APP_ETH_WALLET}/nft`,
    params: {
      chain: "eth",
      format: "decimal",
      token_addresses: process.env.REACT_APP_TOKEN_ADDRESSES
    },
    headers: { accept: "application/json", "X-API-Key": web3ApiKey }
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setNFT(response.data.result);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <Paragraph text="Mark McKenzie" color="alt" />
        <Heading text="MegaKongs Collections" />
      </div>

      <div className={styles.card_container}>
        {NFT.map((nft) => (
          <Card
            key={nft.token_id}
            description={nft.metadata}
            id={nft.token_id}
          />
        ))}
      </div>
    </div>
  );
};

export default Collections;
