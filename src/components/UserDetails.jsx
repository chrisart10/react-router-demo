import React from "react";
import { useParams } from "react-router-dom";

function UserDetail() {
	const { userId } = useParams();
	return <div>details of user {userId}</div>;
}

export default UserDetail;
