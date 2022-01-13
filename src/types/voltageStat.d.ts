export type VoltageStatable = {
  name: string
  voltage: number
}

export type VoltageStatProps = {
  devicesVoltage: VoltageStatable[]
}
