import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
  images: {
    unoptimized: true,
    remotePatterns: [
      new URL('https://avatars.githubusercontent.com/**')
    ]
  }
})
