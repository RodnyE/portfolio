
import { Loader, Transition } from '@/components'

export function LoadingPage ({show}) {
 
  return (
    <Transition type='slide-left' in={show}>
      <div className='absolute flex justify-center items-center w-full h-full absolute top-0 left-0'>
        <Loader/>
      </div>
    </Transition>
  )
}