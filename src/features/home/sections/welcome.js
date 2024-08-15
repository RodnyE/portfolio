
import { ModernButton } from '@/components'
import { H1, LineText } from "../components"

import heroImg from '@/assets/hero.png'
import contributionsImg from '@/assets/contributions.svg'
import cvPdf from '@/assets/CV.pdf'

export function WelcomeSection() {
  return (
    <>
      <div className='flex items-center justify-between'>

        <div className='flex flex-col'>
          <H1> Hola ! </H1>
          <LineText>
            Me llamo
            <span className='text-tertiary-o'> Rodny Estrada </span>,
            soy programador fullstack
          </LineText>

          <div className='flex self-start m-4 space-x-3 text-xl'>
            <ModernButton
              href={cvPdf}
              download='rodny_cv.pdf'
              children='Descargar CV'
            />
            <ModernButton
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
    </>
  )
}