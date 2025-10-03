import HeaderContainer from '@/components/header/header-container'
import ProjectCard from '@/components/projects/project-card'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website showcasing my projects and skills.',
    github: 'https://github.com/amoraschi/amoraschi.github.io',
    img: '/portfolio.png'
  },
  {
    title: 'ExoLace',
    description: 'Next.JS and R3F project to visualize exoplanetary systems.',
    github: 'https://github.com/amoraschi/ExoLace',
    img: '/exolace.png'
  },
  {
    title: 'WuolApp',
    description: 'Application to access Wuolah without a browser.',
    github: 'https://github.com/amoraschi/WuolApp',
    img: '/wuolapp.png'
  },
  {
    title: 'spain-cities-webpage',
    description: 'Webpage to visualize the GeoJSON files of Spanish cities. Data from spain-cities-geojson.',
    github: 'https://github.com/amoraschi/spain-cities-webpage',
    img: '/spain-cities-webpage.png'
  },
  {
    title: 'spain-cities-geojson',
    description: 'GeoJSON road files for the capital cities of Spanish provinces.',
    github: 'https://github.com/amoraschi/spain-cities-geojson',
    img: '/spain-cities-geojson.png'
  },
  {
    title: 'YASAC',
    description: 'Yet Another Simple Academic Computer (YASAC) - Small project to learn Verilog and Assembly, and an attempt at refactoring the original code.',
    github: 'https://github.com/amoraschi/YASAC'
  },
  {
    title: 'ZooKeeper',
    description: 'ZooKeeper is a custom Discord bot. It provides some functionalities to keep track of many members that decide to not cooperate with moderators or helpers.',
    github: 'https://github.com/amoraschi/ZooKeeper'
  }
]

export default function ProjectsPage () {
  return (
    <main
      className='min-h-screen bg-gray-950'
    >
      <HeaderContainer />
      <div
        className='grid py-20 lg:p-20 lg:grid-cols-3'
      >
        {
          projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))
        }
      </div>
    </main>
  )
}
