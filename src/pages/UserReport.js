import React, { useState,useEffect } from 'react';
import {  TextField, Button } from "@mui/material";
import {useLocation} from 'react-router-dom';
import axios from 'axios'; 
import TableComp from '../components/TableComp';

function UserReport() {
    const[ userData,setUserData] = useState({})
    const [assessmentNo, setAssessmentNo] = useState();
    const [userDetail,setUserDetail] = useState({})
    const {state} = useLocation();
    useEffect(() => {
      if(state) setUserData(state)
    }, [state])

    const saveHandle=()=>{
        let obj = {
            operation: `post`,
              payload:{
                Item:{
                   ...userData,
                   skill_id:Number(userData?.skill_id),
                   self_assessed:Number(assessmentNo),
                }
              }
            };
            axios.post('https://vjie85klnd.execute-api.us-west-2.amazonaws.com/user_skill_stage/user_data_api_lambda',
            JSON.stringify(obj)
            )
            .then((res)=> {
              console.log('assessment  api',res);
              setUserDetail(res?.data?.Item)

            })
            .catch(err=>console.log(err))
    }

   let data = [{
    expected_level:userDetail?.expected_level,
    self_assessed:userDetail?.self_assessed,
    skill_id: userDetail?.skill_id,
    user_id: userDetail?.user_id,
   }];

  return (
    <div>
        <h2> User Assessment </h2>
         <h3>user id : {userData?.user_id} </h3>
         <h3>Skill id : {userData?.skill_id} </h3>       
          <h3>Expected level : {userData?.expected_level} </h3>
        <form> 

            <div > 
            <TextField 
             type='number'
              onChange={(e) => setAssessmentNo(e.target.value)}
              value={assessmentNo}
              name="assessmentNo"
              placeholder="Enter Your Scope"  
            size='small'/>
            </div>
            <Button
              variant="contained"
               sx={{m:2}}
              onClick={() => saveHandle()}
            >
             Save Score
            </Button>
        </form>
        <TableComp data={data} />
    </div>
  )
}
export default UserReport;