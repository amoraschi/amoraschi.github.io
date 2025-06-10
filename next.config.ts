import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
  images: {
    remotePatterns: [
      new URL('https://avatars.githubusercontent.com/**')
    ]
  }
})
