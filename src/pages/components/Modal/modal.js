import React, { Component } from 'react';


class Modal extends Component {
render() {
        return (
            <div className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Pop Up title</h4>
                            <a className="close-btn"  href="# " data-dismiss="modal" aria-label="Close">
                                <span class="icon-Close"></span>
                            </a>
                        </div>
                        <div className="modal-body">
                            <p>One fine body…</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn-normal-md" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn-primary-md">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal