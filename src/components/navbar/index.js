
export function Navbar (props) {

  return (
    <div 
      data-aos='fade-down'
    >
    <div className='relative text-primary w-full'>
      { innerWidth < 760 ?
        <>
          <svg className='absolute z-1 text-tertiary-o w-full' viewBox='0 0 200 70'>
            <polygon points='0,0 200,0 200,50 0,70' fill='currentColor'/>
          </svg> 
          <svg className='absolute z-1 text-primary-o w-full' viewBox='0 0 200 50'>
            <polygon points='0,0 200,0 200,40 0,50' fill='currentColor'/>
          </svg> 
        </>
        :
        <div className='absolute w-full'>
          <div className='w-full h-16 bg-primary'/>
          <div className='w-full h-6 bg-tertiary'/>
        </div>
      }
      <div className='w-full relative z-2 text-md flex p-6 space-x-4 items-center justify-center'> 
      {
        ['Resumen', 'Tecnologias', 'Contactame'].map((text, i) => (
          <div
            key={i}
            data-aos='zoom-in-down'
            data-aos-delay={i * 150}
          > 
            <div className='px-2 border-transparent border-y-2 transition transform rotate-0 hover:rotate-[2deg] hover:border-current hover:text-[var(--bg-tertiary)]'>  
              {text} 
            </div>
          </div>
        ))
      }
      </div>
    </div>
    </div>
  )
}