import Project from '@/components/projects/project'
import { projects } from '@/utils/data'

export default function ProjectsPage () {
  return (
    <main
      className='min-h-screen flex justify-center py-32 px-4'
    >
      <div
        className='max-w-4xl flex flex-col gap-4'
      >
        {
          projects.map((project) => (
            <Project
              key={project.title}
              {...project}
            />
          ))
        }
      </div>
    </main>
  )
}
