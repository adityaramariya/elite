import React, { Component } from 'react';


class Pagination extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link btn-text"  href="# ">
                                <span class="icon-arrow_left"></span>
                            </a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link btn-text"  href="# ">1</a></li>
                        <li className="page-item">
                            <a className="page-link btn-text"  href="# ">2</a></li>
                        <li className="page-item"><a className="page-link btn-text"  href="# ">3</a></li>
                        <li className="page-item">
                            <a className="page-link btn-text"  href="# ">
                                <span class="icon-arrow_right"></span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <nav>
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link btn-text"  href="# ">
                                <span class="icon-arrow_left"></span>
                            </a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link btn-text"  href="# ">1</a></li>
                        <li className="page-item">
                            <a className="page-link btn-text"  href="# ">2</a></li>
                        <li className="page-item"><a className="page-link btn-text"  href="# ">3</a></li>
                        <li className="page-item"><a className="page-link btn-text"  href="# ">4</a></li>
                        <li className="page-item">
                            <a className="page-link btn-text"  href="# ">
                                <span class="icon-arrow_right"></span>
                            </a>
                        </li>
                    </ul>
                </nav>



                <nav>
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link btn-text"  href="# ">
                                <span class="icon-arrow_left"></span>
                            </a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link btn-text"  href="# ">1</a></li>
                        <li className="page-item">
                            <a className="page-link btn-text"  href="# ">2</a></li>
                        <li className="page-item"><a className="page-link btn-text"  href="# ">3</a></li>
                        <li className="page-item"><a className="page-link btn-text"  href="# ">4</a></li>
                        <li className="page-item"><a className="page-link btn-text"  href="# ">5</a></li>
                        <li className="page-item">
                            <a className="page-link btn-text"  href="# ">
                                <span class="icon-arrow_right"></span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <nav>
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link btn-text"  href="# ">
                                <span class="icon-arrow_left"></span>
                            </a>
                        </li>
                        <li className="page-item active">
                            <a className="page-link btn-text"  href="# ">1</a></li>
                        <li className="page-item">
                            <a className="page-link btn-text"  href="# ">2</a></li>
                        <li className="page-item"><a className="page-link btn-text"  href="# ">3</a></li>
                        <li className="page-item"><a className="page-link btn-text"  href="# ">4</a></li>
                        <li className="page-item disabled"><a className="page-link btn-text">...</a></li>
                        <li className="page-item"><a className="page-link btn-text"  href="# ">6</a></li>
                        <li className="page-item">
                            <a className="page-link btn-text"  href="# ">
                                <span class="icon-arrow_right"></span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>






        );


    }
}

export default Pagination