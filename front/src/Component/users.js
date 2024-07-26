import React, {useState, useEffect} from 'react'; 

function  ListUsers({users}) {

    const [sortedUsers, setSortedUsers] = useState([]); 

    useEffect(()=>{
        setSortedUsers(
            users.sort((a,b)=>{
                const lastNameA = a.lastName.toUpperCase();
                const lastNameB = b.lastName.toUpperCase();
                if(lastNameA<lastNameB){
                    return -1;
                }
                if(lastNameA>lastNameB){
                    return 1;
                }
                return 0;
            })
        );
    },[users]);


    return(
        <div>
            {sortedUsers.map(user=>(
                <p key={user.lastName} role="listitem">
                    {user.firstName} {user.lastName}
                </p>
            ))}
        </div>
    )
}

export default ListUsers;