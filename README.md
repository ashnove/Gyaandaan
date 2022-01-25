# CRED_AV


1. Register =>  

http://localhost:8080/addVolunteer  
{
	"volunteerUsername": "aashish999",
    "volunteerFirstname": "Aashish",
    "volunteerEmail": "ashish@gmail.com",
    "volunteerLastname": "Illa",
    "volunteerContact": 1234567892,
    "volunteerIsAvailable": true
}
(route, input parameters, post request).

(same for student.)



2. Profile.
=>
Volunteer:
[setExpertise], (Data - name, email, password, passward-change),
Student:
(Data-  name, email, password, passward-change)
http://localhost:8080/saveVolunteerPref
{
	"volunteerUsername" : "code_OR",
	"topics" : [
		{
			"topicName" : "DSA"
		},
		{
			"topicName" : "Micro Economics"
		},
		{
			"topicName" : "Control Systems"
		}
	]
}



3. Home:
bdasa dialog box.
Carton type image
Topic select for session, Get the mentor button.

(get topics, post for the session)


Secondary:
Trending topics.
Current available mentors.


4. Request accepted -> "./session"
Chatroom =>    #############
agar integret ho jata hai to link yaha aajaega.
warna meet.new. :)


5. Rejected => "nhi mila bolke popup"

material ui popup for both things.


6. Chatroom.
Messaging

# FILE DIRECTORY TREE

frontend/
┣ public/
┃ ┣ ProfileCard/
┃ ┃ ┣ bg-pattern-bottom.svg
┃ ┃ ┣ bg-pattern-card.svg
┃ ┃ ┣ bg-pattern-top.svg
┃ ┃ ┣ coolImage.jpeg
┃ ┃ ┣ favicon-32x32.png
┃ ┃ ┗ image-victor.jpg
┃ ┣ always-blue.png
┃ ┣ always-grey.png
┃ ┣ index.html
┃ ┗ styles.css
┣ src/
┃ ┣ components/
┃ ┃ ┣ blogr/
┃ ┃ ┃ ┣ images/
┃ ┃ ┃ ┃ ┣ bg-pattern-intro-blue.svg
┃ ┃ ┃ ┃ ┣ bg-pattern-intro.svg
┃ ┃ ┃ ┃ ┗ concrete_wall.png
┃ ┃ ┃ ┣ blogr.jsx
┃ ┃ ┃ ┗ blogr.module.css
┃ ┃ ┣ Dropdown/
┃ ┃ ┃ ┣ Dropdown.css
┃ ┃ ┃ ┗ SingleDropDown.jsx
┃ ┃ ┣ Profile/
┃ ┃ ┃ ┣ ProfileCard/
┃ ┃ ┃ ┃ ┣ images/
┃ ┃ ┃ ┃ ┃ ┗ random-grey-variations.png
┃ ┃ ┃ ┃ ┣ ProfileCard.jsx
┃ ┃ ┃ ┃ ┗ ProfileCard.module.css
┃ ┃ ┃ ┣ MultiselectDropdown.jsx
┃ ┃ ┃ ┣ NewTopicForm.jsx
┃ ┃ ┃ ┣ Profile.css
┃ ┃ ┃ ┣ UserCard.jsx
┃ ┃ ┃ ┗ UserEdit.jsx
┃ ┃ ┣ SessionPopContent/
┃ ┃ ┃ ┣ MeetInfo.jsx
┃ ┃ ┃ ┣ StudentInfo.jsx
┃ ┃ ┃ ┗ VolunInfo.jsx
┃ ┃ ┣ SessionPopUp/
┃ ┃ ┃ ┗ SessionPopUp.jsx
┃ ┃ ┣ Tables/
┃ ┃ ┃ ┣ MentorTable.css
┃ ┃ ┃ ┣ MentorTable.jsx
┃ ┃ ┃ ┣ TrendingTable.css
┃ ┃ ┃ ┗ TrendingTable.jsx
┃ ┃ ┣ Buttons.jsx
┃ ┃ ┣ MyFooter.jsx
┃ ┃ ┣ NavBar.jsx
┃ ┃ ┗ ProtectedRoute.js
┃ ┣ context/
┃ ┃ ┣ AppContext.js
┃ ┃ ┣ AppState.js
┃ ┃ ┣ ProfileContext.js
┃ ┃ ┗ ProfileState.js
┃ ┣ data/
┃ ┃ ┣ courses.js
┃ ┃ ┣ DropdownData.js
┃ ┃ ┣ sessionService.js
┃ ┃ ┣ SingleDropdownData.js
┃ ┃ ┣ studentPrefService.js
┃ ┃ ┣ studentService.js
┃ ┃ ┣ topicsService.js
┃ ┃ ┣ TrendingTableData.js
┃ ┃ ┣ userData.js
┃ ┃ ┣ volunteerPrefService.js
┃ ┃ ┗ volunteerService.js
┃ ┣ pages/
┃ ┃ ┣ Login/
┃ ┃ ┃ ┣ Login.css
┃ ┃ ┃ ┗ Login.jsx
┃ ┃ ┣ MentorsDasboard/
┃ ┃ ┃ ┗ MentorsDashboard.jsx
┃ ┃ ┣ Register/
┃ ┃ ┃ ┣ Register.css
┃ ┃ ┃ ┗ Register.jsx
┃ ┃ ┣ Session/
┃ ┃ ┃ ┗ Session.jsx
┃ ┃ ┣ Home.jsx
┃ ┃ ┗ Profile.jsx
┃ ┣ App.css
┃ ┣ App.js
┃ ┣ index.css
┃ ┗ index.js
┣ .gitignore
┣ package-lock.json
┣ package.json
┗ README.md