import React, { useState, useEffect } from 'react';


function TotalProducts(){

    const [products, setProducts] = useState([]);   

    useEffect( () => {
        fetch(`http://localhost:3001/api/products`)
        .then(response => response.json())
        .then((products) => {
            setProducts(products);
        })
        .catch((error)=> console.log(error));
    }, [] );

    return(
        <p>{products.count}</p>
        
    )
}

export default TotalProducts;