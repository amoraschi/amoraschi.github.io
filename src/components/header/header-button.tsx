'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface HeaderButtonProps {
  label: string
  href: string
}

export default function HeaderButton ({
  label,
  href
}: Readonly<HeaderButtonProps>) {
  const pathname = usePathname()
  const selected = pathname === href

  return (
    <Link
      href={href}
      className={`text-sm px-4 py-2 border-b-2 hover:bg-gray-400/30 transition lg:px-6 ${selected ? 'border-white text-white' : 'border-transparent text-gray-300'}`}
    >
      {label.toUpperCase()}
    </Link>
  )
}
