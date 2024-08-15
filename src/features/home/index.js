
import { useState, useEffect } from 'react'
import { Transition, Navbar, Footer } from '@/components'
import { PetRobot } from '@/components/pet'
import { CursorTarget } from '@/components/cursor'
import { WelcomeSection, HabilitySection, TechSection, ContactSection } from './sections'

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
          <WelcomeSection/>
          <HabilitySection/>
          <TechSection/>
          <ContactSection/>
        </div>
        <Footer />

        {/** Extras **/}
        <PetRobot watchPosition={pointer} />
        <CursorTarget position={pointer} />
      </div>
    </Transition> 
  )
}