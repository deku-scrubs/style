/**
 * Imports
 */
import {element} from 'deku'
import css from 'css'


/**
 * Component
 */
function render(component) {
  const {props} = component
  const {style} = props

  return (
    <div style={css(style)}>
      {props.children}
    </div>
  )
}


/**
 * Exports
 */
export default {render}