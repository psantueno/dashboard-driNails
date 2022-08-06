import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.nombre}</td>
                    <td>{props.category_id}</td>
                    <td>{props.precio}</td>
                    <td>{props.descuento}</td>
                    <td>{props.descripcion}</td>
                </tr>
            )
    }
    
        

export default ChartRow;