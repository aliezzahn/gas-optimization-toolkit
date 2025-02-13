export function analyzeGasUsage(solidityCode: string): string[] {
  const warnings: string[] = [];

  // Example: Check for expensive operations
  if (solidityCode.includes("for (")) {
    warnings.push("Avoid loops with dynamic length as they can increase gas costs.");
  }

  if (solidityCode.includes(".transfer(")) {
    warnings.push("Use `.call{value: ...}()` instead of `.transfer()` for better gas efficiency.");
  }

  return warnings;
}