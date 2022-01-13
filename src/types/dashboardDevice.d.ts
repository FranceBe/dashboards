export type DashboardDeviceable = {
  connection_type: 'ethernet' | 'wifi' | 'cellular'
  last_seen_at: string
  mac_wifi: string
  serial_number: string
  sim_id: number
  status: 'disconnected' | 'connected'
  url: string
  voltage: number
}
