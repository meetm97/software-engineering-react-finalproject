import Tuits from "../tuits";

import React, {useEffect, useState} from "react";
import {Link, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import * as service from "../../services/tuits-service";
import ForYouTuits from "./ForYouTuits";

const ExploreComponent = () => {

     const [tuits, setTuits] = useState([]);
        const findTuits = () =>
            service.findAllTuits('me')
                .then((tuits) => setTuits(tuits));
        useEffect(findTuits, []);
  return (<>
        <div className="container wd-left-sidebar-container">
          <div>
            <div className="row wd-top-bottom-padding">

              <form>
                <div className="row wd-search-row">
                  <i className="fas fa-search wd-icon-search"></i>
                  <div className="col-11">
                    <input type="text" id="wd-corners-round"
                           placeholder="Search Twitter"/>
                  </div>
                  <div className="col-1"><a href="explore-settings.html"><i
                      className="fas fa-cog fa-lg wd-gear-icon"></i></a></div>
                </div>
              </form>
            </div>
            <div>
{/* //              <ul className="nav mb-2 nav-tabs">
//
//                <li className="nav-item">
//                  <a className="nav-link active" href="for-you.html">For You</a>
//                </li>
//                <li className="nav-item">
//                  <a className="nav-link" href="trending.html">Trending</a>
//                </li>
//                <li className="nav-item">
//                  <a className="nav-link" href="news.html">News</a>
//                </li>
//                <li className="nav-item">
//                  <a className="nav-link" href="sports.html">Sports</a>
//                </li>
//                <li className="nav-item d-sm-none d-md-block">
//                  <a className="nav-link"
//                     href="entertainment.html">Entertainment</a>
//                </li>
//              </ul> */}
                <ul className="mt-4 nav nav-pills nav-fill">
                                        <li className="nav-item">
                                            <Link to="/explore/exploretuits"
                                                  className={`nav-link ${location.pathname.indexOf('For You') >= 0 ? 'active' : ''}`}>
                                                For You</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to=""
                                                  className={`nav-link ${location.pathname.indexOf('tuits-and-replies') >= 0 ? 'active' : ''}`}>
                                                Tuits & replies</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to=""
                                                  className={`nav-link ${location.pathname.indexOf('media') >= 0 ? 'active' : ''}`}>
                                                Media</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to=""
                                                  className={`nav-link ${location.pathname.indexOf('likes') >= 0 ? 'active' : ''}`}>
                                                Likes</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to=""
                                                  className={`nav-link ${location.pathname.indexOf('dislike') >= 0 ? 'active' : ''}`}>
                                                Dislikes</Link>
                                        </li>
                                    </ul>
            </div>

                 <div>
                      <Tuits tuits={tuits} refreshTuits={findTuits}/>
                 </div>
          </div>
          {               <Routes>
                              <Route path="/exploretuits" element={<ForYouTuits/>}/>
                          </Routes>
                      }
        </div>
      </>
  );
}
export default ExploreComponent;