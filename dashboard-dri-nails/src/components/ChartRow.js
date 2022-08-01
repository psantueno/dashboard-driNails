import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.Title}</td>
                    <td>{props.Price}</td>
                    <td>{props.Category}</td>
                    {/* <td>{props.Descuento}</td>
                    <td>{props.Descripción}</td>
                    <td>
                        <ul>
                            {props.Categories.map( (category,i) => 
                                <li key={`category ${i}`}>{category}</li>
                            )}
                        </ul>
                    </td> */}
                    <td>{props.Awards}</td>
                </tr>
            )
    }
    
        

export default ChartRow;