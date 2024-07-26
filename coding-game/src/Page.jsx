import React from "react";

// Update Page and UserInfoWithTitle
function Page({ user }) {
  return (
    <div>
      <div>...</div>
      <UserInfoWithTitle title='User Info' user={user}/>
      <div>...</div>
    </div>
  );
}

{/*comment*/}

function UserInfoWithTitle({ title, user }) {
  return (
    <div>
      <div>{title}</div>
      <UserInfo user={user} />
    </div>
  );
}

// Do not change the UserInfo component
function UserInfo({ user }) {
  return (
    <div>
      <span>{user.firstName}</span>
      <span>{user.lastName}</span>
    </div>
  );
}

export default Page;
