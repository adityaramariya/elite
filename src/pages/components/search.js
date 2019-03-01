
import React, { Component } from 'react';

class SearchBox extends Component {
    render() {
        return (
            <div className="search-box">
                <i className="far fa-search icon"></i>
                <input type="search" className="form-control" placeholder="Placeholder Text"/>
            </div>
        );
    }
}
export default SearchBox;
