import HeaderContainer from '@/components/header/header-container'
import Link from 'next/link'

const links = [
  'https://dontasktoask.com/',
  'https://xyproblem.info/',
  'https://nohello.net/',
  'https://amoraschi.github.io/does-not-work/'
]

export default function AboutPage () {
  return (
    <main
      className='min-h-screen bg-gray-950'
    >
      <HeaderContainer />
      <div
        className='px-4 py-20 lg:p-20'
      >
        <h1
          className='text-4xl font-bold text-white text-center'
        >
          Who am I?
        </h1>
        <div
          className='mt-4 text-lg text-gray-300 mx-auto lg:w-1/2'
        >
          <p>
            I am a Software Engineering student at the University of Seville, Spain.
          </p>
          <p>
            Experienced in front-end, back-end, cross-platform desktop applications, automation, and data scraping.
          </p>
          <p>
            As a developer, I strive to write clean, efficient, and maintainable code. I am passionate about learning new technologies and improving my skills.
          </p>
          <p
            className='my-4'
          >
            I am a member of Coheteros US (University Amateur Rocketry Association), and IoTUS (University Internet of Things Association), where I have had the opportunity to work on exciting projects and collaborate with other students.
          </p>
          <p>
            I am a native Spanish speaker, with advanced English skills, conversational Italian and Japanese, and basic French.
          </p>
          <p
            className='my-4'
          >
            The following links have been useful and entertaining resources that have significantly improved my communication skills and overall effectiveness as a developer:
          </p>
          <ul
            className='space-y-1 text-blue-400'
          >
            {
              links.map((link, index) => (
                <li
                  key={index}
                >
                  <Link
                    href={link}
                    target='_blank'
                    className='hover:underline'
                  >
                    {link}
                  </Link>
                </li>
              ))
            }
          </ul>
          <p
            className='mt-4'
          >
            Some of my hobbies include video games (mainly story-driven or open-world), astronomy, and Chinese martial arts.
          </p>
        </div>
      </div>
    </main>
  )
}
