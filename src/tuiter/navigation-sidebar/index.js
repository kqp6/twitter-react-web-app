import React from "react";
const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
 return (
    <>
    <div className="list-group">
    <a href="/" className="list-group-item"><i className="bi bi-twitter"></i></a>
    <a href="home.html" className={`list-group-item
                   ${active === 'home'?'active':''}`}>
      <i className="float-start bi bi-house-door-fill"></i>
      <div className="float-start ms-2 text-justify d-xl-block d-xxl-block d-lg-none d-md-none d-sm-none d-none">Home</div>
    </a>
    <a href="index.html" className={`list-group-item
                   ${active === 'explore'?'active':''}`}>
      <i className="float-start bi bi-hash"></i>
      <div className="float-start ms-2 text-justify d-xl-block d-xxl-block d-lg-none d-md-none d-sm-none d-none">Explore</div>
    </a>
    <a href="notificaion.html" className={`list-group-item
                   ${active === 'notifications'?'active':''}`}>
      <i className="float-start bi bi-bell-fill"></i>
      <div className="float-start ms-2 text-justify d-xl-block d-xxl-block d-lg-none d-md-none d-sm-none d-none">Notifications</div>
    </a>
    <a href="messages.html" className={`list-group-item
                   ${active === 'messages'?'active':''}`}>
      <i className="float-start bi bi-envelope-fill"></i>
      <div className="float-start ms-2 text-justify d-xl-block d-xxl-block d-lg-none d-md-none d-sm-none d-none">Messages</div>
    </a>
    <a href="bookmarks/index.html" className={`list-group-item
                   ${active === 'bookmarks'?'active':''}`}>
      <i className="float-start bi bi-bookmark-fill"></i>
      <div className="float-start ms-2 text-justify d-xl-block d-xxl-block d-lg-none d-md-none d-sm-none d-none">Bookmarks</div>
    </a>
    <a href="lists.html" className={`list-group-item
                   ${active === 'lists'?'active':''}`}>
      <i className="float-start bi bi-list-ul"></i>
      <div className="float-start ms-2 text-justify d-xl-block d-xxl-block d-lg-none d-md-none d-sm-none d-none">Lists</div>
    </a>
    <a href="profile.html" className={`list-group-item
                   ${active === 'profile'?'active':''}`}>
      <i className="float-start bi bi-person-fill"></i>
      <div className="float-start ms-2 text-justify d-xl-block d-xxl-block d-lg-none d-md-none d-sm-none d-none">Profile</div>
    </a>
    <a href="more.html" className={`list-group-item
                   ${active === 'more'?'active':''}`}>
      <i className="float-start bi bi-three-dots"></i>
      <div className="float-start ms-2 text-justify d-xl-block d-xxl-block d-lg-none d-md-none d-sm-none d-none">More</div>
    </a>
  </div>
  <div className="d-grid mt-2">
    <a href="tweet.html"
        className="btn btn-primary btn-block rounded-pill">
        Tweet</a>
  </div>
  </>

 );
};
export default NavigationSidebar;