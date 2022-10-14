import React from "react";
// Routing
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Rainbow
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

//Global styles
import "./index.scss";

//Layouts
import { MainLayout } from "./layouts/Main/MainLayout";

//Pages
import Collections from "./pages/Collections/Collections";
import Loggin from "./pages/Loggin/Loggin";

import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Loggin />
      </MainLayout>
    ),
  },
  {
    path: "/collections",
    element: (
      <MainLayout>
        <Collections />
      </MainLayout>
    ),
  },
]);

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  // @ts-expect-error
  [alchemyProvider({ alchemyId: "process.env.ALCHEMY_ID" }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

let root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains}>
      <RouterProvider router={router} />{" "}
    </RainbowKitProvider>
  </WagmiConfig>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
