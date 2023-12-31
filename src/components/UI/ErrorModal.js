import Card from "./Card";
import styles from "./ErrorModal.module.css"

function ErrorModal(props) {
	return (
		<div>
			<div className={styles.backdrop}/>
			<Card className={styles.modal}>
				<header className={styles.header}><h2>{props.title}</h2></header>
				<div className={styles.content}><p>{props.message}</p></div>
				<footer className={styles.actions}>
					<button onClick={() => props.onCloseErrorModal()}>Close</button>
				</footer>
			</Card>
		</div>

	)
}

export default ErrorModal