<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207" alt="Project logo"></a>
</p>

<h3 align="center">
Apollo Technical Challenge
</h3>

<div align="center">

  [![Status](https://img.shields.io/badge/status-active-success.svg)]() 


</div>

---

<p align="center"> Apollo Technical Challenge
    <br> 
</p>

## 📝 Table of Contents
- [About](#About  )
- [Getting Started](#get_started)
- [Prerequisites](#prerequisites)
- [Installing](#installing)
- [Deployment](#Deployment )
- [Tools](#Tools)



## 💻About    <a name = "about"></a>

Welcome to the Apollo frontend development challenge. This project involved creating an application for a collector of NFTs to browse their NFTs and read the associated metadata.

- Users will be able to connect an Ethereum wallet
- Users will be able to see the NFTs owned for the MegaKongs collection
- Users will be able to see the metadata for a selected NFT




## 🏁Getting Started <a name = "get_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

If you are new to React.Js, I recommend reading the documentation on [Getting started with create react app](https://github.com/devJasonClarke/Apollo-technical-challenge/blob/main/Getting-Started-with-Create-React-App.md) first.

Having read the documentation, getting the project up and running is as simple as running a few commands and inserting the .env variables.


### Prerequisites
In order to run this project you will have to install Node.Js on your system. I recommend installing the LTS version as it is appropriate for most users.

[Install Node.Js](https://nodejs.org/en/)

I also recommend installing the Yarn Package manager for high performance and to be in sync with this guide.

[Install Yarn](https://yarnpkg.com/)


### Installing
A step by step series of examples that tell you how to get a development env running.

Install the dependencies by running the command below

```
yarn install
```

After the dependencies have been installed, you should now add the .env variables. 
To add the .env variables create a .env file in the root of the project where the env.local is. The env.local has the names of the variables that are used in the project.

```
REACT_APP_MORALIS=''
REACT_APP_TOKEN_ADDRESSES=''
REACT_APP_ETH_WALLET=''
```
REACT_APP_MORALIS is the API key from your Moralis account. Create an account here [Moralis](https://moralis.io/)

REACT_APP_TOKEN_ADDRESSES is the MegaKongs contract provided by Apollo FE Challenge challenge docs. 

REACT_APP_ETH_WALLET is the Ethereum wallet provided by Apollo FE Challenge challenge docs. 

Once these are added the project should now be ready for local development.

To start the local server for development run:

```
yarn start
```


## 🚀Deployment  <a name = "deployment"></a>
- This application is successfully deployed on [Vercel](https://apollo-ten-taupe.vercel.app/).
- To deploy this application, first fork it on Github.
- Create an account at [Vercel](https://vercel.com/) if you do not have one already.
- After creating an account, select add new project.
- Under Import Git Repository, select continue with Github.
- Next import the project from the list of your Github projects.
- There is no need to change the build settings.
- Under the Environment Variables section add the .env variables from [Installing](#installing).
- Click deploy and your application will be live in a few seconds 🎉.


## ⛏️Tools <a name = "tools"></a>
- [React.Js](https://www.mongodb.com/) - Frontend Library
- [Rainbowkit](https://www.rainbowkit.com/) - The best way to connect a wallet 
- [Moralis](https://moralis.io/) - Bridge the development gap between Web2 and Web3.

