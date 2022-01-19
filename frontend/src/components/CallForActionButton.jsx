import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const buttonStyles={
  marginTop:"10px",
  width:"auto",
  height:"50px"
}

export default function CallForActionButton() {

    function handleClick() {

    // Send data to the backend via POST
    // fetch('#', {  // Enter your IP address here
    //
    //   method: 'POST',
    //   mode: 'cors',
    //   body: JSON.stringify(jsonData) // body data type must match "Content-Type" header
    //
  // });

  // nya request ke lie data yahase post hoga

    }

  return (
    <Button variant="contained" color="success" style={buttonStyles}  >
        Get the mentor
    </Button>

  );
}
