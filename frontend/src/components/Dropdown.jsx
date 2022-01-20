  import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import SubmitButton from "./Buttons";
import courses from "../data/courses";



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


export function MultipleSelectChip() {
  const theme = useTheme();
  const [topics, setTopics] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTopics(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div className="expertiseDropdown">
      <FormControl sx={{ m: 1, width: 300 }} >
        <InputLabel id="demo-multiple-chip-label">Edit Expertise</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={topics}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Expertise" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
          style = {{background : "#ecf0f1"}}
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
        <SubmitButton buttonName="Save" expertise={{topics}}  className="submitButton"/>
      </FormControl>

    </div>
  );
}



export function SingleSelectDropdown() {

  const theme = useTheme();
  const [topics, setTopics] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTopics(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div className="topicDropdown">

      <FormControl sx={{ m: 5, minWidth: 80, flexDirection: "row" }}>
        <InputLabel id="demo-simple-select-autowidth-label">Topic</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={topics}
          onChange={handleChange}
          autoWidth
          label="Topic"
          style={{width: "100vh", backgroundColor: "white"}}
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
        <SubmitButton buttonName="GET MENTOR"  topic={topics}/>
      </FormControl>

    </div>
  );
}

