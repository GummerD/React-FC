import {useMemo} from "react"

function useSortedPosts (posts, sort){
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [posts, sort]);

  return sortedPosts
}


export default function usePosts (posts, sort, query) {
  const sortedPosts = useSortedPosts(posts, sort,);
  
  const soretedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }, [sortedPosts, query]);

  return soretedAndSearchPosts
   
}


