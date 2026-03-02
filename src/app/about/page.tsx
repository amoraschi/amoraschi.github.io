import Education from '@/components/about/education'
import Section from '@/components/about/section'
import { education } from '@/utils/data'

export default function AboutPage () {
  return (
    <main
      className='min-h-screen flex justify-center py-32 px-4'
    >
      <div
        className='max-w-3xl flex flex-col gap-12'
      >
        <Section
          title='Who Am I?'
          texts={[
            "Software Engineering student experienced in front-end, back-end, cross-platform desktop applications, automation, and data scraping.",
            "I focus on creating clean, intuitive interfaces and scalable full-stack solutions, with experience in real-time systems and SEO-optimized platforms.",
            "I enjoy turning complex ideas into reliable, high-performance products and continuously improving through hands-on projects and collaboration."
          ]}
        />
        <div>
          <p
            className='text-center text-4xl font-bold'
          >
            Education
          </p>
          <div
            className='flex flex-col gap-4'
          >
            {
              education.map((edu) => (
                <Education
                  key={edu.institution}
                  period={edu.period}
                  course={edu.course}
                  institution={edu.institution}
                  description={edu.description}
                />
              ))
            }
          </div>
        </div>
        <Section
          title='Other Information'
          texts={[
            "I am fluent in Spanish, near-native in Italian and Japanese, advanced in English, with intermediate knowledge of French.",
            "The following links have been useful and entertaining resources that have significantly improved my communication skills and overall effectiveness as a developer:",
            "https://dontasktoask.com/",
            "https://xyproblem.info/",
            "https://nohello.net/",
            "https://amoraschi.github.io/does-not-work/",
            "Some of my hobbies include video games (mainly story-driven or open-world), astronomy, and Chinese martial arts."
          ]}
        />
      </div>
    </main>
  )
}
