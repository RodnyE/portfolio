

export function H1({ children }) {
  return (
    <h1
      data-aos='fade-right'
      data-aos-delay='100'
      className='mt-3 text-3xl md:text-5xl font-bold text-tertiary-o'
    >
      {children}
    </h1>
  )
}

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

