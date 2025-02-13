import { describe, it, expect } from "bun:test";
import { estimateGas } from "../src/gasEstimation";
import { ethers } from "ethers";

describe("Gas Estimation", () => {
  it("should estimate gas for a simple transaction", async () => {
    // Use Infura as the provider
    const provider = new ethers.JsonRpcProvider(
      `https://mainnet.infura.io/v3/${Bun.env.INFURA_PROJECT_ID}` // Replace with your Infura project ID
    );

    const tx = {
      to: "0x0000000000000000000000000000000000000000", // Send to the zero address
      value: ethers.parseEther("0.1"), // Send 0.1 ETH
    };

    const gasEstimate = await estimateGas(provider, tx);
    expect(gasEstimate > 0n).toBe(true); // Ensure the gas estimate is greater than 0
  });
});