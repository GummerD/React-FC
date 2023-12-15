import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = function ({post, number, deletePost}) {
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
                <MyButton onClick={()=>deletePost(post)}>Delete</MyButton>
            </div>
        </div>
    );
}

export default PostItem;