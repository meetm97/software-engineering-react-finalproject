import React from "react";

const ExploreComponent = () => {
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
              <ul className="nav mb-2 nav-tabs">

                <li className="nav-item">
                  <a className="nav-link active" href="for-you.html">For You</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="news.html">News</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="nav-item d-sm-none d-md-block">
                  <a className="nav-link"
                     href="entertainment.html">Entertainment</a>
                </li>
              </ul>
            </div>

            <div className="card wd-card-top mt-1">
              <img src="../../../../images/spaceX.jpeg"
                   className="wd-card-top-image" alt=""></img>
              <div className="card-body wd-bottom-left">
                <p className="card-text"></p>
                <h3 className="card-title">SpaceX's Starship</h3>
              </div>
            </div>


          </div>
        </div>
      </>
  );
}
export default ExploreComponent;