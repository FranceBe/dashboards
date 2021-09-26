import { DashboardDeviceable } from 'types/dashboardDevice'
import { StatusLineProps } from 'types/statusLine'
import { VoltageStat } from 'types/voltageStats'

export const getStatusTableData = (devices: DashboardDeviceable[]): StatusLineProps[] =>
  devices.map((device: DashboardDeviceable) => ({
    name: device.serial_number,
    status: device.status,
  }))

export const getVoltageStats = (devices: DashboardDeviceable[]): VoltageStat[] =>
  devices.map((device: DashboardDeviceable) => ({
    name: device.serial_number,
    voltage: device.voltage,
  }))
