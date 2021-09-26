import { ConnectionTypeDataable } from 'types/connectionType'
import { DashboardDeviceable } from 'types/dashboardDevice'
import { InfoTableable } from 'types/infoTable'
import { VoltageStat } from 'types/voltageStats'

export const getInfoTableData = (devices: DashboardDeviceable[]): InfoTableable[] =>
  devices.map((device: DashboardDeviceable) => ({
    connection_type: device.connection_type,
    last_seen_at: device.last_seen_at,
    mac_wifi: device.mac_wifi,
    name: device.serial_number,
    sim_id: device.sim_id,
    status: device.status,
  }))

export const getVoltageStats = (devices: DashboardDeviceable[]): VoltageStat[] =>
  devices.map((device: DashboardDeviceable) => ({
    name: device.serial_number,
    voltage: device.voltage,
  }))

export const getConnectionTypeData = (devices: DashboardDeviceable[]): ConnectionTypeDataable[] => {
  const wifiLength = devices.filter((device) => device.connection_type === 'wifi').length
  const ethernetLength = devices.filter((device) => device.connection_type === 'ethernet').length
  const cellularLength = devices.filter((device) => device.connection_type === 'cellular').length
  return [
    { connection_type: 'ethernet', length: ethernetLength },
    { connection_type: 'wifi', length: wifiLength },
    { connection_type: 'cellular', length: cellularLength },
  ]
}
