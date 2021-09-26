import ConnectionType from 'components/ConnectionType/ConnectionType.component'
import { Status } from 'components/Status/Status.component'
import moment from 'moment'
import React from 'react'
import { TableColumn } from 'react-data-table-component'
import { InfoTableable } from 'types/infoTable'

export const columns: TableColumn<InfoTableable>[] = [
  {
    name: 'serial_number',
    selector: (row: InfoTableable) => <div className={row.name}>{row.name}</div>,
    sortFunction: (rowA, rowB) =>
      rowA.name.toLowerCase().localeCompare(rowB.name.toLowerCase(), undefined, {
        numeric: true,
        sensitivity: 'base',
      }),
    sortable: true,
  },
  {
    name: 'mac_wifi',
    selector: (row: InfoTableable) => row.mac_wifi,
    sortFunction: (rowA, rowB) =>
      rowA.mac_wifi.toLowerCase().localeCompare(rowB.mac_wifi.toLowerCase(), undefined, {
        numeric: true,
        sensitivity: 'base',
      }),
    sortable: true,
  },
  {
    name: 'sim_id',
    selector: (row: InfoTableable) => row.sim_id,
    sortable: true,
  },
  {
    name: 'last_seen_at',
    selector: (row: InfoTableable) => {
      return moment(row.last_seen_at).format('MMMM Do YYYY, h:mm:ss a')
    },
    sortable: true,
  },
  {
    grow: 0,
    name: 'connection_type',
    selector: (row: InfoTableable) => <ConnectionType connection_type={row.connection_type} />,
    sortFunction: (rowA, rowB) => rowA.name.toLowerCase().localeCompare(rowB.name.toLowerCase()),
    sortable: true,
  },
  {
    grow: 0,
    name: 'status',
    selector: (row: InfoTableable) => <Status status={row.status} />,
    sortFunction: (rowA, rowB) =>
      rowA.status.toLowerCase().localeCompare(rowB.status.toLowerCase()),
    sortable: true,
  },
]