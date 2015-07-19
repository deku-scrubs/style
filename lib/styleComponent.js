/**
 * Imports
 */
import {element} from 'deku'
import style from 'style'


/**
 * Component
 */
function render(component) {
  const {props} = component
  const css = style(props.style)

  return (
    <div style={css}>
      {props.children}
    </div>
  )
}


/**
 * Exports
 */
export default {render}