import Project from '@/components/projects/project'

export default function Projects () {
  return (
    <main
      className='grid place-items-center h-[100vh]'
    >
      <Project
        image='/projects/exolace_2k.png'
        title='ExoLace'
        href='https://exo-lace.vercel.app/'
        description={
          <>
            <i>Next.JS</i> and <i>react-three-fiber</i> project to visualize exoplanetary systems.
          </>
        }
      />
    </main>
  )
}
