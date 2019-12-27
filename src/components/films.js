import React from 'react';
import Film from './film';

function Films(props) {
    return (
        <div className="container">
            {props.movies.map((movie) => 
                        <Film movie={movie}></Film>
                    )}
        </div>
    );
}

export default Films;