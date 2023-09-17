import {useState} from "react";
import userList from "../UserList/UserList";

const DEFAULT_STATE = {
	name: '',
	age: null
}

function UserForm(props) {
	const [user, setUser] = useState(DEFAULT_STATE);

	const updateName = event => {
		setUser(prevState => {
			return {
				...prevState,
				name: event.target.value
			}
		})
	}

	const updateAge = event => {
		setUser(prevState => {
			return {
				...prevState,
				age: event.target.value
			}
		})
	}

	const submitUser = event => {
		event.preventDefault();

		const validName = user.name && user.name.trim().length;
		const validAge = user.age && !isNaN(user.age);

		const validUser = validName && validAge;
		if (validUser) {
			props.onSubmitUser(user);
		} else {
			console.error("User is not valid", user)
		}
	}

	return (
		<div>
			<form onSubmit={submitUser}>
				<p>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" value={user.name}
					       onChange={updateName}/>
				</p>
				<p>
					<label htmlFor="age">Age</label>
					<input type="number" id="age" value={user.age}
					       onChange={updateAge}/>
				</p>
				<p>
					<button type="reset">
						Reset
					</button>
					<button type="submit">
						Calculate
					</button>
				</p>
			</form>
		</div>
	)
}

export default UserForm