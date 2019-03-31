
import React, { Component } from 'react';

class Typography extends Component {
    render() {
        return (
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
                </div>
            </div>
        );
    }
}
export default Typography;
