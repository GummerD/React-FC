import React, {useState } from "react";
import PostList from "./components/PostList.jsx";
import './style/App.css';
import CreateNewPost from "./components/CreateNewPost.jsx";
import MyModal from "./components/UI/MyModal/MyModal.jsx";
import MyButton from "./components/UI/button/MyButton.jsx";
import usePosts from "./hooks/usePosts.js"
import PostsFilter from "./components/PostsFilter.jsx";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Some title 1", description: "Some description 1" },
    { id: 2, title: "Some title 3", description: "Some description 2" },
    { id: 3, title: "Some title 2", description: "Some description 3" },
    { id: 4, title: "Some title 5", description: "Some description 4" },
    { id: 5, title: "Some title 4", description: "Some description 5" },
    { id: 6, title: "Some title 6", description: "Some description 6" },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [visibleModale, setVisibleModal] = useState(false)

  const soretedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  function createPost(newPost) {
    setPosts([...posts, newPost])
    setVisibleModal(false)
  }

  function deletePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">

      <MyButton
        style = {{marginTop: '30px'}}
        onClick={() => setVisibleModal(true)}
      >
          Создать новый пост
      </MyButton>

      <MyModal
        visible = {visibleModale}
        setVisible={setVisibleModal}
        >
        <CreateNewPost create={createPost}/>
      </MyModal>

      <hr style={{ margin: "15px 0" }} />

      <PostsFilter
        filter={filter}
        setFilter={setFilter}
      />

      <PostList
        deletePost={deletePost}
        posts={soretedAndSearchPosts}
        title={'The posts list 1'}
      />

    </div>
  );
}

export default App;
