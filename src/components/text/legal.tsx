export default function Legal () {
  return (
    <span
      className='absolute bottom-2 left-2 text-xs text-gray-500 select-none'
    >
      <abbr
        title='This site and all its contents are licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.'
      >
        CC BY-NC 4.0
      </abbr> {new Date().getFullYear()} © Angelo Sho Moraschi.
    </span>
  )
}
