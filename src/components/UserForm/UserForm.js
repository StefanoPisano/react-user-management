import {useState} from "react";
import styles from "./UserForm.module.css";
import Card from "../UI/Card";

const DEFAULT_STATE = {
	name: '',
	age: ''
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
		const validAge = user.age && !isNaN(user.age) && user.age > 0;

		const validUser = validName && validAge;
		if (validUser) {
			props.onSubmitUser(user);

			setUser(DEFAULT_STATE);
		} else {
			console.error("User is not valid", user)
		}
	}

	return (
		<Card className={styles.input}>
			<form onSubmit={submitUser}>
				<label htmlFor="name">Name</label>
				<input type="text" id="name" value={user.name}
				       onChange={updateName}/>
				<label htmlFor="age">Age (Years)</label>
				<input type="number" id="age" value={user.age}
				       onChange={updateAge}/>
				<button type="submit" className={styles.button}>
					Add User
				</button>
			</form>
		</Card>
	)
}

export default UserForm