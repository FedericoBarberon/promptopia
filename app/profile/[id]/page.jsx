'use client'

import Profile from '@components/Profile'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function OtherProfile ({ params }) {
  const [posts, setPosts] = useState([])
  const { id } = params
  const searchParams = useSearchParams()
  const name = searchParams.get('name')

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${id}/posts`)
      const data = await res.json()

      setPosts(data)
    }

    fetchPosts()
  }, [id])

  return (
    <Profile
      name={name}
      desc={`Welcome to ${name}'s personalized profile page. Explore ${name}'s exceptional prompts and be inspired by the power of their imagination`}
      data={posts}
    />
  )
}
