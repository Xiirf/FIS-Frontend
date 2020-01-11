import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

class PaginationBar extends React.Component{

    constructor(props){
        super(props);
        this.state={
            currentPage: this.props.pagination.currentPage,
            totalPages: this.props.totalPages,
            totalShow: this.props.pagination.totalShow,
            query: this.props.pagination.query,
        };
    }

    render(){
        let active = this.state.currentPage;
        let items = [];
        for (let number = 1; number <= this.state.totalPages; number++) {
            items.push(
              <Pagination.Item key={number} active={number.toString() === active} href={"?query="+this.state.query + "&page=" + number}>
                {number}
              </Pagination.Item>,
            );
          }

        return (
            <div>
                <div className="row btn-group border rounded-pill mx-auto">
                    <Pagination>{items}</Pagination>
                </div>
            </div>
        )
    }

}

export default PaginationBar;