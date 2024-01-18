import React, { Component } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Education extends Component {
    render() {


        return (
            <section id="education" className="pb-5">
                <div className="col-md-12 mx-auto">
                    <div className="col-md-12">
                        <h1 className="section-title" style={{ color: "black" }}>
                            <span className="text-black" style={{ textAlign: "center" }}>
                                Education
                            </span>
                        </h1>
                    </div>
                </div>
                <div className="col-md-8 mx-auto">
                    <VerticalTimeline>
                    <VerticalTimelineElement
                            className="vertical-timeline-element--work"

                            iconStyle={{
                                background: "#AE944F",
                                color: "#fff",
                                textAlign: "center",
                            }}
                            icon={<i className="fab fa-angular experience-icon"></i>}

                        >

                            <h4
                                className="vertical-timeline-element-subtitle"
                                style={{ textAlign: "left" }}
                            >
                       Wilmington University

                            </h4>

                            <h3
                                className=""
                                style={{}}
                            >
                                <p>Master's degree, Computer Science</p>
                            </h3>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"

                            iconStyle={{
                                background: "#AE944F",
                                color: "#fff",
                                textAlign: "center",
                            }}
                            icon={<i className="fab fa-angular experience-icon"></i>}

                        >

                            <h4
                                className="vertical-timeline-element-subtitle"
                                style={{ textAlign: "left" }}
                            >
                            Sir C.R.R. College Of Engineerng
                            </h4>

                            <h3
                                className=""
                                style={{}}
                            >
                                <p> B.Tech(2016-2020)</p>
                            </h3>

                        </VerticalTimelineElement>

                       
                        <VerticalTimelineElement
                            iconStyle={{
                                background: "#AE944F",
                                color: "#fff",
                                textAlign: "center",
                            }}
                            icon={
                                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
                            }
                        />

                    </VerticalTimeline>

                </div>

            </section>
        );
    }
}

export default Education;
