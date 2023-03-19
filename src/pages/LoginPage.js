import React from "react";
import { FormControl, InputLabel, TextField,Button } from "@mui/material";
import { Box } from "@mui/system";

function LoginPage() {
  return (
    <div >
        <Box  style={{border:'1px solid lightgrey',width:'400px', borderRadius:'10px',margin:'10px auto',padding:'20px'}}>

        
      <h2> Login Page</h2>
      <form>
        <div>
          <TextField name="username" placeholder="Enter User Id" size="small" sx={{my:1,width:'100%'}} />
        </div>
        <div>
          <TextField name="password" placeholder="Enter Password" size="small" sx={{my:1,width:'100%'}} />
        </div>
        <div>
          <TextField name="skillid" placeholder="Enter Skill Id" size="small" sx={{my:1,width:'100%'}} />
        </div>
        <div>
        <Button variant="contained" sx={{width:'100%'}}>  Login </Button>
        </div>

      </form>
      </Box>
    </div>
  );
}

export default LoginPage;
