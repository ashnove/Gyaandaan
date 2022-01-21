import React from 'react';
import { SelectPicker } from 'rsuite';
import DropDownData from '../../data/DropdownData'
import { TagPicker } from 'rsuite';

function compare(a, b) {
  let nameA = a.toUpperCase();
  let nameB = b.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}

const SingleDropDown = () => {
    return (
      <React.Fragment>
          <SelectPicker
            data={DropDownData}
            groupBy="role"
            sort={isGroup => {
              if (isGroup) {
                return (a, b) => {
                  return compare(a.groupTitle, b.groupTitle);
                };
              }

              return (a, b) => {
                return compare(a.value, b.value);
              };
            }}
            style={{ width: 224 }}
          />
      </React.Fragment>
    );
  }

export default SingleDropDown;



export function MultiselectDropDown (){
  return (
  <div>
    <TagPicker data={DropDownData} groupBy="role" style={{ width: 300 }} />
  </div>
);
}

