interface TabsButtonProps {
  id: string
  isActive: boolean
  setSelectedTab: () => void
}

export default function TabsButton ({ id, isActive, setSelectedTab }: TabsButtonProps) {
  return (
    <button
      onClick={setSelectedTab}
      className={`
        text-black
        text-lg
        font-semibold
        px-4
        py-2
        rounded-t-lg
        ${isActive ? 'bg-white' : 'bg-gray-200'}
      `}
    >
      {id.toUpperCase()}
    </button>
  )
}
