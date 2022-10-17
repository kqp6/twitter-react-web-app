const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item pb-1 pt-3">
        <img src=${who.avatarIcon} class="float-start rounded-circle" height="45px" width="45px"/>
        <div class="ms-2 float-start">
            <h6 class="float-start">${who.userName}</h6>
            <i class="ms-1 mt-1 float-start fa fa-check-circle"></i>
            <p>@${who.handle}</p>
        </div>
        <button type="button" class="mt-2 float-r btn btn-primary rounded-pill">Follow</button>
    </li>
    `);
}

export default WhoToFollowListItem;