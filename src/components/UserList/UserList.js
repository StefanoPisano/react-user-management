import styles from "./UserList.module.css"
import Card from "../UI/Card";

function UserList({users}) {

	const usersHtml = users.map(user => <li key={crypto.randomUUID()}>{user.name} - {user.age} years old</li>)

	return (
		<Card className={styles.users}>
			<ul>
				{usersHtml}
			</ul>
		</Card>

	)
}

export default UserList