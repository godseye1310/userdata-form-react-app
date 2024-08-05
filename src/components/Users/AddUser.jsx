import React, { useState } from "react";
import "./AddUser.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
	const [enteredUsername, setEnteredName] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState(false);

	const usernameChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};
	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({ title: "Invalid Input", message: "Please enter a valid username and age (non-empty vlues)." });
			return;
		}
		if (+enteredAge.trim() <= 0) {
			setError({ title: "Invalid Input", message: "Please enter a valid age (> 0)." });
			return;
		}
		// console.log(enteredUsername, enteredAge);
		props.onAddUser(enteredUsername, enteredAge);
		setEnteredName("");
		setEnteredAge("");
	};

	const errorHandler = () => {
		setError(false);
	};

	return (
		<>
			{error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}

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
		</>
	);
};

export default AddUser;
