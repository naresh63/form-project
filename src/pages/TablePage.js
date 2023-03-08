import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

function TablePage() {

    const data= [
        {
            capability: 'value1',
            subcapability:'value2',
            service:'value3',
            expected_level: 100,
            self_assessment: 0,
        },
        {
            capability: 'value4',
            subcapability:'value5',
            service:'value6',
            expected_level: 200,
            self_assessment: 0,
        },
        {
            capability: 'value7',
            subcapability:'value8',
            service:'value9',
            expected_level: 100,
            self_assessment: 0,
        },
        {
            capability: 'value1',
            subcapability:'value2',
            service:'value3',
            expected_level: 100,
            self_assessment: 0,
        },
    ]

    const columns = useMemo(
        () => [
          {
            accessorKey: 'capability', //simple recommended way to define a column
            header: 'Capability',
            muiTableHeadCellProps: { sx: { color: 'white' , background:'green'} }, //optional custom props
            Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
          },
          {
            accessorKey: 'subcapability', //simple recommended way to define a column
            header: 'SubCapability',
            muiTableHeadCellProps: { sx: { color: 'white' , background:'green'} }, //optional custom props
            Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
          },
          {
            accessorKey: 'service', //simple recommended way to define a column
            header: 'Service',
            muiTableHeadCellProps: { sx: { color: 'white' , background:'green'} }, //optional custom props
            Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
          },
          {
            accessorKey: 'expected_level', //simple recommended way to define a column
            header: 'Expected Level',
            muiTableHeadCellProps: { sx: { color: 'white' , background:'green'} }, //optional custom props
            Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
          },
          {
            accessorKey: 'self_assessment', //simple recommended way to define a column
            header: 'Self Assessment',
            muiTableHeadCellProps: { sx: { color: 'white' , background:'green'} }, //optional custom props
            Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
          },
        ],
        [],
      );

  return (
    <div>
   <MaterialReactTable columns={columns} data={data} /> 




    </div>
  )
}

export default TablePage