export function getHits (content: string) {
  const regex = /hits:\s*([\d,]+)/i
  const match = content.match(regex)
  if (match == null || match.length < 2) {
    return 0
  }

  return parseInt(match[1].replace(/,/g, ''))
}
