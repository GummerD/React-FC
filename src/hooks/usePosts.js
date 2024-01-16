import {useMemo} from "react"
import useSortedPosts from "./useSortedPosts"

export default function usePosts (posts, sort, query) {
  const sortedPosts = useSortedPosts(posts, sort,);
  
  const soretedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }, [sortedPosts, query]);

  return soretedAndSearchPosts
   
}


