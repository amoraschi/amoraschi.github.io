'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Content from '@/components/blog/content'
import { parsePost } from '@/utils/post'

export default function PostPage () {
  const params = useSearchParams()
  const slug = params.get('slug')

  const [post, setPost] = useState<string | null>(null)
  const [header, setHeader] = useState<PostHeader | null>(null)

  useEffect(() => {
    const abortController = new AbortController()
    const fetchPost = async () => {
      try {
        const response = await fetch(`/posts/${slug}`, { signal: abortController.signal })
        if (!response.ok) {
          throw new Error('Failed to fetch post')
        }

        const data = await response.text()
        const { title, description, content } = parsePost(data)
        setPost(content)
        setHeader({ title, description })
      } catch (error: any) {
        console.error('Error fetching post:', error)
      }
    }

    if (slug != null) {
      fetchPost()
    }

    return () => abortController.abort('Component unmounted')
  }, [slug])
  
  return (
    <main
      className='min-h-screen flex justify-center py-32 px-4'
    >
      <div
        className='max-w-4xl w-full'
      >
        <Link
          href='/blog'
          className='text-blue-500 hover:underline'
        >
          Back
        </Link>
        {
          post == null || header == null ? (
            <p
              className='text-center text-secondary'
            >
              Post not found.
            </p>
          ) : (
            <Content
              {...header}
              content={post}
            />
          )
        }
      </div>
    </main>
  )
}
