// This file is meant to mock a voltage variation
// In order to display a live changing ChartLine
export const mockVoltage = (): number => {
  const randomFloat = Math.floor(Math.random() * (1 - 100 + 1)) + 1
  return randomFloat < 0 ? randomFloat * -1 : randomFloat
}
