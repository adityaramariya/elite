import React, { Component } from 'react';
import SearchBox from './search';
class Dropdown extends Component {
    render() {
        return (
            <div className="inner-page--wrapper">
                <div className="dropdown--wrapper">
                    <div className="dropdown--item">
                        <small>Normal</small>
                        <div className="dropdown">
                            <button
                                className="btn btn-default dropdown-toggle"
                                type="button"
                                id="dropdownMenu1"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true">
                                Action
                                <span class="icon-expand"><span class="path1"></span><span class="path2"></span></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li><a  href="# ">option 1</a></li>
                                <li><a  href="# ">option 2</a></li>
                                <li><a  href="# ">option 3</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="dropdown--item">
                        <small>Disabled</small>
                        <div className="dropdown">
                            <button
                                className="btn btn-default dropdown-toggle disabled"
                                type="button"
                                id="dropdownMenu1"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true">
                                Action
                               <span class="icon-expand"><span class="path1"></span><span class="path2"></span></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li><a  href="# ">option 1</a></li>
                                <li><a  href="# ">option 2</a></li>
                                <li><a  href="# ">option 3</a></li>
                                <li><a  href="# ">option 4</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="dropdown--item">
                        <small>Active</small>
                        <div className="dropdown">
                            <button
                                className="btn btn-default dropdown-toggle active"
                                type="button"
                                id="dropdownMenu1"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true">
                                Action
                                <span class="icon-expand"><span class="path1"></span><span class="path2"></span></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li><a  href="# ">option 1</a></li>
                                <li><a  href="# ">option 2</a></li>
                                <li><a  href="# ">option 3</a></li>
                                <li><a  href="# ">option 4</a></li>
                                <li><a  href="# ">option 5</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="dropdown--item">
                        <small>Dropdown</small>
                        <div className="dropdown">
                            <button
                                className="btn btn-default dropdown-toggle"
                                type="button"
                                id="dropdownMenu1"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true">
                                Action
                                <span class="icon-expand"><span class="path1"></span><span class="path2"></span></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li><a  href="# ">option 2</a></li>
                                <li><a  href="# ">option 3</a></li>
                                <li><a  href="# ">option 4</a></li>
                                <li><a  href="# ">option 5</a></li>
                                <li><a  href="# ">option 6</a></li>
                                <li><a  href="# ">option 7</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="dropdown--item">
                        <small>Dropdown with Search</small>
                        <div className="dropdown">
                            <button
                                className="btn btn-default dropdown-toggle"
                                type="button"
                                id="dropdownMenu1"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true">
                                Action
                                <span class="icon-expand"><span class="path1"></span><span class="path2"></span></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li>
                                    {/*<div className="search-box">*/}
                                        {/*<i className="icon">i</i>*/}
                                        {/*<input type="search" className="form-control"/>*/}
                                    {/*</div>*/}

                                    <SearchBox />
                                </li>
                                <li><a  href="# ">option 2</a></li>
                                <li><a  href="# ">option 3</a></li>
                                <li><a  href="# ">option 4</a></li>
                                <li><a  href="# ">option 5</a></li>
                                <li><a  href="# ">option 6</a></li>
                                <li><a  href="# ">option 7</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="dropdown--wrapper">
                    <div className="dropdown--item">
                        <div className="dropdown">
                            <button
                                className="btn-link dropdown-toggle"
                                type="button"
                                id="dropdownMenu1"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true">
                                Text Dropdown
                                <span class="icon-expand"><span class="path1"></span><span class="path2"></span></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li><a  href="# ">option 1</a></li>
                                <li><a  href="# ">option 2</a></li>
                                <li><a  href="# ">option 3</a></li>
                                <li><a  href="# ">option 4</a></li>
                                <li><a  href="# ">option 5</a></li>
                            </ul>
                        </div>
                    </div>


                    <div className="dropdown--item">
                        <div className="dropdown text-right">
                            <button
                                className="btn-link text-right dropdown-toggle disabled"
                                type="button"
                                id="dropdownMenu1"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true">
                                Text Dropdown
                               <span class="icon-expand"><span class="path1"></span><span class="path2"></span></span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                                <li><a  href="# ">option 1</a></li>
                                <li><a  href="# ">option 2</a></li>
                                <li><a  href="# ">option 3</a></li>
                                <li><a  href="# ">option 4</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Dropdown;
