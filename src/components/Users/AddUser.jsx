import React, { useState } from "react";
import "./AddUser.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
	const [enteredUsername, setEnteredName] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	// const [isValid, setIsValid] = useState("true");

	const usernameChangeHandler = (event) => {
		// if (event.target.value.trim().length > 0) {
		// 	setIsValid(true);
		// }
		setEnteredName(event.target.value);
	};
	const ageChangeHandler = (event) => {
		// if (event.target.value.trim().length > 0 && event.target.value > 0) {
		// 	setIsValid(true);
		// }
		setEnteredAge(event.target.value);
	};

	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			// setIsValid(false);
			return;
		}
		if (+enteredAge.trim() <= 0) {
			return;
		}
		// console.log(enteredUsername, enteredAge);
		props.onAddUser(enteredUsername, enteredAge);
		setEnteredName("");
		setEnteredAge("");
	};

	return (
		<Card className="input">
			<form onSubmit={addUserHandler}>
				<div>
					<label htmlFor="username" style={{}}>
						Username
					</label>
					<input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler} />
				</div>
				<div>
					<label htmlFor="age">Age (Years)</label>
					<input type="number" id="age" value={enteredAge} onChange={ageChangeHandler} />
				</div>
				<div>
					<Button type="submit">Add User</Button>
				</div>
			</form>
		</Card>
	);
};

export default AddUser;
