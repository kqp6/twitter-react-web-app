import React from "react";
import ConditionalLiked from "./liked";
const TuitStats = ({tuit}) => {
    return(
        <div className="row">
            <div className="col-3">
                <i className="bi bi-chat"></i> {tuit.replies}
            </div>
            <div className="col-3">
                <i className="bi bi-arrow-repeat"></i> {tuit.retuits}
            </div>
            <div className="col-3">
                <ConditionalLiked liked = {tuit.liked}/> {tuit.likes}
            </div>
            <div className="col-3">
                <i className="bi bi-share"></i>
            </div>
        </div>
    )
}

export default TuitStats;
