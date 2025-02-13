# Gas Optimization Toolkit 🛠️

A toolkit to help developers optimize gas usage in Ethereum smart contracts and transactions. This package provides utilities for gas estimation, gas price recommendations, Solidity code analysis, and gas token integration.

[![Test](https://github.com/aliezzahn/gas-optimization-toolkit/actions/workflows/test.yml/badge.svg)](https://github.com/aliezzahn/gas-optimization-toolkit/actions/workflows/test.yml)
[![CI](https://github.com/aliezzahn/gas-optimization-toolkit/actions/workflows/ci.yml/badge.svg)](https://github.com/aliezzahn/gas-optimization-toolkit/actions/workflows/ci.yml)
[![Release](https://github.com/aliezzahn/gas-optimization-toolkit/actions/workflows/release.yml/badge.svg)](https://github.com/aliezzahn/gas-optimization-toolkit/actions/workflows/release.yml)

---

## **Features**

- **Gas Estimation**: Estimate gas usage for transactions.
- **Gas Price Recommendations**: Get gas price recommendations based on network congestion.
- **Solidity Code Analysis**: Analyze Solidity code for gas optimization opportunities.
- **Gas Token Integration**: Integrate with popular gas tokens (e.g., Chi Gastoken).

---

## **Installation**

### From GitHub Packages

This package is published to **GitHub Packages**. To install it:

1. **Create a `.npmrc` file**:
   In your project folder, create a file named `.npmrc` and add the following line:
   ```
   @aliezzahn:registry=https://npm.pkg.github.com
   ```

3. **Install the package**:
   Run the following command to install Web3 Utils:
   ```bash
   # Using Bun
   bun add @aliezzahn/gas-optimization-toolkit
   
   # Using npm
   npm install @aliezzahn/gas-optimization-toolkit
   
   # Using yarn
   yarn add @aliezzahn/gas-optimization-toolkit
   
   # Using pnpm
   pnpm add @aliezzahn/gas-optimization-toolkit
   ```

---

## **Usage**

### **1. Gas Estimation**

Estimate the gas required for a transaction:

```typescript
import { estimateGas } from "@aliezzahn/gas-optimization-toolkit";
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");
const tx = {
  to: "0x0000000000000000000000000000000000000000",
  value: ethers.parseEther("0.1"),
};

const gasEstimate = await estimateGas(provider, tx);
console.log(`Gas estimate: ${gasEstimate}`);
```

---

### **2. Gas Price Recommendations**

Get gas price recommendations based on network congestion:

```typescript
import { getGasPriceRecommendation } from "@aliezzahn/gas-optimization-toolkit";

const gasPrices = await getGasPriceRecommendation();
console.log(`Low: ${gasPrices.low}, Medium: ${gasPrices.medium}, High: ${gasPrices.high}`);
```

---

### **3. Solidity Code Analysis**

Analyze Solidity code for gas optimization opportunities:

```typescript
import { analyzeGasUsage } from "@aliezzahn/gas-optimization-toolkit";

const solidityCode = `
  contract Test {
    function loop() public {
      for (uint i = 0; i < 10; i++) {
        // Do something
      }
    }
  }
`;

const warnings = analyzeGasUsage(solidityCode);
warnings.forEach((warning) => console.log(warning));
```

---

### **4. Gas Token Integration (Soon)**

Mint gas tokens to reduce transaction costs:

```typescript
import { mintGasToken } from "@aliezzahn/gas-optimization-toolkit";
import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");
const signer = new ethers.Wallet("YOUR_PRIVATE_KEY", provider);

const tx = await mintGasToken(signer, ethers.parseUnits("10", 18));
console.log(`Transaction hash: ${tx.hash}`);
```

---

## **API Documentation**

### **`estimateGas(provider: ethers.Provider, tx: ethers.TransactionRequest): Promise<bigint>`**

Estimates the gas required for a transaction.

- **`provider`**: An ethers.js provider instance.
- **`tx`**: The transaction object.
- **Returns**: A `Promise` resolving to the estimated gas as a `bigint`.

---

### **`getGasPriceRecommendation(): Promise<{ low: number, medium: number, high: number }>`**

Fetches gas price recommendations based on network congestion.

- **Returns**: A `Promise` resolving to an object with `low`, `medium`, and `high` gas prices.

---

### **`analyzeGasUsage(solidityCode: string): string[]`**

Analyzes Solidity code for gas optimization opportunities.

- **`solidityCode`**: The Solidity code to analyze.
- **Returns**: An array of warning messages.

---

### **`mintGasToken(signer: ethers.Signer, amount: bigint): Promise<ethers.ContractTransactionResponse>`**

Mints gas tokens to reduce transaction costs.

- **`signer`**: An ethers.js signer instance.
- **`amount`**: The amount of gas tokens to mint.
- **Returns**: A `Promise` resolving to the transaction response.

---

## **Contributing**

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Support**

If you encounter any issues or have questions, please open an issue on the [GitHub repository](https://github.com/your-repo/gas-optimization-toolkit).

---

## **Acknowledgments**

- [Ethers.js](https://docs.ethers.org/) for Ethereum interaction.
- [Infura](https://infura.io/) for Ethereum node access.
- [Bun.js](https://bun.sh/) for fast JavaScript runtime.

---

## Author

- **aliezzahn**  
  GitHub: [@aliezzahn](https://github.com/aliezzahn)  
  Email: [aliezzahn@gmail.com](aliezzahn@gmail.com)

---
