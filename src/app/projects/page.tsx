import HeaderContainer from '@/components/header/header-container'
import ProjectCard from '@/components/projects/project-card'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio website showcasing my projects, education, and hobbies.',
    github: 'https://github.com/amoraschi/amoraschi.github.io',
    img: '/assets/projects/portfolio.png'
  },
  {
    title: 'ExoLace',
    description: 'A Next.JS and React Three Fiber project to visualize exoplanetary systems using data from the NASA Exoplanet Archive.',
    github: 'https://github.com/amoraschi/ExoLace',
    img: '/assets/projects/exolace.png'
  },
  {
    title: 'WuolApp',
    description: 'A desktop application that allows users to access Wuolah, a platform for sharing academic materials, without using a web browser.',
    github: 'https://github.com/amoraschi/WuolApp',
    img: '/assets/projects/wuolapp.png'
  },
  {
    title: 'CollectUS',
    description: 'A dataset of academic staff members from the University of Seville, Spain, compiled by scraping publicly available information from the university\'s official websites.',
    github: 'https://github.com/amoraschi/CollectUS',
    img: '/assets/projects/collectus.png'
  },
  {
    title: 'spain-cities-webpage',
    description: 'A webpage to visualize the GeoJSON files of Spanish cities using Leaflet.js. Data sourced from the spain-cities-geojson repository.',
    github: 'https://github.com/amoraschi/spain-cities-webpage',
    img: '/assets/projects/spain-cities-webpage.png'
  },
  {
    title: 'spain-cities-geojson',
    description: 'A collection of GeoJSON files representing the road networks of the capital cities of Spanish provinces. Data sourced from the Overpass API.',
    github: 'https://github.com/amoraschi/spain-cities-geojson',
    img: '/assets/projects/spain-cities-geojson.png'
  },
  {
    title: 'YASAC',
    description: 'Yet Another Simple Academic Computer. A small project to learn Verilog and Assembly, and an attempt at refactoring the original code.',
    github: 'https://github.com/amoraschi/YASAC'
  },
  {
    title: 'ZooKeeper',
    description: 'A custom Discord bot designed to help moderators and helpers manage and track uncooperative members within a Discord server.',
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
