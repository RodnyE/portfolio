
import { useState, useEffect } from 'react'
import { Transition, Button, Navbar, Footer } from '@/components'
import { H1, LineText, HabilityCard, TechCard } from './components'
import { PetRobot } from '@/components/pet'
import { CursorTarget } from '@/components/cursor'

import heroImg from '@/assets/hero.png'
import contributionsImg from '@/assets/contributions.svg'
import cvPdf from '@/assets/CV.pdf'

import { techImgs, habilityImgs } from '@/utils/icons' 

const techs = [
  { icon: techImgs.react, title: 'React' },
  { icon: techImgs.angular, title: 'Angular' },
  { icon: techImgs.vue, title: 'Vue' }, 

  { icon: techImgs.bootstrap, title: 'Bootstrap' }, 
  { icon: techImgs.tailwind, title: 'Tailwind CSS' },

  { icon: techImgs.node, title: 'Node.js' },
  { icon: techImgs.typescript, title: 'TypeScript' },
  { icon: techImgs.mongo, title: 'MongoDB' },
  { icon: techImgs.postgresql, title: 'PostgreSQL' },

  { icon: techImgs.docker, title: 'Docker' }, 
  { icon: techImgs.git, title: 'Git' }, 
  { icon: techImgs.python, title: 'Python' }, 
]

export function HomePage({ show }) {
  const [showPage, setShowPage] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const handlePointer = e => {
    if (e.targetTouches) e = e.targetTouches[0];

    setPointer({
      x: e.clientX,
      y: e.clientY,
    })
  }

  // force delay 
  useEffect(() => {
    if (show) setTimeout(() => setShowPage(true), 500);
    setShowPage(false);
  }, [show]);

  return (
    <Transition type='slide-down' in={showPage}>
      <div
        className='w-full h-full'
        onTouchMove={handlePointer}
        onMouseDown={handlePointer}
        onMouseUp={handlePointer}
        onMouseMove={handlePointer}
      >
        <Navbar />
        <div className='py-10 px-5 flex flex-col'>

          <div className='flex items-center justify-between'>

            <div className='flex flex-col'>
              <H1> Hola ! </H1>
              <LineText>
                Me llamo
                <span className='text-tertiary-o'> Rodny Estrada </span>,
                soy programador fullstack
              </LineText>

              <div className='flex self-start m-4 space-x-3 text-xl'>
                <Button
                  href={cvPdf}
                  download='rodny_cv.pdf'
                  children='Descargar CV'
                />
                <Button
                  href='https://github.com/RodnyE'
                  children='Github'
                />
              </div>
            </div>

            <img className='max-w-xl hidden lg:inline' src={contributionsImg} />
          </div>


          <div className='my-3 flex items-center flex-wrap md:flex-nowrap'>

            <img
              className='md:my-6 w-full max-w-md'
              src={heroImg}
            />

            <LineText>
              Me dedico a construir soluciones informáticas a cualquier cuestión que te plantees!
              Uso tecnologías tanto para páginas web como para desarrollar aplicaciones híbridas en dispositivos móviles.
            </LineText>
          </div>

          <div className='my-3 flex flex-col'>
            <H1> Capacidades </H1>
            <div className='flex flex-wrap justify-center md:justify-start m-3'>
              <HabilityCard iconSrc={habilityImgs[0]} header='Backend & Frontend' content='Poder con el ecosistema de Javascript para el desarrollo de aplicaciones web/móviles/escritorio/servidores' />
              <HabilityCard iconSrc={habilityImgs[1]} header='Nube' content='Conocimientos en el despliegue de aplicaciones basadas en la nube [AWS y Azure principalmente].' />
              <HabilityCard iconSrc={habilityImgs[2]} header='Dev-ops' content='Es importante la comunicación con el equipo de desarrollo. Buenos métodos de documentacion de código y buenas prácticas son clave.' />
              <HabilityCard iconSrc={habilityImgs[3]} header='Optimización' content='Mi enfoque se basa principalmente en la optimización y la eficiencia, permitiendome construir aplicaciones robustas y escalables.' />
              <HabilityCard iconSrc={habilityImgs[4]} header='Aprendizaje continuo' content='Me mantengo actualizado con las últimas tendencias y tecnologías en el mundo del desarrollo web, siempre buscando nuevas formas de mejorar mis habilidades.' />
            </div>
          </div>

          <div className='my-3 flex flex-col'>
            <H1> Tecnologías </H1>
            <div className='flex flex-wrap justify-center md:justify-start m-3'>
              {
                techs.map((tech, i) => (
                  <TechCard key={i} iconSrc={tech.icon} header={tech.title}/>
                ))
              }
            </div>
          </div>

          <div className='flex flex-col'>
            <H1> Contáctame </H1>
            <div className='flex flex-wrap justify-center md:justify-start m-3'>
              
              
            </div>
          </div>
        </div>
        <Footer />

        {/** Extras **/}
        <PetRobot watchPosition={pointer} />
        <CursorTarget position={pointer} />
      </div>
    </Transition >

  )
}