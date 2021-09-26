import { DashboardDeviceable } from 'types/dashboardDevice'
import { StatusLineProps } from 'types/statusLine'

export const getStatusTableData = (devices: DashboardDeviceable[]): StatusLineProps[] =>
  devices.map((device: DashboardDeviceable) => ({
    name: device.serial_number,
    status: device.status,
  }))
