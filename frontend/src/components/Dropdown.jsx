  import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import CallForActionButton from "./CallForActionButton";
import courses from "../data/courses";
import Axios from 'axios';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// const courses = getDropdown();
// abhi ke lie courses ko data directory me rakha hai
// badme iis function ko uncoment kr denge

function getDropdown(){
  Axios.get("./gydn/dropdown").then((response)=>{
    console.log(response)
  });
}


export default function MultipleSelectChip() {
  const theme = useTheme();
  const [expertise, setExpertise] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setExpertise(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={expertise}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {courses.map((course) => (
            <MenuItem
              key={course.id}
              value={course.name}
            >
              {course.name}
            </MenuItem>
          ))}
        </Select>
        <CallForActionButton />
      </FormControl>

    </div>
  );
}
