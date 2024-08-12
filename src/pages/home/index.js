
import { useState, useEffect } from 'react'
import { cx } from 'classix'
import { Transition, Navbar, Footer } from '@/components'
import { PetRobot } from '@/components/pet'
import { CursorTarget } from '@/components/cursor'
import heroSrc from '@/assets/hero.png'

function LineText ({children, ...props}) {
  return (
    <div
      data-aos='fade-right'
      data-aos-delay='200'
      className='p-4 text-body font-bold text-2xl border-l border-l-[var(--bg-tertiary)] border-l-4'
      {...props} 
    >
      {children}
    </div>
  )
}

function HabilityText ({children}) {
  
}

export function HomePage ({show}) {
  const [showPage, setShowPage] = useState(false);
  const [pointer, setPointer] = useState({x:0, y:0})
  const handlePointer = e => {
    if (e.targetTouches) e = e.targetTouches[0];
    
    setPointer({
      x: e.clientX,
      y: e.clientY,
    })
  }
  
  // force delay 
  useEffect(() => {
    if (show) setTimeout(() => setShowPage(true), 1200);
    setShowPage(false);
  }, [show]);
  
  return (
    <>
    <Transition type='slide-down' in={showPage}> 
      <div 
        className='w-full h-full' 
        onTouchMove={handlePointer}
        onMouseDown={handlePointer}
        onMouseUp={handlePointer}
        onMouseMove={handlePointer}
      >  
        <Navbar/>
        <div className='py-10 px-5'>
          <h1 
            data-aos='fade-right'
            data-aos-delay='200'
            className='text-5xl font-bold text-tertiary-o'>
              Hola !
          </h1>
          <LineText> Me llamo <span className='text-tertiary-o'>Rodny Estrada</span>, soy programador fullstack </LineText>
          
          <div className='flex items-center flex-wrap md:flex-nowrap'>
          
            <img 
              className='my-6 w-full max-w-md'
              src={heroSrc}
            /> 
          
          <LineText> 
            Me dedico a imaginar y contruir soluciones informaticas a cualquier cuestion que te plantees!
            Uso tecnologias tanto para páginas web como para desarrollar aplicaciones hibridas en dispositivos moviles.
          </LineText>
          </div>
          <p data-aos='fade-right'> Me apaciona este mundo </p>
        </div>
        <Footer/>
        
        {/** Extras **/}
        <PetRobot watchPosition={pointer}/>
        <CursorTarget position={pointer}/>
      </div>
    </Transition>
    </>
  )
}