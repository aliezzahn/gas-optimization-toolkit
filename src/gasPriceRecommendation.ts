import axios from "axios";

export async function getGasPriceRecommendation(): Promise<{
  low: number;
  medium: number;
  high: number;
}> {
  const response = await axios.get("https://api.etherscan.io/api?module=gastracker&action=gasoracle");
  const { result } = response.data;
  return {
    low: parseInt(result.SafeGasPrice),
    medium: parseInt(result.ProposeGasPrice),
    high: parseInt(result.FastGasPrice),
  };
}