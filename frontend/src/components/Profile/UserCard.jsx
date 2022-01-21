
import React from "react"
import ProfileCard from "../Profile/ProfileCard/ProfileCard";
import MultiselectDropDown from "./MultiselectDropdown";
import NewTopicForm from "./NewTopicForm";
import classes from "./Profile.css";

const formstyle={
    border: "50px solid black"
}

export default function(){
    return(
        <div className={classes.UserCard}>
            This is profile card
            <ProfileCard />
            {/* <MultiselectDropDown />
            <NewTopicForm style={formstyle}/> */}
        </div>
    );
}


