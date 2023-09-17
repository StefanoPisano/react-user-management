import {useState} from "react";
import styles from "./UserForm.module.css";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const DEFAULT_STATE = {
	name: '',
	age: ''
}

const ERROR_MESSAGES = {
	name: {
		title: 'Invalid name',
		message: 'Name must not be empty.'
	},
	age: {
		title: 'Invalid age',
		message: 'Age must be not empty and greater than 0'
	}
}

function UserForm(props) {
	const [user, setUser] = useState(DEFAULT_STATE);
	const [error, setError] = useState();

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
			if (!validName) {
				setError(ERROR_MESSAGES.name);
				return;
			}

			if (!validAge) {
				setError(ERROR_MESSAGES.age);
				return;
			}
		}
	}

	const handleClosedErrorModal = () => setError(undefined);

	return (
		<div>
			{error && < ErrorModal title={error.title} message={error.message} onCloseErrorModal={handleClosedErrorModal}/>}

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
		</div>

	)
}

export default UserForm