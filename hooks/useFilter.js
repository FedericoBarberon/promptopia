import { useMemo } from 'react'

export const useFilter = (posts, input) => {
  const filteredPosts = useMemo(() => {
    return posts.filter(post => (
      post.prompt.toLowerCase().includes(input.toLowerCase()) || post.tag.toLowerCase().includes(input.toLowerCase()) || post.creator.username.includes(input.toLowerCase())
    ))
  }, [posts, input])

  return filteredPosts
}
