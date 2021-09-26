import { columns } from 'containers/InfoTable/infoTable.utils'
import React from 'react'
import DataTable from 'react-data-table-component'
import { InfoTableProps } from 'types/infoTable'

export const InfoTable: React.FC<InfoTableProps> = ({ devicesInfo }) => {
  return <DataTable columns={columns} data={devicesInfo} />
}

export default InfoTable
