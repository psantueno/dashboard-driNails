import React from 'react';
import imagenFondo from '../assets/images/product-last.jpeg';

function LastProductInDb(){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último Producto subido a la base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={imagenFondo} alt=" Esmalte Mavala - Karachi (36)"/>
                    </div>
                    <h3 className='titulo-ultimo-product'>Esmalte Mavala - Karachi</h3>
                    <p className='ultimo-product'>Los esmaltes de Mavala han sido diseñados para minimizar la evaporación del solvente y evitar este inconveniente. Contiene un protector solar para prevenir el deterioro de los esmaltes y una resina plástica que aumenta la adherencia del esmalte. Además, Mavala es libre de parabenos, formaldehídos, níquel, tolueno, metales pesados, ingredientes animales para evitar alergias y agresiones.</p>
                    {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a> */}
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
