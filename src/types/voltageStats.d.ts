export type VoltageStat = {
  name: string
  voltage: number
}

export type VoltageStatsProps = {
  devicesVoltage: VoltageStat[]
}
