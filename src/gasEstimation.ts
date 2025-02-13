import { ethers } from "ethers";

export async function estimateGas(
  provider: ethers.Provider, // Updated for ethers v6
  tx: ethers.TransactionRequest // Updated for ethers v6
): Promise<bigint> { // Use bigint instead of BigNumber
  return provider.estimateGas(tx);
}