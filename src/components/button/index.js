
import { cx } from 'classix'

export function Button({ className, children, href, download }) {
  return (
    <a
      data-aos='fade-left'
      data-aos-delay='200'
      href={href}
      download={download}
      className={cx(
       'text-primary', 
       'flex items-center justify-center p-3 rounded-md bg-primary',
       'transition hover:bg-[var(--bg-secondary)] active:translate-y-1',
        className,
     )}
    >
      {children}
    </a>
  )
}