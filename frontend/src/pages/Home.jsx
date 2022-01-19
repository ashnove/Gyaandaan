import React from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {SingleSelectDropdown } from "../components/Dropdown"

const bull = (
	<Box
	  component="span"
	  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
	>
	  •
	</Box>
  );
  const card = (
	<React.Fragment>
		<div>
			{/* <CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
				Word of the Day
				</Typography>
				<Typography variant="h5" component="div">
				be{bull}nev{bull}o{bull}lent
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
				adjective
				</Typography>
				<Typography variant="body2">
				well meaning and kindly.
				<br />
				{'"a benevolent smile"'}
				</Typography>
			</CardContent> */}
			<SingleSelectDropdown />
		</div>

	  {/* <CardActions>
		<Button size="small">Learn More</Button>
	  </CardActions> */}
	</React.Fragment>
  );
function Home(props) {
	
	return (
		<div style={{justifyContent: "center", marginTop: "100px"}}>

			This is Home Page.
			<Box sx={{ minWidth: 275 }}>
				<Card variant="outlined">{card}</Card>
			</Box>		
			
		</div>
	)
}

export default Home