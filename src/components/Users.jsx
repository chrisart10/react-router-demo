import React from "react";
import { useSearchParams } from "react-router-dom";
function Users() {
	const [searchParams, setSearchParams] = useSearchParams();
	const showActiveUsers = searchParams.get("filter") === "active";
	return (
		<div>
			<h2>user1</h2>
			<h2>user2</h2>
			<h2>user3</h2>
			<div>
				<button onClick={() => setSearchParams({ filter: "active" })}>
					Active Users
				</button>
				<button onClick={() => setSearchParams({})}>
					Reset Filter
				</button>
				{showActiveUsers ? <h2>Active Users</h2> : <h2>All user</h2>}
			</div>
		</div>
	);
}

export default Users;
