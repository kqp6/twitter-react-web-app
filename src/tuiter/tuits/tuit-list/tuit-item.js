import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../../services/tuits-thunks";

const TuitItem = (
    {
        tuit = { "_id": 1, 
        "topic": "Web Development", 
        "userName": "ReactJS",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "time": "2h",   
        "image": "react.png",
        "liked": false,
        "replies": 15,
        "retuits": 100,
        "likes": 200,
        "handle": "@reactjs",
        "tuit": "React will keep working on the client just like it does today, but this will be a new lever available to everyone to build faster apps by reducing bytes sent and streaming data as soon as it's ready."
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-3">
                    <img className="rounded-circle" height={48} width={48} src={require(`../../../images/${tuit.image}`)} alt=""/>
                </div>
                <div className="col-9">
                    <div><span className="fw-bold">{tuit.userName}</span> 
                    <i className="bi bi-patch-check-fill text-primary ms-2 me-1"></i> {tuit.handle} . {tuit.time}
                    <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i></div>
                    <div>{tuit.tuit}</div>
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;