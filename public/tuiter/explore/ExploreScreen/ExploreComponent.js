import PostSummaryList from '../PostSummaryList/index.js';

const ExploreComponent = () => {
    return(`
        <div class="row">
            <div class="col-10">
            <input type="text" class="form-control rounded-pill" placeholder="&#8981  Search Twitter">
            </div>
            <div class="col-2">
                <i class="fa fa-cog fa-2x float-end" style="color: #0275d8"></i>
            </div>
        </div>
        <ul class="nav mt-2 mb-2 nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-xxl-block d-xl-block d-lg-block d-md-block d-sm-none d-none">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        <!-- image with overlaid text -->
        <div class="mt-2">
        <img src="../../images/starship.webp" class="card-img-top" alt="...">
        ${PostSummaryList()}
        <h2 class="title-abs">SpaceX's Starship</h2>
        </div>
    `);
}
export default ExploreComponent;
