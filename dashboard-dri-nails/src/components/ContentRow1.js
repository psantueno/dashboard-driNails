import React, { useState, useEffect, useRef } from 'react';
import SmallCard from './SmallCard';
import TotalUsers from "./TotalUsers";

/*  Cada set de datos es un objeto literal */

/* <!-- Products in DB --> */

let productsInDB = {
    title: 'Total de Productos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fas fa-boxes'
}

/* <!-- Clients in DB --> */

let clientsInDB = {
    title:' Total Usuarios', 
    color:'success', 
    cuantity: <TotalUsers/>,
    icon:'fas fa-user-check'
}

/* <!-- Category in DB --> */

let categoysInDB = {
    title:'Total Categorías' ,
    color:'warning',
    cuantity:'49',
    icon:'fas fa-grip-horizontal'
}

let cartProps = [productsInDB, clientsInDB, categoysInDB];

function ContentRow1(){
    
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}
            

        </div>
    )
}

export default ContentRow1;