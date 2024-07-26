import React from "react";

function ListUsers({ users = [] }) {
    
    const sortedUsers = [...users].sort((a, b) => a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase()));

  return (
    <div>
      <div className="user-count">Users: {users.length}</div>
      {users.length > 0 && (
        <ul className="user-list">
          {sortedUsers.map((user, index) => (
            <li key={index}>
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


// Ne pas changer
export default ListUsers;
