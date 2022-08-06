import React, { useState, useEffect } from 'react';

function LastProductInDb(){

    const [product, setProduct] = useState([]);   

    useEffect( () => {
        fetch(`http://localhost:3001/api/products`)
        .then(response => response.json())
        .then((products) => {
            console.log(products.lastProduct[products.lastProduct.length-1])
            setProduct(products.lastProduct[products.lastProduct.length-1]);
        })
        .catch((error)=> console.log(error));
    }, [] );

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último Producto creado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={`http://localhost:3001/image/${product.imagen}`}  alt="imagen del producto"/>
                    </div>
                    <h3 className='titulo-ultimo-product'>{product.nombre}</h3>
                    <p className='ultimo-product'>{product.descripcion}</p>
                    {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a> */}
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
