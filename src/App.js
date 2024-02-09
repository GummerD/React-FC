import React, { useEffect, useMemo, useState } from "react";
import PostList from "./components/PostList.jsx";
import './style/App.css';
import CreateNewPost from "./components/CreateNewPost.jsx";
import MyModal from "./components/UI/MyModal/MyModal.jsx";
import MyButton from "./components/UI/button/MyButton.jsx";
import usePosts from "./hooks/usePosts.js"
import PostsFilter from "./components/PostsFilter.jsx";
import PostService from "./API/PostService.js";
import MyLoader from "./components/UI/Loader/MyLoader.jsx";
import useFetching from "./hooks/useFetching.js";
import { getPageCount } from "./utils/pages.js";
import usePagination from "./hooks/usePagination.js";

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [visibleModale, setVisibleModal] = useState(false);

  const [totalPages, setTotalPages] = useState(0);
  const [queryParams, setQueryparams] = useState({limit: 10, page: 1});

  const pagesArrayForPagination = usePagination(totalPages);

  const [fetchPost, isPostLoading, postError] = useFetching(async () => {
      const response = await PostService.getAllPosts(queryParams.limit, queryParams.page);
      setPosts(response.data);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, queryParams.limit));      
  });

  const soretedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPost();
  }, [filter, queryParams.page]);

  function createPost(newPost) {
    setPosts([...posts, newPost])
    setVisibleModal(false)
  }

  function deletePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  function changePage(numberPage){
    setQueryparams({...queryParams, page: numberPage})
  }

  return (
    <div className="App">

      <MyButton
        style={{ marginTop: '30px' }}
        onClick={() => setVisibleModal(true)}
      >
        Создать новый пост
      </MyButton>

      <MyModal
        visible={visibleModale}
        setVisible={setVisibleModal}
      >
        <CreateNewPost create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />

      <PostsFilter
        filter={filter}
        setFilter={setFilter}
      />

      {postError &&
        <div>Произошла ошибка ${postError}</div>}

      {
        isPostLoading
          ? <div style= {{display:'flex', justifyContent:"center", marginTop: '50px'}}>
              <MyLoader/>
            </div>
          : <PostList
            deletePost={deletePost}
            posts={soretedAndSearchPosts}
            title={'The posts list 1'}
          />
      }

      <div className="pagination_wrapper">
      {
        pagesArrayForPagination.map(p => 
          <span
            onClick={()=>changePage(p)} 
            key = {p} 
            className={ queryParams.page === p ? "pagination_btn pagination_current" : "pagination_btn"}>
            {p}
          </span>
        )
      }
      </div>


    </div>
  );
}

export default App;
