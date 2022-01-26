import React, { useContext, useEffect } from "react";
import { SelectPicker } from "rsuite";
import DropDownData from "../../data/DropdownData";
import { TagPicker } from "rsuite";
import AppContext from "../../context/AppContext";

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

const SingleDropDown = (props) => {
	const appContext = useContext(AppContext);
	const { getTopics, topics } = appContext;
	useEffect(() => {
		getTopics();
	}, []);

	return (
		<React.Fragment>
			<SelectPicker
				data={topics}
				groupBy="category"
				onSelect={(subject) => {
					props.handleSelect(subject);
				}}
				sort={(isGroup) => {
					if (isGroup) {
						return (a, b) => {
							return compare(a.groupTitle, b.groupTitle);
						};
					}

					return (a, b) => {
						return compare(a.value, b.value);
					};
				}}
				style={{ width: 500, minWidth: 15 }}
			/>
		</React.Fragment>
	);
};

export default SingleDropDown;

export function MultiselectDropDown() {
	return (
		<div>
			<TagPicker data={DropDownData} groupBy="category" style={{ width: 300 }} />
		</div>
	);
}
