import React from "react";
import propTypes from "prop-types";
import "./post-component.css"

const Post = ({id, title}:{id:any, title:any}) => {
    return (
        <div>
            <div className="container-fluid" id="post-img">
                {title}
                <img 
                className="Posy__image" 
                src={`https://source.unsplash.com/random?sig=${id}`} />
            </div>
        </div>
    )
}

Post.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired
}

export default Post