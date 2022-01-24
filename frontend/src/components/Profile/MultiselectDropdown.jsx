import React from 'react';
import DropDownData from '../../data/DropdownData'
import { TagPicker } from 'rsuite';


export default function MultiselectDropDown (){
  return (
  <div style={{textAlign:"center"}}>
    <TagPicker data={DropDownData} groupBy="category" style={{ width: 300 }} />
  </div>
);
}

