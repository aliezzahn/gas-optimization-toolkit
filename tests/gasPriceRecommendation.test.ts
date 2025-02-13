import { describe, it, expect } from "bun:test";
import { getGasPriceRecommendation } from "../src";

describe("Gas Price Recommendation", () => {
  it("should fetch gas price recommendations", async () => {
    const gasPrices = await getGasPriceRecommendation();
    expect(gasPrices).toHaveProperty("low");
    expect(gasPrices).toHaveProperty("medium");
    expect(gasPrices).toHaveProperty("high");
    expect(gasPrices.low).toBeGreaterThan(0);
    expect(gasPrices.medium).toBeGreaterThan(0);
    expect(gasPrices.high).toBeGreaterThan(0);
  });
});