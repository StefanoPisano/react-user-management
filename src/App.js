import React, {useState} from 'react';
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";


function App() {
	const [userList, setUserList] = useState([]);
	const addUser = user => setUserList([...userList, user])
	return (
		<div>
			<UserForm onSubmitUser={addUser}/>
			<UserList users={userList}/>
		</div>
	);
}

export default App;
