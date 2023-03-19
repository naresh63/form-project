import React, { useState } from "react";
import { FormControl, InputLabel, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from 'axios'; 
import {useNavigate} from 'react-router-dom';
import {storeData} from '../utils/localStorage';

function LoginPage() {
  const [username, setUsername] = useState("");
  const [skillId, setSkillID] = useState();

  const navigate = useNavigate();

  const loginHandle = (e) => {
    // e.preventDefault();
    let obj = {
    operation: `query`,
      payload:{
        user_id: username,
      }
    };
    console.log('//obj',obj)

    axios.post('https://vjie85klnd.execute-api.us-west-2.amazonaws.com/user_skill_stage/user_data_api_lambda',
    JSON.stringify(obj)
    )
    .then((res)=> {
      console.log('login api',res);
      storeData('userid', username);
      navigate('/userreport',{state:res.data[0]});
    })
    .catch(err=>console.log(err))

  };
  return (
    <div>
      <Box
        style={{
          border: "1px solid lightgrey",
          width: "400px",
          borderRadius: "10px",
          margin: "10px auto",
          padding: "20px",
        }}
      >
        <h2> Login Page</h2>
        <form>
          <div>
            <TextField
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              name="username"
              placeholder="Enter User Id"
              size="small"
              sx={{ my: 1, width: "100%" }}
            />
          </div>
          {/* <div>
          <TextField name="password" placeholder="Enter Password" size="small" sx={{my:1,width:'100%'}} />
        </div> */}
          {/* <div>
            <TextField
            type='number'
              onChange={(e) => setSkillID(e.target.value)}
              value={skillId}
              name="skillid"
              placeholder="Enter Skill Id"
              size="small"
              sx={{ my: 1, width: "100%" }}
            />
          </div> */}
          <div>
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              onClick={() => loginHandle()}
            >
              {" "}
              Login{" "}
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
}

export default LoginPage;
