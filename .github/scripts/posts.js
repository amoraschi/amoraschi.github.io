const { join } = require('path')
const { readdirSync, writeFileSync, readFileSync } = require('fs')
const { execSync } = require('child_process')

const postsDirectory = join(process.cwd(), 'public/posts')
const regex = /^---\s*[\r\n]+title:\s*(.+)[\r\n]+description:\s*(.+)[\r\n]+---\s*[\r\n]+([\s\S]*)$/
const files = readdirSync(postsDirectory).filter((file) => file.endsWith('.md'))

function getGitDate (filePath) {
  try {
    const output = execSync(
      `git log -1 --format=%cI -- "${filePath}"`,
      { encoding: 'utf8' }
    ).trim()

    return new Date(output).toISOString()
  } catch {
    return new Date().toISOString()
  }
}

const posts = files.map((filename) => {
  const filePath = join(postsDirectory, filename)
  const fileContents = readFileSync(filePath, 'utf8')
  const match = fileContents.match(regex)

  return {
    slug: filename.replace('.md', ''),
    title: match?.[1] ?? 'Untitled',
    description: match?.[2] ?? '',
    date: getGitDate(filePath),
  }
})

posts.sort((a, b) => new Date(b.date) - new Date(a.date))
writeFileSync(join(postsDirectory, 'posts.json'), JSON.stringify(posts, null, 2))
console.log(`Updated posts.json with ${posts.length} posts.`)
