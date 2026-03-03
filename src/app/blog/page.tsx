import { join } from 'path'
import { readdirSync } from 'fs'
import Post from '@/components/blog/post'
import { getPosts } from '@/utils/post'

export default function BlogPage () {
  const directory = join(process.cwd(), 'public/posts')
  const files = readdirSync(directory).filter((file) => file.endsWith('.md'))
  const posts = getPosts(files, directory)

  return (
    <main
      className='min-h-screen flex justify-center py-32 px-4'
    >
      <div
        className='max-w-4xl flex flex-col gap-4'
      >
        {
          posts.length > 0 ? (
            posts.map((post) => (
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
