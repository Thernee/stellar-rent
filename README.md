# StellarRent Documentation 📖

## Overview 🌟

**StellarRent** is a decentralized platform built on the Stellar blockchain, designed to facilitate peer-to-peer (P2P) rentals between property owners and tenants. By eliminating intermediaries such as real estate agencies or centralized platforms (e.g., Airbnb), StellarRent offers a cost-efficient, transparent, and secure rental experience.

Leveraging Stellar’s capabilities, including fast transactions (3-5 seconds), minimal fees (~$0.00001), and smart contracts powered by Soroban, StellarRent provides an innovative solution for both short- and long-term rentals.

### Key Features 🔑
- **P2P Marketplace**: Property owners list properties (houses, apartments, rooms) on a decentralized application (dApp), allowing tenants to negotiate directly.  
- **Stablecoin Payments**: Transactions use USDC on Stellar, ensuring instant and stable payments, avoiding crypto volatility.  
- **Escrow via Smart Contracts**: Payments are locked in a Soroban smart contract until predefined conditions are met (e.g., tenant confirms the property’s condition at the end of the rental period).  
- **Transparency**: All transactions are recorded on Stellar’s public ledger.  
- **Reputation System**: User ratings based on past rental history enhance trust within the platform.  
- **Low Costs**: Avoids high fees from traditional platforms (e.g., Airbnb charges up to 14.2% per booking).

### Problems Solved 🚩
- High intermediary costs (real estate agencies, rental platforms).  
- Slow or insecure payments.  
- Lack of transparency in rental agreements.  
- Exclusion of small property owners/tenants from emerging markets.


---

## Why StellarRent? 🤔

Traditional rental platforms and agencies charge high fees, impose lengthy processing times, and often lack transparency. StellarRent addresses these challenges by leveraging blockchain technology to create an open, efficient, and fair rental marketplace.

StellarRent utilizes smart contracts on the Stellar blockchain to:  
- **List properties** as an owner  
- **Rent properties** as a tenant  
- **Confirm rentals** as an owner  
- **Make secure payments** using blockchain technology

---

### BEFORE ANYTHING ELSE

> 👀 To make Biome work with auto-formatting, make sure to have `Biome` as the **default code formatter**. You can find the configuration with the command `CTRL + ,` or `CMD + ,` for MacOS users and search for the `vscode://settings/editor.defaultFormatter`. This will read the monorepo Biome configuration. Make sure to have the [Biome extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) in your IDE before doing any installation.

1. To install all dependencies, run the following command:

```bash
bun run init # bun install && bun husky:prepare
```

> Biome and pre-commit hooks should be installed by now. Ready to run!

1. To run:

```bash
# web app
cd apps/web
bun install
bun dev

# ...
```
---
```bash
# web app
cd apps/backend
bun install
bun dev

# ...
```

You can see the full list of commands in each of the `package.json` files in the `apps` and `services` directories.

👉 **[Visit the StellarRent GitBook Now!](https://stellar-rent.gitbook.io/stellar-rent)**

Let’s build a fairer, more efficient rental ecosystem together—powered by Stellar! 🌟

![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/Stellar-Rent/stellar-rent?utm_source=oss&utm_medium=github&utm_campaign=Stellar-Rent%2Fstellar-rent&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)
