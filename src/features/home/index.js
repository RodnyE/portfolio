
import { useState, useEffect } from 'react'
import { Transition, Button, Navbar, Footer } from '@/components'
import { H1, LineText, HabilityText } from './components'
import { PetRobot } from '@/components/pet'
import { CursorTarget } from '@/components/cursor'

import heroSrc from '@/assets/hero.png'
import icon01Src from '@/assets/icon-01.png'
import icon02Src from '@/assets/icon-02.png'
import icon03Src from '@/assets/icon-03.png'
import icon04Src from '@/assets/icon-04.png'
import icon05Src from '@/assets/icon-05.png'
import contributionsSrc from '@/assets/contributions.svg'
import cvPdf from '@/assets/CV.pdf'


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

            <img className='max-w-xl hidden lg:inline' src={contributionsSrc}/>
          </div>


          <div className='my-3 flex items-center flex-wrap md:flex-nowrap'>

            <img
              className='md:my-6 w-full max-w-md'
              src={heroSrc}
            />

            <LineText>
              Me dedico a construir soluciones informáticas a cualquier cuestión que te plantees!
              Uso tecnologías tanto para páginas web como para desarrollar aplicaciones híbridas en dispositivos móviles.
            </LineText>
          </div>

          <H1> Capacidades </H1>
          <div className='flex flex-wrap justify-center md:justify-start m-3'>
            <HabilityText iconSrc={icon04Src} header='Backend & Frontend' content='Poder con el ecosistema de Javascript para el desarrollo de aplicaciones web/móviles/escritorio/servidores' />
            <HabilityText iconSrc={icon02Src} header='Nube' content='Conocimientos en el despliegue de aplicaciones basadas en la nube [AWS y Azure principalmente].' />
            <HabilityText iconSrc={icon03Src} header='Dev-ops' content='Es importante la comunicación con el equipo de desarrollo. Buenos métodos de documentacion de código y buenas prácticas son clave.' />
            <HabilityText iconSrc={icon01Src} header='Optimización' content='Mi enfoque se basa principalmente en la optimización y la eficiencia, permitiendome construir aplicaciones robustas y escalables.' />
            <HabilityText iconSrc={icon05Src} header='Aprendizaje continuo' content='Me mantengo actualizado con las últimas tendencias y tecnologías en el mundo del desarrollo web, siempre buscando nuevas formas de mejorar mis habilidades.' />
          </div>
        </div>
        <Footer />

        {/** Extras **/}
        <PetRobot watchPosition={pointer} />
        <CursorTarget position={pointer} />
      </div>
    </Transition>

  )
}