import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Total de Productos',
    color: 'primary', 
    cuantity: 21,
    icon: 'fas fa-boxes'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:' Total Clientes', 
    color:'success', 
    cuantity: '79',
    icon:'fas fa-user-check'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Total Categorías' ,
    color:'warning',
    cuantity:'49',
    icon:'fas fa-grip-horizontal'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;