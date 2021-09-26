import { StatusLine } from 'components/StatusLine'
import { StatusTableContainer } from 'containers/StatusTable/statusTable.style'
import React from 'react'
import DataTable, { TableColumn } from 'react-data-table-component'
import { StatusLineProps } from 'types/statusLine'
import { StatusTableProps } from 'types/statusTable'

export const StatusTable: React.FC<StatusTableProps> = ({ devicesStatus }) => {
  const columns: TableColumn<StatusLineProps>[] = [
    {
      name: 'serial_number',
      selector: (row) => <StatusLine name={row.name} status={row.status} />,
      sortFunction: (rowA, rowB) =>
        rowA.name.toLowerCase().localeCompare(rowB.name.toLowerCase(), undefined, {
          numeric: true,
          sensitivity: 'base',
        }),
      sortable: true,
    },
    {
      grow: 0,
      minWidth: '110px',
      name: 'status',
      selector: () => <div />,
      sortFunction: (rowA, rowB) =>
        rowA.status.toLowerCase().localeCompare(rowB.status.toLowerCase()),
      sortable: true,
    },
  ]

  return (
    <StatusTableContainer>
      <DataTable columns={columns} data={devicesStatus} />
    </StatusTableContainer>
  )
}

export default StatusTable
