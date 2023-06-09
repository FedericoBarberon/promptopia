'use client'

import { useEffect, useState } from 'react'
import PromptCard from './PromptCard'
import { useFilter } from '@hooks/useFilter'

function PromptCardList ({ data, handleTagClick }) {
  return (
    <div className='mt-16 prompt_layout'>
      {
        data.map(post => (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))
      }
    </div>
  )
}

export default function Feed () {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])
  const filteredPosts = useFilter(posts, searchText)

  const handleSearchChange = (event) => {
    setSearchText(event.target.value)
  }

  const handleTagClick = (tag) => setSearchText(tag)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/prompt')
      const data = await res.json()

      setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input type='text' placeholder='Search for a tag or a username' value={searchText} onChange={handleSearchChange} required className='search_input peer' />
      </form>

      <PromptCardList
        data={filteredPosts}
        handleTagClick={handleTagClick}
      />
    </section>
  )
}
