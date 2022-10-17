import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
        <li class="list-group-item"><h6>Who to follow</h6></li>
        <!-- continue here -->
        ${who.map(w => {
            return WhoToFollowListItem(w);
        }).join('')
        }
        </ul>
    `); 
}

export default WhoToFollowList;