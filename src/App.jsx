
import { useEffect } from 'react'
import { Route, Switch } from 'wouter' 
import { useLoadedPage } from './utils/store'
import { LoadingPage } from './pages/loading'
import { HomePage } from './pages/home'

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