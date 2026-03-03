import { join } from 'path'
import { readFileSync } from 'fs'

const regex = /^---\s*[\r\n]+title:\s*(.+)[\r\n]+description:\s*(.+)[\r\n]+---\s*[\r\n]+([\s\S]*)$/

export function parsePost (content: string) {
  const match = content.match(regex)

  return {
    title: match?.[1] ?? 'Untitled',
    description: match?.[2] ?? '',
    content: match?.[3] ?? ''
  }
}

export function getPosts (files: string[], directory: string) {
  return files.map(filename => {
    const match = filename.match(/^post-(\d{4}-\d{2}-\d{2}T\d{2}-\d{2})\.md$/)
    const date = match ? match[1].replace(/T(\d{2})-(\d{2})/, 'T$1:$2:00Z') : new Date().toISOString()
    const filePath = join(directory, filename)
    const fileContents = readFileSync(filePath, 'utf8')
    const { title, description } = parsePost(fileContents)

    return {
      slug: filename.replace('.md', ''),
      title,
      description,
      date
    }
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
