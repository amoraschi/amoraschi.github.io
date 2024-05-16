import Link from 'next/link'

interface HeadbarLinkProps {
  href: string
  external?: boolean
  children?: React.ReactNode
}

export default function HeadbarLink ({
  href,
  external,
  children
}: HeadbarLinkProps) {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      className='text-white hover:underline'
    >
      {children}
    </Link>
  )
}
