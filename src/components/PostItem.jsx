import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = function ({post, number, deletePost, ...props}) {
    //console.log(post);
    const navigate  = useNavigate();
    console.log(navigate)

    function goOnePage(id){
        navigate(`/onePost/${id}`)
    }

    return (
        <div className="post">
            <div className="post__content">
                <strong>{post.id}.{post.title}</strong>
                <div>
                    {post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={()=>goOnePage(post.id)}>Open</MyButton>
            </div>
            <div className="post__btns">
                <MyButton onClick={()=>deletePost(post)}>Delete</MyButton>
            </div>
        </div>
    );
}

export default PostItem;