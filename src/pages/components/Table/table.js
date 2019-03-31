import React, { Component } from 'react';

class Table extends Component{
    render(){
        return(

            <table className="tbl-style">
                <thead>
                    <tr>
                        <th>table header</th>
                        <th>table header</th>
                        <th>table header</th>
                        <th>table header</th>
                    </tr>
                </thead>

                <tbody>
                <tr>
                    <td>table body</td>
                    <td>table body</td>
                    <td>table body</td>
                    <td>table body</td>
                </tr>

                <tr>
                    <td>table body</td>
                    <td>table body</td>
                    <td>table body</td>
                    <td>table body</td>
                </tr>

                </tbody>
            </table>
        )
    }
}
export default Table;