import React from "react";

const PostItem = function ({post, number}) {
    //console.log(post);
    return (
        <div className="post">
            <div className="post__content">
                <strong>{number}.{post.title}</strong>
                <div>
                    {post.description}
                </div>
            </div>
            <div className="post__btns">
                <button>Delete</button>
            </div>
        </div>
    );
}

export default PostItem;