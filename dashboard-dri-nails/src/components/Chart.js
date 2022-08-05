import React, { useState, useEffect } from 'react';
import ChartRow from './ChartRow';

// let tableRowsData = [
//     {
//         Title: 'Producto 1',
//         Category: 'Repuestos',
//         Price: 123,
//         Descuento: 10,
//         Descripción: 2
//     },
//     {
//         Title: 'Producto 2',
//         Category: 'Accesorios',
//         Price: 123,
//         Descuento: 10,
//         Descripción: 2
//     },
//     {
//         Title: 'Producto 2',
//         Category: 'Herramientas',
//         Price: 123,
//         Descuento: 10,
//         Descripción: 2
//     }

// ];

function Chart() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/api/products`)
            .then(response => response.json())
            .then((data) => {
                setProducts(data.allProducts);
            })
            .catch((error) => console.log(error));
    }, []);

        
            return (
                /* <!-- DataTales Example --> */
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Categoría</th>
                                        <th>Precio</th>
                                        <th>Descuento</th>
                                        <th>Descripción</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Categoría</th>
                                        <th>Precio</th>
                                        <th>Descuento</th>
                                        <th>Descripción</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {
                                        products.map((producto, i) => {
                                            return <ChartRow {...producto} key={i} />
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            )
       
}

export default Chart;