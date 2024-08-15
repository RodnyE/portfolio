
import { CSSTransition } from 'react-transition-group'
import './slide-left.css'
import './slide-down.css'

export function Transition ({
  in: _in,
  type = 'slide-left',
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
      classNames={type}
      unmountOnExit={unmountOnExit}
    >
      {children}
    </CSSTransition>
  )
}