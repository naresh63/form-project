import React, { useMemo,useState,useEffect } from 'react';
import MaterialReactTable from 'material-react-table';
import axios from 'axios';

function TablePage() {
    const [role, setRole] = useState('100');
    const [datalist,setDatalist] = useState([]);

    let payload = {
      role_id:100,
  };

    useEffect(()=>{
     axios({
      method: 'post',
      url:'https://4h6l2eo40d.execute-api.us-west-2.amazonaws.com/prod/roleid' ,
      headers: {
        // mode:'cors',
        "Content-Type":'application/json'
      }, 
      data: payload,
    })
       .then((result)=>{
        console.log(result)
     })
     .catch(err=>console.log(err))

    },[]);


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
        // {
        //     capability: 'value7',
        //     subcapability:'value8',
        //     service:'value9',
        //     expected_level: 100,
        //     self_assessment: 0,
        // },
        // {
        //     capability: 'value1',
        //     subcapability:'value2',
        //     service:'value3',
        //     expected_level: 100,
        //     self_assessment: 0,
        // },
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
      <div>
           <select  style={{width:'100px'}}>
               <option value='100'> 100</option>
               <option value='200'> 200</option>
           </select>
      </div>
   <MaterialReactTable columns={columns} data={data} /> 




    </div>
  )
}

export default TablePage