import HeadbarLink from '@/app/components/headbar/headbar-link'

const links = [
  {
    name: 'about',
    url: '/#about'
  },
  {
    name: 'projects',
    url: '/#projects'
  }
]

export default function Headbar () {
  return (
    <div
      className='fixed flex p-5 gap-8 w-full items-center'
    >
      {
        links.map((link, key) => (
          <HeadbarLink
            key={key}
            href={link.url}
          >
            {link.name}
          </HeadbarLink>
        ))
      }
    </div>
  )
}
