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

## Step-by-Step Guide for Absolute Beginners 🏁

### Prerequisites 📋
1. **A computer** with an internet connection  
2. **A web browser** (Chrome, Firefox, etc.)  
3. **A terminal/command line** (pre-installed on your OS)

### Step 1: Install Node.js 🛠️
Node.js is required to run the application.  
1. Visit [nodejs.org](https://nodejs.org/)  
2. Download the "LTS" (Long-Term Support) version  
3. Follow the installation instructions  

To verify that Node.js is installed correctly, open the terminal and type:  
node -v
You should see something like `v18.x.x` or higher.

### Step 2: Install Git 📦
Git is required to download the code.  
- **Windows**: Download from [git-scm.com](https://git-scm.com/download/win)  
- **Mac**: Open Terminal and type `git --version`. If it's not installed, you’ll be prompted to install it.  
- **Linux**: Use your package manager (e.g., `sudo apt-get install git` on Ubuntu)

### Step 3: Download the Project 📥
1. Open the terminal  
2. Navigate to the folder where you want to save the project:
cd Documents

3. Clone the repository:
git clone https://github.com/your-username/stellar-dapp.git
cd stellar-dapp

### Step 4: Install Dependencies ⚙️
In the terminal, inside the project folder, run:  
npm install
This may take a few minutes. It installs all necessary libraries for the project.

### Step 5: Install the Freighter Wallet 💼
Freighter is the digital wallet used to interact with the Stellar blockchain.  
1. Visit [freighter.app](https://www.freighter.app/)  
2. Click "Add to Browser" for your browser  
3. Follow the instructions to create a new wallet  
4. **IMPORTANT!** Store your recovery phrase in a safe place

### Step 6: Get Test Funds 💰
To use the Stellar test network, you need free test tokens:  
1. Go to [laboratory.stellar.org](https://laboratory.stellar.org/#account-creator?network=test)  
2. Copy your public address from Freighter  
3. Paste it into the address field and create a test account

### Step 7: Start the Application 🚀
In the terminal, run:  
npm run dev

When you see a message like "localhost:3000 ready," the application is running.

### Step 8: Use the Application 🏠
1. Open your browser and go to `http://localhost:3000`  
2. Connect your Freighter wallet by clicking "Connect Wallet"  
3. Now you can:  
   - **List a property**: Click on your profile and select "List Property"  
   - **Rent a property**: Browse available properties and click "Rent"  
   - **View details**: Click on any property to see more information

---

## Common Troubleshooting 🛠️

### "Connect Wallet" Button Not Working? 🔌
- Make sure Freighter is installed and logged in  
- Check that you’re on the "Testnet" network

### Error Listing or Renting a Property? 🏠
- Ensure you have enough funds in your test account  
- Verify you are connected to the correct network in Freighter

### Application Won’t Start? 🚫
- Check that Node.js is installed correctly  
- Make sure you are inside the correct project folder  
- Try running `npm install` again

---

## Useful Resources 📚
- [Stellar Documentation](https://developers.stellar.org/docs/)  
- [Freighter Guide](https://www.freighter.app/docs/guide/)  
- [Soroban Smart Contract Tutorial](https://soroban.stellar.org/docs/getting-started/hello-world)  
- [Learn About Web3](https://web3.career/learn-web3)

## Join the StellarRent Revolution! 🚀

Ready to explore the future of peer-to-peer rentals? Dive into our comprehensive documentation on GitBook to learn more about StellarRent, get started as a user or developer, and join our growing community. Whether you're a property owner, tenant, or builder, we’ve got everything you need to make decentralized rentals a reality.

👉 **[Visit the StellarRent GitBook Now!](https://renzos-organization-1.gitbook.io/stellar-rent)**

Let’s build a fairer, more efficient rental ecosystem together—powered by Stellar! 🌟
