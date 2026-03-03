const regex = /^---\s*[\r\n]+title:\s*(.+)[\r\n]+description:\s*(.+)[\r\n]+---\s*[\r\n]+([\s\S]*)$/

export function parsePost (content: string) {
  const match = content.match(regex)

  return {
    title: match?.[1] ?? 'Untitled',
    description: match?.[2] ?? '',
    content: match?.[3] ?? ''
  }
}
