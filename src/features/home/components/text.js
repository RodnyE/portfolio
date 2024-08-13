

export function LineText({ children, ...props }) {
  return (
    <div
      data-aos='fade-right'
      data-aos-delay='100'
      className='p-4 text-body font-bold text-xl border-l border-l-[var(--bg-tertiary)] border-l-4'
      {...props}
    >
      {children}
    </div>
  )
}

export function HabilityText({ iconSrc, header, content }) {
  return (
    <div className='p-3 m-2 max-w-sm rounded-xl border-b border-b-current border-b-4 flex flex-col'>
      <img
        data-aos='fade-right'
        data-aos-delay='100'
        className='w-16'
        src={iconSrc}
      />
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