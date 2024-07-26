
import React from 'react';
// Create the Label React component here
function ListUsers({users}) {
const usersTree = users.sort((a, b) => a.lastName.localeCompare(b.lastName))
return (
<div>
<div className='user-count'>Users: {usersTree.length}</div>
<ul className='user-list'>
{usersTree.map((user, index) => <li >{user.firstName} {user.lastName}</li>)}
</ul>
</div>
)
}
export default ListUsers;