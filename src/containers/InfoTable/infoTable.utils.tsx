import ConnectionType from 'components/ConnectionType/ConnectionType.component'
import { Status } from 'components/Status/Status.component'
import React from 'react'
import { TableColumn } from 'react-data-table-component'
import { Link } from 'react-router-dom'
import { InfoTableable } from 'types/infoTable'
import { momentFormatter } from 'utils/momentFormatter'

const sortAlphaNumeric = (a: string, b: string): number =>
  a.toLowerCase().localeCompare(b.toLowerCase(), undefined, {
    numeric: true,
    sensitivity: 'base',
  })
// Set up for react-data-table component
// Define each column with data we need to show and sort
export const columns: TableColumn<InfoTableable>[] = [
  {
    grow: 1,
    name: 'serial_number',
    selector: (row: InfoTableable) => {
      const urlId = Number(row.name.replace('device_', ''))
      return (
        <Link to={`/device/${urlId}`} className={row.name}>
          {row.name}
        </Link>
      )
    },
    sortFunction: (rowA, rowB) => sortAlphaNumeric(rowA.name, rowB.name),
    sortable: true,
  },
  {
    name: 'mac_wifi',
    selector: (row: InfoTableable) => row.mac_wifi,
    sortFunction: (rowA, rowB) => sortAlphaNumeric(rowA.mac_wifi, rowB.mac_wifi),
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
      return momentFormatter(row.last_seen_at)
    },
    sortable: true,
  },
  {
    grow: 0.5,
    name: 'connection_type',
    selector: (row: InfoTableable) => <ConnectionType connection_type={row.connection_type} />,
    sortFunction: (rowA, rowB) => sortAlphaNumeric(rowA.connection_type, rowB.connection_type),
    sortable: true,
  },
  {
    grow: 0,
    name: 'status',
    selector: (row: InfoTableable) => <Status status={row.status} />,
    sortFunction: (rowA, rowB) => sortAlphaNumeric(rowA.status, rowB.status),
    sortable: true,
  },
]

export const paginationOptions = {
  rowsPerPageText: '',
}
