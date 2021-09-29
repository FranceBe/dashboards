export type VoltageChartable = {
  time: string
  voltage: number
}

export type LiveVoltageProps = {
  deviceId: number
  initialVoltage: VoltageChartable
}
