
export function Navbar(props) {

  return (
    <div
      data-aos='fade-down'
      className='flex justify-between items-center w-full bg-white shadow-md'
    >
      <div className='text-primary w-full'>
        <div className='w-full bg-primary'>
          <div className='user-select-none w-full text-md flex p-6 space-x-4 items-center justify-center md:justify-end'>
            {
              [['Tecnologías', 'techs'], ['Contáctame', 'contact']].map(([text, link], i) => (
                <a
                  href={'#' + link}
                  key={i}
                  data-aos='zoom-in-down'
                  data-aos-delay={i * 150}
                >
                  <div className='px-2 border-transparent border-y-2 transition transform rotate-0 hover:rotate-[2deg] hover:border-current hover:text-[var(--bg-tertiary)]'>
                    {text}
                  </div>
                </a>
              ))
            }
          </div>
          <div className='w-full h-6 bg-tertiary' />
        </div>
      </div>
    </div>
  )
}