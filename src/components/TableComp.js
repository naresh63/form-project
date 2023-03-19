import React, { useMemo,useState,useEffect } from 'react';
import MaterialReactTable from 'material-react-table';

function TableComp(props) {
    const columns = useMemo(  
        () => [

          {
            accessorKey: 'expected_level', //simple recommended way to define a column
            header: 'Expected Level',
            muiTableHeadCellProps: { sx: { color: 'white' , background:'green'} }, //optional custom props
            Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
          },
          {
            accessorKey: 'self_assessed', //simple recommended way to define a column
            header: 'Self Assessed',
            muiTableHeadCellProps: { sx: { color: 'white' , background:'green'} }, //optional custom props
            Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
          },
          {
            accessorKey: 'skill_id', //simple recommended way to define a column
            header: 'Skill Id',
            muiTableHeadCellProps: { sx: { color: 'white' , background:'green'} }, //optional custom props
            Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
          },
          {
            accessorKey: 'user_id', //simple recommended way to define a column
            header: 'User Id',
            muiTableHeadCellProps: { sx: { color: 'white' , background:'green'} }, //optional custom props
            Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
          },
        ],
        [],
      );
  return (
    <div>
      <MaterialReactTable columns={columns} data={props.data} />
    </div>
  )
}

export default TableComp