export type InfoTableable = {
  name: string
  status: 'disconnected' | 'connected'
  connection_type: 'ethernet' | 'wifi' | 'cellular'
  last_seen_at: string
  mac_wifi: string
  sim_id: number
}

export type InfoTableProps = {
  devicesInfo: InfoTable[]
}
