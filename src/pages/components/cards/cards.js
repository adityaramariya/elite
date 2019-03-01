import React, { Component } from 'react';
class Card extends Component {
    render() {
        return (
            <div className="inner-page--wrapper page-content">
                <div className="card--wrapper">
                    <div className="card--on24 first-card">
                        <div id="card-title" className="title--on24">
                            <span id="yui_3_1_1546927546619_514">Summary</span>
                        </div>
                        <div id="card-content" className="content--on24">
                            <div id="content-value">
                                <a href="#" id="openAttendeesReport">
                                <span
                                    id="lblEngagementScore"
                                    className="label-large--on24">1.2
                                </span>
                                </a>
                            </div>

                            <div id="content-subtitle">
                                <a href="#" id="openAttendeesReport">
                                <span id="lblTitleEngagementScore"
                                      className="label-normal--on24 btn-link">Engagement Score
                                </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div id="card-TotalRegistrants" className="card--on24 middle-card">
                        <div id="card-title" className="title--on24"></div>
                        <div id="card-content" className="content--on24">
                            <div id="content-value"><a
                                href="javascript:SubmitForm('rdPage.aspx?rdReport=Audience&amp;attendance-viewing-selector=all_viewers&amp;moreReport=audience-table&amp;reportType=registrants&amp;attendance-viewing-selector_b0288dc96613433eacfc0d23b75e93f1=all_viewers&amp;moreReport_b0288dc96613433eacfc0d23b75e93f1=audience-table&amp;reportType_b0288dc96613433eacfc0d23b75e93f1=registrants&amp;rdRequestForwarding=Form','_self','false','',null,['','',''])"
                                id="openRegistrantsReport"><span id="lblRegCount" className="label-large--on24">64</span></a>
                            </div>
                            <div id="content-subtitle"><a
                                href="javascript:SubmitForm('rdPage.aspx?rdReport=Audience&amp;attendance-viewing-selector=all_viewers&amp;moreReport=audience-table&amp;reportType=registrants&amp;attendance-viewing-selector_b0288dc96613433eacfc0d23b75e93f1=all_viewers&amp;moreReport_b0288dc96613433eacfc0d23b75e93f1=audience-table&amp;reportType_b0288dc96613433eacfc0d23b75e93f1=registrants&amp;rdRequestForwarding=Form','_self','false','',null,['','',''])"
                                id="openRegistrantsReport"><span id="lblTitleRegCount" className="label-normal--on24 btn-link">Total Registrants</span></a>
                            </div>
                        </div>
                    </div>
                    <div id="card-TotalAttendees" className="card--on24 middle-card">
                        <div id="card-title" className="title--on24"></div>
                        <div id="card-content" className="content--on24">
                            <div id="content-value"><a
                                href="javascript:SubmitForm('rdPage.aspx?rdReport=Audience&amp;attendance-viewing-selector=all_viewers&amp;moreReport=audience-table&amp;reportType=all_attendees&amp;attendance-viewing-selector_906d8d482e1e4b13917b6b938c73b3ba=all_viewers&amp;moreReport_906d8d482e1e4b13917b6b938c73b3ba=audience-table&amp;reportType_906d8d482e1e4b13917b6b938c73b3ba=all_attendees&amp;rdRequestForwarding=Form','_self','false','',null,['','',''])"
                                id="openAttendeesReport"><span id="lblAttendeeCount"
                                                               className="label-large--on24">8</span></a></div>
                            <div id="content-subtitle"><a
                                href="javascript:SubmitForm('rdPage.aspx?rdReport=Audience&amp;attendance-viewing-selector=all_viewers&amp;moreReport=audience-table&amp;reportType=all_attendees&amp;attendance-viewing-selector_906d8d482e1e4b13917b6b938c73b3ba=all_viewers&amp;moreReport_906d8d482e1e4b13917b6b938c73b3ba=audience-table&amp;reportType_906d8d482e1e4b13917b6b938c73b3ba=all_attendees&amp;rdRequestForwarding=Form','_self','false','',null,['','',''])"
                                id="openAttendeesReport"><span id="lblTitleAttendeeCount"
                                                               className="label-normal--on24 btn-link">Total Attendees</span></a>
                            </div>
                            <div id="percentage-attendees-container">
                                <table className="width-full" id="percentage-attendees">
                                    <tbody id="yui_3_1_1546929235523_449">
                                    <tr id="percentage-attendees-th">
                                        <td id="percentage-attendees-live-title"><span
                                            className="label-normal--on24">Live</span></td>
                                        <td id="percentage-attendees-od-title"><span
                                            className="label-normal--on24">On-Demand</span></td>
                                    </tr>
                                    <tr id="percentage-attendees-tr">
                                        <td id="percentage-attendees-live-value">
                                            <div className="label-normal--on24" id="yui_3_1_1546929235523_479"><b>1</b> (13%)
                                            </div>
                                        </td>
                                        <td id="percentage-attendees-od-value">
                                            <div className="label-normal--on24"><b>7</b> (87%)</div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div id="card-AttConversionRate" className="card--on24 middle-card">
                        <div id="card-title" className="title--on24"></div>
                        <div id="card-content" className="content--on24">
                            <div id="content-value"><a
                                href="javascript:SubmitForm('rdPage.aspx?rdReport=Audience&amp;reportType=all_attendees&amp;reportType_5a490df7f23342f1a027d373d1f07f33=all_attendees&amp;rdRequestForwarding=Form','_self','false','',null,['','',''])"
                                id="openAttendeesReport"><span id="lblAttendanceRatio" className="label-large--on24">13<span
                                className="percent-superscript" id="yui_3_1_1546929235523_431">%</span></span></a></div>
                            <div id="content-subtitle"><a
                                href="javascript:SubmitForm('rdPage.aspx?rdReport=Audience&amp;reportType=all_attendees&amp;reportType_5a490df7f23342f1a027d373d1f07f33=all_attendees&amp;rdRequestForwarding=Form','_self','false','',null,['','',''])"
                                id="openAttendeesReport"><span id="lblTitleAttendanceRatio"
                                                               className="label-normal--on24 btn-link">Attendee Conversion Rate</span></a>
                            </div>
                            <div id="lblAttRegRate" className="label-normal--on24">Attendees vs. Registrants</div>
                        </div>
                    </div>

                    <div id="card-RegConversionRate" className="card--on24 last-card">
                        <div id="card-title" className="title--on24"></div>
                        <div id="card-content" className="content--on24">
                            <div id="content-value"><a
                                href="javascript:SubmitForm('rdPage.aspx?rdReport=Audience&amp;reportType=registrants&amp;reportType_0726e678bc934395ace5172099b2c0fc=registrants&amp;rdRequestForwarding=Form','_self','false','',null,['','',''])"
                                id="openRegistrantsReport"><span id="lblRegRate" className="label-large--on24">50<span
                                className="percent-superscript" id="yui_3_1_1546929235523_428">%</span></span></a></div>
                            <div id="content-subtitle"><a
                                href="javascript:SubmitForm('rdPage.aspx?rdReport=Audience&amp;reportType=registrants&amp;reportType_0726e678bc934395ace5172099b2c0fc=registrants&amp;rdRequestForwarding=Form','_self','false','',null,['','',''])"
                                id="openRegistrantsReport"><span id="lblTitleRegRate" className="label-normal--on24 btn-link">Reg Page Conversion Rate</span></a>
                            </div>
                            <div id="lblRegCaption" className="label-normal--on24">Registration vs. Registration Page Hits
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card--wrapper">
                    <div id="card-EventSummary" className="card--on24 width-large height-high--on24 margin-right margin-top">
                        <div id="card-title" className="title--on24"><span id="yui_3_1_1546929235523_493">Event Summary</span>
                        </div>
                        <div id="event-summary-container" className="content--on24">
                            <table id="event-summary-table">
                                <tbody id="yui_3_1_1546929235523_456">
                                <tr id="event-summary-tr-1">
                                    <td className="event-summary-cell" id="event-summary-cell-1"><span
                                        id="lblEventDuration">Event Duration: 63 min</span></td>
                                    <td className="event-summary-cell" id="event-summary-cell-2"><span
                                        id="lblQuestionsAsked">Questions Asked: 0</span></td>
                                </tr>
                                <tr id="event-summary-tr-2">
                                    <td className="event-summary-cell" id="event-summary-cell-3"><span
                                        id="lblAvgLiveDuration">Avg. Live Duration: 29 min</span></td>
                                    <td className="event-summary-cell" id="event-summary-cell-4"><span
                                        id="lblNumPollResponses"># of Poll Responses: 0</span></td>
                                </tr>
                                <tr id="event-summary-tr-3">
                                    <td className="event-summary-cell" id="event-summary-cell-5"><span
                                        id="lblAvgODDuration">Avg. On-Demand: 14 min</span></td>
                                    <td className="event-summary-cell" id="event-summary-cell-6"><span
                                        id="lblNumSurveyResponses"># of Survey Responses: 0</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div id="card-EventSummary" className="card--on24 width-large height-high--on24 margin-right margin-top">
                        <div id="card-title" className="title--on24"><span id="yui_3_1_1546929235523_493">Event Summary</span>
                        </div>
                        <div id="event-summary-container" className="content--on24">
                            <table id="event-summary-table">
                                <tbody id="yui_3_1_1546929235523_456">
                                <tr id="event-summary-tr-1">
                                    <td className="event-summary-cell" id="event-summary-cell-1"><span
                                        id="lblEventDuration">Event Duration: 63 min</span></td>
                                    <td className="event-summary-cell" id="event-summary-cell-2"><span
                                        id="lblQuestionsAsked">Questions Asked: 0</span></td>
                                </tr>
                                <tr id="event-summary-tr-2">
                                    <td className="event-summary-cell" id="event-summary-cell-3"><span
                                        id="lblAvgLiveDuration">Avg. Live Duration: 29 min</span></td>
                                    <td className="event-summary-cell" id="event-summary-cell-4"><span
                                        id="lblNumPollResponses"># of Poll Responses: 0</span></td>
                                </tr>
                                <tr id="event-summary-tr-3">
                                    <td className="event-summary-cell" id="event-summary-cell-5"><span
                                        id="lblAvgODDuration">Avg. On-Demand: 14 min</span></td>
                                    <td className="event-summary-cell" id="event-summary-cell-6"><span
                                        id="lblNumSurveyResponses"># of Survey Responses: 0</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Card;
