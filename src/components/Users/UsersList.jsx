import React from "react";
import "./UsersList.css";
import Card from "../UI/Card";

const UsersList = (props) => {
	return (
		<Card className="users">
			<ul>
				{props.users.map((userData) => {
					return (
						<li key={userData.id}>
							{userData.name} ({userData.age} years old)
						</li>
					);
				})}
			</ul>
		</Card>
	);
};

export default UsersList;
