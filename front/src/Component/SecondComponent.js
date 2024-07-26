import React from 'react';

function Page({user}){
    return (<div>
        <div>...</div>
        <UserInfoWithTitle title="User Info" user={user}/>
        <div>...</div>
    </div>);
}

function UserInfoWithTitle({title, user}){
    return(<div>
        <div>{title}</div>
        <UserInfo user={user}/>
    </div>)
}
function UserInfo({user}){
    return(<div>
        <span>{user.firstName}</span>
        <span>{user.lastName}</span>
    </div>);
}
export  {Page, UserInfoWithTitle, UserInfo};