
import { H1, LineText, TechCard } from '../components'
import { techImgs } from '@/utils/icons'


const techs = [
  { icon: techImgs.node, title: 'Node.js', content: 'Servidores y gestión de proyectos en general.' },
  { icon: techImgs.react, title: 'React', content: 'Framework para frontend. Páginas web eficientes con MERN Stack y aplicaciones móviles con React Native.' },
  { icon: techImgs.angular, title: 'Angular', content: 'Framework para frontend. Aplicaciones robustas y bien estructuradas con MEAN Stack.' },
  { icon: techImgs.vue, title: 'Vue', content: 'Framework para frontend. Desarrollo de aplicaciones web escalables y mantenibles con MEVN Stack.' },

  { icon: techImgs.bootstrap, title: 'Bootstrap', content: 'Framework de CSS para diseño de interfaces de usuario.' },
  { icon: techImgs.tailwind, title: 'Tailwind CSS', content: 'Framework de CSS para diseño de interfaces de usuario personalizables.' },

  { icon: techImgs.typescript, title: 'TypeScript', content: 'Lenguaje de programación para desarrollo de aplicaciones escalables y mantenibles.' },
  { icon: techImgs.mongo, title: 'MongoDB', content: 'Base de datos NoSQL para almacenamiento de datos en aplicaciones web.' },
  { icon: techImgs.postgresql, title: 'PostgreSQL', content: 'Base de datos relacional para almacenamiento de datos en aplicaciones web.' },

  { icon: techImgs.docker, title: 'Docker', content: 'Plataforma de contenedores para desarrollo y despliegue de aplicaciones.' },
  { icon: techImgs.git, title: 'Git', content: 'Sistema de control de versiones para desarrollo colaborativo.' },
  { icon: techImgs.python, title: 'Python', content: 'Lenguaje de programación para desarrollo de aplicaciones web y análisis de datos.' },
  { icon: techImgs.c, title: 'C/C++', content: 'Lenguajes de programación para desarrollo de aplicaciones de sistema y juegos.' },
  { icon: techImgs.java, title: 'Java', content: 'Lenguaje de programación para desarrollo de aplicaciones empresariales y móviles.' },
]

export function TechSection() {
  return (
    <div id='techs' className='py-5 flex flex-col'>
      <H1> Tecnologías </H1>
      <LineText>
        Herramientas y lenguajes que más utilizo en mi día a día:
      </LineText>
      <div className='flex flex-wrap justify-center md:justify-start m-3'>
        {
          techs.map((tech, i) => (
            <TechCard
              key={i}
              iconSrc={tech.icon}
              header={tech.title}
              content={tech.content}
            />
          ))
        }
      </div>
    </div>
  )
}