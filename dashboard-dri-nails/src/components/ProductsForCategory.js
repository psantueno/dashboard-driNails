import React from 'react';
import PropTypes from 'prop-types';

function ProductsForCategory(props) {
    return (

        <div className="col-lg-4 mb-4 cat-top">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">{props.nombre}
                    <p>{props.products.length} productos</p>
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