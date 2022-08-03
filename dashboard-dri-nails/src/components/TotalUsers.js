import React, { useState, useEffect, useRef } from 'react';

// Credenciales de API
//const apiKey = 'dea98d9b'; 


function TotalUsers(){

    const [users, setUsers] = useState([]);
    

    useEffect( () => {
        fetch(`http://localhost:3001/api/users`)
        .then(response => response.json())
        .then((data) => {
            //console.log(data.count)
            setUsers(data.count);
        })
        .catch((error)=> console.log(error))
    }, [] );

    return(
        <p>{users}</p>

    )
}

export default TotalUsers;