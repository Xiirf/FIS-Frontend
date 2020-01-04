import React from 'react';

function Pagination(props){
    const pageLinks=[]// number of pages

    for(let i=1; i <= props.pages +1; i++){

        //the number is highlight, only if it is the number which we are
        let active = props.currentPage ===i ? 'active':'';

        //the style is define as google for the active number and we will give the number of the page through i
        pageLinks.push(<li  className = {`waves-effect  ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="#">{i}</a></li>)
    }

    return (
        <div className="container">
            <div className="row">

            <ul className="pagination">

                {props.currentPage> 1? <li  className = {`waves-effect`} onClick={() => props.nextPage(props.currentPage - 1)}> <a href="#">Prev</a></li>:''}
                {pageLinks}
                {props.currentPage< props.pages + 1? <li  className = {`waves-effect`} onClick={() => props.nextPage(props.currentPage + 1)}> <a href="#">Next</a></li>:''}

            </ul>

            </div>
        </div>
    )

}

export default Pagination