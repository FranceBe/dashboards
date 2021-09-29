import { ConnectionTypeDataable } from 'types/connectionType'
import { DashboardDeviceable } from 'types/dashboardDevice'
import { InfoTableable } from 'types/infoTable'
import { VoltageStatable } from 'types/voltageStat'

// To display correctly InfoTable container we need to format data into InfoTableable[] shape data
export const getInfoTableData = (devices: DashboardDeviceable[]): InfoTableable[] =>
  devices.map((device: DashboardDeviceable) => ({
    connection_type: device.connection_type,
    last_seen_at: device.last_seen_at,
    mac_wifi: device.mac_wifi,
    name: device.serial_number,
    sim_id: device.sim_id,
    status: device.status,
  }))

// To display correctly VoltageStat container we need to format data into VoltageStatable[] shape data
export const getVoltageStat = (devices: DashboardDeviceable[]): VoltageStatable[] =>
  devices.map((device: DashboardDeviceable) => ({
    name: device.serial_number,
    voltage: device.voltage,
  }))

// To display correctly ConnectionType container we need to format data into ConnectionTypeDataable[] shape data
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

// To display correctly StatusStat container we need to find the number of devices matching the provided status
export const getStatusDeviceLength = (
  devices: DashboardDeviceable[],
  status: 'connected' | 'disconnected',
): number => devices.filter((device) => device.status === status).length
