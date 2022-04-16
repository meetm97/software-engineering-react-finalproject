import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList";
import './explore.css';

const ExploreScreen = () => {
    return (
        <div className="container">
            <div className="row mt-2">
                <div className="col-xs-10 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6 mt-4"
                     style={{"position" : "relative"}}>
                     <ExploreComponent  />
                </div>
                <div
                    className="d-xxl-block d-xl-block d-lg-block d-md-none d-sm-none d-xs-none col-lg-4 col-xl-4 mt-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </div>

); }

export default ExploreScreen;