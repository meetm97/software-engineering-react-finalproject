import React from "react";
import ExploreComponent from "./ExploreComponent";
import './explore.css';

const ExploreScreen = () => {
    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6 mt-4"
                     style={{"position" : "relative"}}>
                     <ExploreComponent  />
                </div>
            </div>
        </div>

); }

export default ExploreScreen;