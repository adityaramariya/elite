import React, { Component } from 'react';

class Tags extends Component {
    render() {
        return (
            <div className="tag--wrapper">

                <span className="tag">
                        Tag label
                    <button className="delete is-small"></button>
                </span>
                <span className="tag is-tagged">
                        Tag label
                </span>

                <span className="tag is--default">
                        Default Tags
                    <button className="delete is-small"></button>
                </span>


                <span className="tag is--default is-tagged">
                        Default Tags
                </span>

                <button className="btn btn-orange"></button>



            </div>



        );
    }
}
export default Tags;
