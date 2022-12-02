import React from "react";
import {updateTuitThunk} from "../../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const ConditionalLiked = ({tuit}) => {
    const dispatch = useDispatch();
    if (tuit.liked) {
        return (<i onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes - 1,
            liked: false
        }))} className={`bi me-2 ${tuit.liked ? "text-danger bi-heart-fill" : "bi-heart"}`}></i>);
    } else {
        return (<i onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + 1,
            liked: true
        }))} className={`bi me-2 ${tuit.liked ? "text-danger bi-heart-fill" : "bi-heart"}`}></i>);
    }
};

export default ConditionalLiked;