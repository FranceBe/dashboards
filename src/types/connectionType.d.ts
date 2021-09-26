export type ConnectionTypeProps = {
  connection_type: 'ethernet' | 'wifi' | 'cellular'
}

export type ConnectionTypeDataable = {
  connection_type: 'ethernet' | 'wifi' | 'cellular'
  length: number
}
export type ConnectionTypeDataProps = {
  devicesConnectionType: ConnectionTypeDataable[]
}
