import React from "react";

const addUserHandler = (event) => {
	event.preventDefault();
};

const AddUser = () => {
	return (
		<form onSubmit={addUserHandler}>
			<div>
				<label htmlFor="username">Username</label>
				<input type="text" id="username" />
			</div>
			<div>
				<label htmlFor="age">Age (Years)</label>
				<input type="number" id="age" />
			</div>
			<div>
				<button type="submit">Add User</button>
			</div>
		</form>
	);
};

export default AddUser;
