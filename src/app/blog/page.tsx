'use client'

import { useEffect, useState } from 'react'
import Post from '@/components/blog/post'
import { POST_LIST } from '@/utils/data'

export default function BlogPage () {
  const [posts, setPosts] = useState<Post[]>([])

  const sortPosts = (a: Post, b: Post) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  }

  useEffect(() => {
    const abortController = new AbortController()
    const fetchPosts = async () => {
      try {
        const response = await fetch(POST_LIST, { signal: abortController.signal })
        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }

        const data = await response.json()
        setPosts(data)
      } catch (error: any) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchPosts()
    return () => abortController.abort('Component unmounted')
  }, [])

  return (
    <main
      className='min-h-screen flex justify-center py-32 px-4'
    >
      <div
        className='max-w-4xl flex flex-col gap-4'
      >
        {
          posts.length > 0 ? (
            posts.toSorted(sortPosts).map((post) => (
              <Post
                key={post.slug}
                {...post}
              />
            ))
          ) : (
            <p
              className='text-center text-secondary'
            >
              No posts available.
            </p>
          )
        }
      </div>
    </main>
  )
}
