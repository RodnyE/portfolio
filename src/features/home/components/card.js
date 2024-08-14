

export function TechCard(props) {
    return (
      <HabilityCard  {...props}/>
    )
  }


  export function HabilityCard({ center, iconSrc, header, content }) {
    return (
      <div className={'p-3 m-2 max-w-sm rounded-xl border-b border-b-current border-b-4 flex flex-col ' + (!center || ' items-center text-center')}>
        <div className='flex items-center w-16 h-16'>
          <img
            data-aos='fade-right'
            data-aos-delay='100'
            className='w-full'
            src={iconSrc}
          />
        </div>
        <div
          data-aos='fade-left'
          data-aos-delay='200'
          className='text-xl font-bold'
        >
          {header}
        </div>
        <div
          data-aos='fade-left'
          data-aos-delay='300'
        >
          {content}
        </div>
      </div>
    )
  }