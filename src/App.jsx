
import { useEffect } from 'react' 
import { useLoadedPage } from './utils/store'
import { LoadingPage } from './features/loading'
import { HomePage } from './features/home'

export default function App () {
  const [loaded, setLoaded] = useLoadedPage();
  
  useEffect(() => {
    // simulate page loader
    setTimeout(() => setLoaded(true), 2000);
  }, []);
  
  return (
    <>
      <LoadingPage show={!loaded}/>
      <HomePage show={loaded}/>
    </>
  )
}