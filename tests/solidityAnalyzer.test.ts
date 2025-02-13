import { describe, it, expect } from "bun:test";
import { analyzeGasUsage } from "../src";

describe("Solidity Analyzer", () => {
  it("should detect expensive operations in Solidity code", () => {
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
    expect(warnings).toContain("Avoid loops with dynamic length as they can increase gas costs.");
  });

  it("should recommend using .call instead of .transfer", () => {
    const solidityCode = `
      contract Test {
        function sendFunds(address payable recipient) public {
          recipient.transfer(1 ether);
        }
      }
    `;
    const warnings = analyzeGasUsage(solidityCode);
    expect(warnings).toContain("Use `.call{value: ...}()` instead of `.transfer()` for better gas efficiency.");
  });
});