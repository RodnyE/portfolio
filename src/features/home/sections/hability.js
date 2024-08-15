
import { H1, HabilityCard } from '../components'
import { habilityImgs } from '@/utils/icons'

export function HabilitySection() {
  return (
    <div className='my-3 flex flex-col'>
      <H1> Capacidades </H1>
      <div className='flex flex-wrap justify-center md:justify-start m-3'>
        <HabilityCard iconSrc={habilityImgs[0]} header='Backend & Frontend' content='Poder con el ecosistema de Javascript para el desarrollo de aplicaciones web/móviles/escritorio/servidores' />
        <HabilityCard iconSrc={habilityImgs[1]} header='Nube' content='Conocimientos en el despliegue de aplicaciones basadas en la nube [AWS y Azure principalmente].' />
        <HabilityCard iconSrc={habilityImgs[2]} header='Dev-ops' content='Es importante la comunicación con el equipo de desarrollo. Buenos métodos de documentación de código y buenas prácticas son clave.' />
        <HabilityCard iconSrc={habilityImgs[3]} header='Optimización' content='Mis técnicas se basan principalmente en la optimización y la eficiencia, permitiendome construir aplicaciones robustas, escalables y de alto rendimiento.' />
        <HabilityCard iconSrc={habilityImgs[4]} header='Aprendizaje continuo' content='Me mantengo actualizado con las últimas tendencias y tecnologías en el mundo del desarrollo, siempre buscando nuevas formas de mejorar mis habilidades.' />
      </div>
    </div>
  );
}