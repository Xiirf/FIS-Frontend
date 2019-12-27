import React from 'react';



function Film(props) {
  return (
    <div className="film-css row shadow-sm bg-white rounded my-3">
      <div className="col-3">
        <img src={props.movie.img} width="60%" className="p-3"></img>
      </div>
      <div className="col-6">
        <div className="row my-4 text-primary">
          <h3>{props.movie.name}</h3>
        </div>
        <div className="row my-2">
          <div className="row p-2">
          <p className="text-justify">
            {props.movie.resume}
          </p>
          </div>
          <div className="row p-2">
            <h5 className="rate">
              Puntuación: {props.movie.rate}
            </h5>
          </div>
        </div>
      </div>
      <div className="col-3 my-auto">
        <select className="form-control col-11 mx-auto p-4 border border-primary" value={props.movie.status}>
          <option value="No visto">No visto</option>
          <option value="Visto">Visto</option>
          <option value="Siguiendo">Siguiendo</option>
          <option value="Pendiente">Pendiente</option>
        </select>
      </div>
    </div>
  );
}

export default Film;