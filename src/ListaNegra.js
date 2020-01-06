import React from 'react';

function ListaNegra(props){
    return(
        <tr>
            <td>{props.elemento.idTmdb}</td>
            <td>{props.elemento.name}</td>
            <td><button data-testid = "clicked" type="button" className="btn btn-primary" onClick={() => props.deleteFromListaNegra(props.elemento.idTmdb, props.tipo) }>Eliminar</button></td>
            {/* <td>{props.tipo}</td> */}
        </tr>
    );
}

export default ListaNegra;