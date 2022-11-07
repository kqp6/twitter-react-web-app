import React from "react";

const ConditionalLiked = ({liked}) => {
    if (liked) {
        return (<i className="bi bi-heart-fill text-danger"></i>);
    } else {
        return (<i className="bi bi-heart "></i>);
    }
};

export default ConditionalLiked;