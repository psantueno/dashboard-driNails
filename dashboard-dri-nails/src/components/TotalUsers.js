import React, { useState, useEffect } from 'react';


function TotalUsers(){

    const [users, setUsers] = useState([]);
    

    useEffect( () => {
        fetch(`http://localhost:3001/api/users`)
        .then(response => response.json())
        .then((data) => {
            setUsers(data.users.length);
        })
        .catch((error)=> console.log(error))
    }, [] );

    return(
        <p>{users}</p>

    )
}

export default TotalUsers;