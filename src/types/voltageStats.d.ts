export type VoltageStatable = {
  name: string
  voltage: number
}

export type VoltageStatsProps = {
  devicesVoltage: VoltageStatable[]
}
