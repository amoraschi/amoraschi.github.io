import Home from '@/Home/Home'
import { useState } from 'react'
import TabsButton from './TabsButton'
import Projects from '@/Projects/Projects'

const tabs = [
  {
    id: 'home',
    element: <Home />
  },
  {
    id: 'projects',
    element: <Projects />
  }
]

export default function Tabs () {
  const [selectedTab, setSelectedTab] = useState('home')

  return (
    <div
      className={`
        absolute
        inset-0
        select-none
        w-full
        h-full
        bg-white
      `}
    >
      <div
        className={`
          absolute
          inset-0
          top-0
          left-0
          w-full
          h-10
          bg-gray-200
          px-1
          space-x-1
        `}
      >
        {
          tabs.map((tab) => (
            <TabsButton
              key={tab.id}
              id={tab.id}
              isActive={selectedTab === tab.id}
              setSelectedTab={() => setSelectedTab(tab.id)}
            />
          ))
        }
      </div>
      <div
        className={`
          absolute
          inset-0
          top-10
          w-full
        `}
      >
        {
          tabs.map((tab) => {
            return (
              <div
                key={tab.id}
                className={`
                  ${selectedTab === tab.id ? 'block' : 'hidden'}
                `}
              >
                {tab.element}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
