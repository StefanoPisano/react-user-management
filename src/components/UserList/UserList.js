function UserList({users}) {

	const usersHtml = users.map(user => <tr key={crypto.randomUUID()}>
		<td>{user.name}</td>
		<td>{user.age}</td>
	</tr>)

	return (
		<table>
			<thead>
			<tr>
				<td>Name</td>
				<td>Age</td>
			</tr>
			</thead>
			<tbody>
			{usersHtml}
			</tbody>
		</table>
	)
}

export default UserList