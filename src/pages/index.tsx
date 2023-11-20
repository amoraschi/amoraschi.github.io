import { useEffect, useState } from 'react'
import axios from 'axios'
import HeadElement from '@/components/HeadElement/HeadElement'
import Home from '@/components/Home/Home'
import Stats from '@/components/Stats/Stats'

export default function HomePage () {
  const [stats, setStats] = useState({
    followers: 0,
    following: 0,
    public_repos: 0,
    bio: '',
    name: '',
    company: ''
  })

  useEffect(() => {
    const control = new AbortController()
    axios.get('https://api.github.com/users/amoraschi', {
      signal: control.signal
    })
      .then((response) => {
        setStats({
          followers: response.data.followers,
          following: response.data.following,
          public_repos: response.data.public_repos,
          bio: response.data.bio,
          name: response.data.login,
          company: response.data.company
        })
      })
      .catch((error) => {
        console.log(error)
      })

    return () => {
      control.abort()
    }
  }, [])

  return (
    <>
      <HeadElement />
      <Home
        stats={stats}
      />
      {/* <Stats
        stats={stats}
      /> */}
    </>
  )
}
