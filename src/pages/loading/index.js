
import { useEffect } from 'react' 
import { useLoadedPage } from '@/utils/store'
import { Loader, SlideLeft } from '@/components'

export function LoadingPage () {
  const [loaded, setLoaded] = useLoadedPage();
  
  useEffect(() => {
    // simulate page loader
    setTimeout(() => setLoaded(true), 2000);
  }, []);
  
  return (
    <SlideLeft in={!loaded}>
      <div className='flex justify-center items-center w-full h-full absolute top-0 left-0'>
        <Loader/>
      </div>
    </SlideLeft>
  )
}