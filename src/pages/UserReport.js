import React,{useState,useEffect} from 'react';
import {getData} from '../utils/localStorage';
import {  TextField, Button } from "@mui/material";
import {useLocation} from 'react-router-dom';
import axios from 'axios'; 

function UserReport() {
    // console.log(getData('userid'))
    const[ userData,setUserData] = useState({})
    const [assessmentNo, setAssessmentNo] = useState();
    const {state} = useLocation();
    console.log('state',state)
    console.log('userData',userData)

    useEffect(() => {
      if(state) setUserData(state)
     
 
    }, [state])

    const saveHandle=()=>{
        let obj = {
            operation: `post`,
              payload:{
                Item:{
                   ...userData,
                   self_assessed:assessmentNo,
                }
              }
            };
            console.log('//obj',obj)
        
            axios.post('https://vjie85klnd.execute-api.us-west-2.amazonaws.com/user_skill_stage/user_data_api_lambda',
            JSON.stringify(obj)
            )
            .then((res)=> {
              console.log('assessment  api',res);

            })
            .catch(err=>console.log(err))
    }
    
    

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




    </div>
  )
}

export default UserReport