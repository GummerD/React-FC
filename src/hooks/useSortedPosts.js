import {useMemo} from "react"

export default function useSortedPosts (posts, sort){
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [posts, sort]);

  return sortedPosts
}