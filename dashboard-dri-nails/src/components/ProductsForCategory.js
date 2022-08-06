import React from 'react';
import PropTypes from 'prop-types';

function ProductsForCategory(props) {
    return (

        //Codigo anterior

        // <div className="col-lg-4 mb-4 cat-top"> 
        //     <div className="card bg-dark text-white shadow">
        //         <div className="card-body">{props.nombre}
        //             <p>{props.products.length} productos</p>
        //         </div>
        //     </div>
        // </div>
        //codigo nuevo prueba
        <div className="col-lg-4 mb-4 cat-top"> 
            <div className="card border-left-primary shadow h-100 py-2"  >
                
                <div className="card-body">
                        <p className="font-weight-bold text-primary text-uppercase mb-1">{props.nombre}</p>
                        <p >{props.products.length} productos</p>   
                </div>
                
            </div>
        </div>


    )
}

/* DEFINICIÓN DE PROPIEDADES POR DEFAULT */

ProductsForCategory.defaultProps = {
    nombre: 'Nueva categoría',
    cantidad: 'Cargando...',
}

/* PROPTYPES */

ProductsForCategory.propTypes = {
    atritutes: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        cantidad: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        
    })
}



export default ProductsForCategory;