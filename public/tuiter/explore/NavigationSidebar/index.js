const NavigationSidebar = () => {
    return(`
        <div class="list-group">
        <a class="list-group-item" href="/">
            <i class="fab fa-twitter"></i></a>
            <!-- continue rest of list, e.g.,
               Home, Explore, Notifications,  Messages, etc. -->
        <a href="home.html" class="list-group-item list-group-item-action">
            <i class="float-start mt-1 fa fa-home fa-1x"></i>
            <div class="float-start ms-2 text-justify d-xl-block d-xxl-block d-lg-none d-md-none d-sm-none d-none">Home</div></a>
        <a href="index.html" class="list-group-item list-group-item-action active">
            <i class="float-start mt-1 fa fa-hashtag fa-1x"></i>
            <div class="float-start ms-2 text-justify d-xl-block d-xxl-block d-lg-none d-md-none d-sm-none d-none">Explore</div></a>
        <a href="notificaion.html" class="list-group-item list-group-item-action">
            <i class="float-start mt-1 fa fa-bell fa-1x"></i>
            <div class="float-start ms-2 text-justify d-xl-block d-xxl-block d-lg-none d-md-none d-sm-none d-none">Notifications</div></a>
        <a href="messages.html" class="list-group-item list-group-item-action">
            <i class="float-start mt-1 fa fa-envelope fa-1x"></i>
            <div class="float-start ms-2 text-justify d-xl-block d-xxl-block d-lg-none d-md-none d-sm-none d-none">Messages</div></a>
        <a href="bookmarks/index.html" class="list-group-item list-group-item-action">
            <i class="float-start mt-1 fa fa-bookmark fa-1x"></i>
            <div class="float-start ms-2 text-justify d-xl-block d-xxl-block d-lg-none d-md-none d-sm-none d-none">Bookmarks</div></a>
        <a href="lists.html" class="list-group-item list-group-item-action">
            <i class="float-start mt-1 fa fa-list fa-1x"></i>
            <div class="float-start ms-2 text-justify d-xl-block d-xxl-block d-lg-none d-md-none d-sm-none d-none">Lists</div></a>
        <a href="profile.html" class="list-group-item list-group-item-action">
            <i class="float-start mt-1 fa fa-user fa-1x"></i>
            <div class="float-start ms-2 text-justify d-xl-block d-xxl-block d-lg-none d-md-none d-sm-none d-none">Profile</div></a>
        <a href="more.html" class="list-group-item list-group-item-action">
            <i class="float-start mt-1 fa fa-ellipsis-h fa-1x"></i>
            <div class="float-start ms-2 text-justify d-xl-block d-xxl-block d-lg-none d-md-none d-sm-none d-none">More</div></a>
        </div>
        <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
        </div>
    `);
}
export default NavigationSidebar;