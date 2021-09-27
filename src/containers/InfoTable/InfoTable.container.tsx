import { TableContainer } from 'containers/InfoTable/infoTable.style'
import { columns, paginationOptions } from 'containers/InfoTable/infoTable.utils'
import React from 'react'
import DataTable from 'react-data-table-component'
import { InfoTableProps } from 'types/infoTable'

export const InfoTable: React.FC<InfoTableProps> = ({ devicesInfo }) => {
  return (
    <TableContainer className={'info-table'}>
      <DataTable
        columns={columns}
        data={devicesInfo}
        pagination
        paginationComponentOptions={paginationOptions}
      />
    </TableContainer>
  )
}

export default InfoTable
