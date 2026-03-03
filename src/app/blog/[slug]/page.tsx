import { join } from 'path'
import { readdirSync, readFileSync } from 'fs'
import Link from 'next/link'
import Content from '@/components/blog/content'
import { parsePost } from '@/utils/post'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams () {
  const directory = join(process.cwd(), 'public/posts')
  const files = readdirSync(directory).filter((file) => file.endsWith('.md'))
  return files.map((file) => ({
    slug: file.replace('.md', '')
  }))
}

export default async function PostPage ({
  params
}: PostPageProps) {
  const { slug } = await params
  const filePath = join(process.cwd(), 'public/posts', `${slug}.md`)
  try {
    const fileContents = readFileSync(filePath, 'utf8')
    const { title, description, content } = parsePost(fileContents)

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
          <Content
            title={title}
            description={description}
            content={content}
          />
        </div>
      </main>
    )
  } catch (error: any) {
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
          <p
            className='text-center text-secondary mt-8'
          >
            Post not found.
          </p>
        </div>
      </main>
    )
  }
}
