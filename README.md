# 🐉 EtherBeast - Web3 Gacha Game (React Frontend)

![EtherBeast Banner](https://via.placeholder.com/800x200/1a1a2e/ffffff?text=EtherBeast+Web3+Gacha) <!-- Replace with actual banner -->

A decentralized gacha game where players mint, collect, and battle unique **EtherBeast NFTs** on Ethereum. Built with React, Wagmi, Viem, and AppKit for seamless wallet integration.

🔗 **Live Demo**: [Coming Soon]  
📜 **Smart Contracts**: [`etherbeast-gatcha-protocol`](https://github.com/yabestheodorus/etherbeast-gatcha-protocol)

---

## ✨ Features

- **Mint EtherBeasts**: Purchase randomized NFTs using ERC20 tokens
- **Verifiable Randomness**: Powered by **Chainlink VRF** for fair drops
- **Wallet Agnostic**: Connect via MetaMask, WalletConnect, Coinbase Wallet & more
- **Real-time Status**: Transaction lifecycle tracking (signing → confirming → success)
- **NFT Gallery**: View owned beasts with metadata and traits

---

## 🛠 Tech Stack

| Layer         | Technologies                                       |
| ------------- | -------------------------------------------------- |
| **Frontend**  | React 18, Javascript, Vite, Tailwind CSS           |
| **Web3**      | Wagmi v2, Viem, AppKit (WalletConnect)             |
| **Contracts** | Solidity, Foundry, ERC721Enumerable, Chainlink VRF |
|               | Chainlink Price Feeds, ERC20                       |
| **Tooling**   | ESLint, Prettier, Husky, GitHub Actions            |

---

## 🚀 Quick Start

### Prerequisites

- Node.js ≥ 18
- Wallet with testnet ETH (e.g., [Sepolia Faucet](https://sepoliafaucet.com/))
- [Foundry](https://book.getfoundry.sh/getting-started/installation) (for local testing)

### Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/yabestheodorus/etherbeast-web3-reactjs.git
   cd etherbeast-web3-reactjs
   ```
