
import { useState, useEffect, useRef } from 'react'
import targetSrc from '@/assets/target_01.png'

export function CursorTarget ({position}) {
  const cursorRef = useRef(null);
  const [currentPosition, setCurrentPosition] = useState(position);
  
  useEffect(() => {setCurrentPosition(position)}, [position])
  useEffect(() => {
    const cursor = cursorRef.current;
    let lastPosition = currentPosition;
    
    // float movement
    let fl = {
      y: 0, vy: 1
    } 
    
    /**
     * render the component
     */
    
    const draw = (position) => {
      lastPosition.x = lastPosition.x + (position.x - lastPosition.x) * 0.1;
      lastPosition.y  = lastPosition.y + (position.y - lastPosition.y) * 0.1;
      
      fl.y += fl.vy * 0.1; 
      if (fl.y >= 5) fl.vy = -1;
      else if (fl.y <= -5) fl.vy = 1;
      
      // render
      let x = (lastPosition.x - 25);
      let y = (lastPosition.y - 25) + fl.y;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px'; 
    }
    
    /**
     * loop
     */
    const update = () => {
      // get external state
      setCurrentPosition((position) => {
        draw(position);
        return position;
      })
      requestAnimationFrame(update);
    }
    update();
  }, []);
  
  return (
    <img
      ref={cursorRef}
      src={targetSrc}
      className='fixed rounded-full'
      style={{
        width: '50px',
        height: '50px'
      }}
    />
  )
}