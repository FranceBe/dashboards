import {
  getConnectionTypeData,
  getInfoTableData,
  getVoltageStats,
} from 'containers/GlobalDashboard/globalDashboard.utils'
import { ConnectionTypeDataable } from 'types/connectionType'
import { DashboardDeviceable } from 'types/dashboardDevice'
import { InfoTableable } from 'types/infoTable'
import { VoltageStatable } from 'types/voltageStats'

describe('GlobalDashboard Utils', () => {
  const param: DashboardDeviceable[] = [
    {
      connection_type: 'ethernet',
      last_seen_at: '2021-09-26T15:10:44.987',
      mac_wifi: 'c5:d7:14:84:f8:cf',
      serial_number: 'device_0',
      sim_id: 98962001,
      status: 'connected',
      url: 'http://url.com',
      voltage: 1234.933884,
    },
    {
      connection_type: 'wifi',
      last_seen_at: '2021-09-26T15:10:43.987',
      mac_wifi: 'c4:d7:14:84:f8:cf',
      serial_number: 'device_1',
      sim_id: 98962002,
      status: 'disconnected',
      url: 'http://url.com',
      voltage: 14.84,
    },
  ]
  describe('getInfoTableData', () => {
    it('should return InfoTableable[] type shape data when DashboardDeviceable[] type params in provided', () => {
      const result: InfoTableable[] = getInfoTableData(param)
      expect(result).toEqual([
        {
          connection_type: param[0].connection_type,
          last_seen_at: param[0].last_seen_at,
          mac_wifi: param[0].mac_wifi,
          name: param[0].serial_number,
          sim_id: param[0].sim_id,
          status: param[0].status,
        },
        {
          connection_type: param[1].connection_type,
          last_seen_at: param[1].last_seen_at,
          mac_wifi: param[1].mac_wifi,
          name: param[1].serial_number,
          sim_id: param[1].sim_id,
          status: param[1].status,
        },
      ])
    })
  })
  describe('getVoltageStats', () => {
    it('should return VoltageStatable[] type shape data when DashboardDeviceable[] type params in provided', () => {
      const result: VoltageStatable[] = getVoltageStats(param)
      expect(result).toEqual([
        {
          name: param[0].serial_number,
          voltage: param[0].voltage,
        },
        {
          name: param[1].serial_number,
          voltage: param[1].voltage,
        },
      ])
    })
  })
  describe('getConnectionTypeData', () => {
    it('should return ConnectionTypeDataable[] type shape data when DashboardDeviceable[] type params in provided', () => {
      const result: ConnectionTypeDataable[] = getConnectionTypeData(param)
      expect(result).toEqual([
        { connection_type: 'ethernet', length: 1 },
        { connection_type: 'wifi', length: 1 },
        { connection_type: 'cellular', length: 0 },
      ])
    })
  })
})
