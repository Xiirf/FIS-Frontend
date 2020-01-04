import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state ={
            loading: false,
            query:''
        }
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="btn-group  col-6 border rounded-pill text-secondary mx-auto">
                        <input type="text" className="form-control border-0" name="query" value={this.state.query} onChange={this.handleChange} placeholder="Buscador"/>
                        <a href={"/?query="+this.state.query + "&page=1"} style={{textDecoration: 'none'}}>
                            <button className="btn"><FontAwesomeIcon icon="search" query={this.state.query} /></button>
                        </a>

                    </div>
                </div>
                
                
            </div>
            
        );
    }
}

export default SearchBar;