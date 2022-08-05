import React, { useState, useEffect } from 'react';

function TotalCategories(){

    const [categories, setCategories] = useState([]);   

    useEffect( () => {
        fetch(`http://localhost:3001/api/products`)
        .then(response => response.json())
        .then((data) => {
            setCategories(data.allCategories.length);
        })
        .catch((error)=> console.log(error));
    }, [] );

    return(
        <p>{categories}</p> 
    )
}

export default TotalCategories;