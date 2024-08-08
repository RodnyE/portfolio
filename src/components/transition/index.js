
import { CSSTransition } from 'react-transition-group'
import './SlideLeft.css'

export function SlideLeft({
  in: _in,
  timeout = 300,
  nodeRef,
  children,
  unmountOnExit = true,
}) {
  return (
    <CSSTransition
      in={_in}
      timeout={timeout}
      nodeRef={nodeRef}
      classNames='slideleft'
      unmountOnExit={unmountOnExit}
    >
      {children}
    </CSSTransition>
  )
}