import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Title: 'Producto 1',
        Category: 'Repuestos',
        Price: 123,
        Descuento: 10,
        Descripción: 2
    },
    {
        Title: 'Producto 2',
        Category: 'Accesorios',
        Price: 123,
        Descuento: 10,
        Descripción: 2
    },
    {
        Title: 'Producto 2',
        Category: 'Herramientas',
        Price: 123,
        Descuento: 10,
        Descripción: 2
    }
    
]


function Chart (){
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
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
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