import React, { useMemo,useState,useEffect } from 'react';
import MaterialReactTable from 'material-react-table';
import axios from 'axios';
import {Select, MenuItem,FormControl, InputLabel }  from '@mui/material';

function TablePage() {
  const [datalist, setDatalist] = useState([]);
  const [roleSelect, setRoleSlect] = useState(100)
       // Naresh ye following payloads ke sath try karna
 //   let payload = {
 //     role_id:100
//  };

 //   let payload = {
 //     role_id:200
 // };
    let payload = {
      // role_id:100,
      role_id: roleSelect,
      // skill_id:100
  };
    useEffect(()=>{
     axios({
      method: 'post',
      url:'https://4h6l2eo40d.execute-api.us-west-2.amazonaws.com/roleid_stage/roleid' ,
      //url:'https://4h6l2eo40d.execute-api.us-west-2.amazonaws.com/prod/roleid' ,
//        url:'https://2u3jivvc14.execute-api.us-east-1.amazonaws.com/v1/hello',
      //url:'https://pzlt68tg6d.execute-api.us-west-2.amazonaws.com/prod/example',
      headers: {
        // mode:'cors',
        "Content-Type":'application/json'
      },
      data: payload,
    })
       .then((result)=>{
        console.log(result)
        console.log('data arr;',result.data.body)
        setDatalist(result?.data?.body)
     })
     .catch(err=>console.log(err))

    },[roleSelect]);

     const data1 = datalist?.map((el,ind)=>({
      capability:el.capability,
      sub_capability: el.sub_capability,
      related_service: el.related_service,
      expected_level: el.expected_level,
      skill_id: el.skill_id,
      
     }))

    // const data= [
    //     {
    //         capability: 'value1',
    //         subcapability:'value2',
    //         service:'value3',
    //         expected_level: 100,
    //         self_assessment: 0,
    //     },
    //     {
    //         capability: 'value4',
    //         subcapability:'value5',
    //         service:'value6',
    //         expected_level: 200,
    //         self_assessment: 0,
    //     },
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
    // ]

    const columns = useMemo(  
        () => [
          {
            accessorKey: 'capability', //simple recommended way to define a column
            header: 'Capability',
            muiTableHeadCellProps: { sx: { color: 'white' , background:'green'} }, //optional custom props
            Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
          },
          {
            accessorKey: 'sub_capability', //simple recommended way to define a column
            header: 'SubCapability',
            muiTableHeadCellProps: { sx: { color: 'white' , background:'green'} }, //optional custom props
            Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
          },
          {
            accessorKey: 'related_service', //simple recommended way to define a column
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
            accessorKey: 'skill_id', //simple recommended way to define a column
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
      <FormControl>
      <InputLabel id="demo-multiple-checkbox-label">Select Roll id</InputLabel>
      <Select sx={{width:300}} 
        onChange={(e)=>setRoleSlect(e.target.value)} 
        placeholder="Roll"
        size="small"
        >
        <MenuItem value={100}>100</MenuItem>
          <MenuItem value={200}>200</MenuItem>
        </Select>

      </FormControl>
      </div>
   <MaterialReactTable columns={columns} data={data1} /> 




    </div>
  )
}

export default TablePage
