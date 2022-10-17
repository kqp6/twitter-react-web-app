const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item pb-1 pt-3">
            <img src=${post.image} class="mt-3 float-end" width="50px"/>
            <div class="ms-2">
                <div class="grey-text">${post.topic}</div>
                <h6 class="float-start">${post.userName}</h6>
                <i class="float-start ms-1 mt-1 fa fa-check-circle"></i>
                <div class="grey-text float-start ms-2"> - ${post.time}</div>
                <div class="no-float">${post.title}</div>
            </div>
        </li>
    `);
}

export default PostSummaryItem;