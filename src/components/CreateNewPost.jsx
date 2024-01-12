import React, {useState}from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'
const CreateNewPost = ({create, forButton}) => {

    const [post, setPost] = useState({
        title: '',
        description: ''
    })

    function addNewPost(event) {
        event.preventDefault();

        const newPost = {
          ...post,  id: Date.now()
        };

        create(newPost);

        setPost({
          title: '',
          description: ''
        });
      }

    return (
        <form action="">
            <MyInput
                value={post.title}
                onChange={event => setPost({ ...post, title: event.target.value })}
                type="text"
                placeholder="Название поста"
            />
            <MyInput
                value={post.description}
                onChange={event => setPost({ ...post, description: event.target.value })}
                type="text"
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost} >Создать пост</MyButton>
        </form>
    )
}

export default CreateNewPost
