import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
 return(
   <>
     <div className="row">
       <div className="col-11 position-relative">
         <input placeholder="Search Tuiter"
                className="form-control rounded-pill ps-5"/>
         <i className="bi bi-search position-absolute 
                       wd-nudge-up"></i>
       </div>
       <div className="col-1">
         <i className="wd-bottom-4 text-primary float-end bi 
                       bi-gear-fill fs-2 position-relative"></i>
       </div>
     </div>
     <ul className="nav nav-pills mb-2">
       <li className="nav-item">
         <a className="nav-link active" href="for-you.html">For You</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="trending.html">Trending</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="news.html">News</a>
       </li>
       <li class="nav-item">
          <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item d-xxl-block d-xl-block d-lg-block d-md-block d-sm-none d-none">
          <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>
     </ul>
     <div className="position-relative mb-2">
       <img src={require('../../images/starship.webp')} className="w-100" alt=""/>
       <h1 className="position-absolute wd-nudge-up text-white">
         SpaceX Starship</h1>
     </div>
     <PostSummaryList/>
   </>
 );
};
export default ExploreComponent;