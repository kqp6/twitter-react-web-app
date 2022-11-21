import React from "react";
//import ConditionalLiked from "./liked";
import {updateTuitThunk} from "../../../services/tuits-thunks";
import {useDispatch} from "react-redux";


const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return(
        <div className="row">
            <div className="col-3">
                <i className="bi bi-chat"></i> {tuit.replies}
            </div>
            <div className="col-3">
                <i className="bi bi-arrow-repeat"></i> {tuit.retuits}
            </div>
            <div className="col-3">
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1
                }))} className="bi bi-heart-fill me-2 text-danger"></i> {tuit.likes}
            </div>
            <div className="col-3">
                <i className="bi bi-share"></i>
            </div>
        </div>
    )
}

export default TuitStats;
