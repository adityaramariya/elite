
import React, { Component } from 'react';

class All extends Component {
    render() {
        return (
            <div className="UiComponents">
                <div className="pageContainer">
                    <div className="row--flex 2--column">
                        <div className="flex-item col-sm withBg">
                            <div className="sectionTitle">
                                Typography
                            </div>
                            <div className="pageTitle">
                                Page Title <small className="badge">(24px / Regular)</small>
                            </div>

                            <div className="sectionHeader">
                                Section Header <small className="badge">(14px / Bold)</small>
                            </div>
                            <p>Lorem ipsum dolor um aut, commic, itaque, nobis omnis quia quibusdam quos similique suscipit tenetur. Alias libero minus ratione? <small className="badge">(14px / regular)</small></p>
                        </div>

                        <div className="flex-item col-sm withBg">
                            <div className="sectionTitle">
                                Table Header
                            </div>
                            <table className="tbl-style">
                                <thead>
                                <tr>
                                    <th>table header <small className="badge">(14px / Regular / #666)</small> </th>
                                    <th>table header</th>
                                    <th>table header</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                    <td>table body <small className="badge">(14px / Regular / #333)</small></td>
                                    <td>table body</td>
                                    <td>table body</td>
                                </tr>

                                <tr>
                                    <td>table body</td>
                                    <td>table body</td>
                                    <td>table body</td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className="row--flex 2--column">
                        <div className="flex-item col-sm withBg">
                            <div className="sectionTitle">
                                Messages
                            </div>

                            <div className="form-group has-success">
                                <label className="control-label" htmlFor="inputSuccess1">Input with success </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputSuccess1"
                                    aria-describedby="helpBlock2" />
                                    <span id="helpBlock2" className="help-block"><i className="fas fa-check-circle"></i> This text is for success </span>
                                <small className="badge">Success message is (14px / Regular / #7DBE42)</small>
                            </div>
                            <div className="form-group has-warning">
                                <label
                                    className="control-label"
                                    htmlFor="inputWarning1"
                                >
                                    Input with warning
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputWarning1"
                                />
                                <span className="help-block"><i className="fas fa-exclamation-circle"></i> This text is for warning </span>
                                  <small className="badge">Warning message is (14px / Regular / #8a6d3b)</small>


                            </div>
                            <div className="form-group has-error">
                                <label className="control-label" htmlFor="inputError1">Input with error</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputError1"
                                />
                                <span  className="help-block"><i className="fas fa-exclamation-triangle"></i> This text is for error </span>
                                 <small className="badge">Error message is (14px / Regular / #cc0000)</small>
                            </div>
                        </div>

                        <div className="flex-item col-sm withBg">
                            <div className="sectionTitle">
                                Placeholder
                            </div>

                            <div className="form-group">
                                <label className="control-label" htmlFor="inputError1">Example of placeholder  <small className="badge">placeholder is (14px / Regular / #999)</small></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputError1"
                                    placeholder="This is default placeholder"
                                />


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default All;
