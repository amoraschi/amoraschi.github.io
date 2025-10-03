import HeaderButton from '@/components/header/header-button'

const links = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Projects',
    href: '/projects'
  },
  {
    label: 'About Me',
    href: '/about'
  }
]

export default function HeaderContainer () {
  return (
    <div
      className='absolute top-0 w-full flex justify-center'
    >
      <div
        className='flex justify-between items-center m-2'
      >
        {
          links.map(({ label, href }, index) => (
            <HeaderButton
              key={index}
              label={label}
              href={href}
            />
          ))
        }
      </div>
    </div>
  )
}
