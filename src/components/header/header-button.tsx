import Link from 'next/link'

interface HeaderButtonProps {
  label: string
  href: string
}

export default function HeaderButton ({
  label,
  href
}: Readonly<HeaderButtonProps>) {
  return (
    <Link
      href={href}
      className='text-sm text-white px-6 py-2 rounded-full hover:bg-gray-400/30 transition'
    >
      {label.toUpperCase()}
    </Link>
  )
}
