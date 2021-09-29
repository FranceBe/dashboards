// Display a sortable table using the module React-data-table
// To show information about each device
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
        defaultSortFieldId={1}
      />
    </TableContainer>
  )
}

export default InfoTable
