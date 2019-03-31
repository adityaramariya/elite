
import React, { Component } from 'react';

class SearchBox extends Component {
    render() {
        return (
            <div className="search-box">
                <span class="icon-search icon"></span>
                <input type="search" className="form-control" placeholder="Placeholder Text"/>
            </div>
        );
    }
}
export default SearchBox;
