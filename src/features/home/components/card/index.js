
import { cx } from 'classix'
import styles from './flip-card.module.css'

export function TechCard({ iconSrc, content, header }) {
  return (
    <div
      className={cx(
        styles.card,
        'shadow-lg p-3 m-2 max-w-sm rounded-xl border-b border-b-current border-b-4 flex flex-col text-center'
      )}
    >
      <div className={styles.card_inner}>

        <div className={cx('flex flex-col items-center', styles.card_front)}>
          <div className='flex items-center w-16 h-16'>
            <img
              data-aos='fade-down'
              data-aos-delay='100'
              className='w-full'
              src={iconSrc}
            />
          </div>
          <div
            data-aos='fade-right'
            data-aos-delay='200'
            className='text-xl font-bold'
          >
            {header}
          </div>
        </div>

        <div className={styles.card_back}>
          {content}
        </div>
      </div>
    </div>
  )
}


export function HabilityCard({ className, iconSrc, header, content }) {
  return (
    <div className={'p-3 m-2 max-w-sm rounded-xl border-b border-b-current border-b-4 flex flex-col ' + className}>
      <div className='flex items-center w-16 h-16'>
        <img
          data-aos='fade-down'
          data-aos-delay='100'
          className='w-full'
          src={iconSrc}
        />
      </div>
      <div
        data-aos='fade-right'
        data-aos-delay='200'
        className='text-xl font-bold'
      >
        {header}
      </div>
      <div
        data-aos='fade-right'
        data-aos-delay='300'
      >
        {content}
      </div>
    </div>
  )
}