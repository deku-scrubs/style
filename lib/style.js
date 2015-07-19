/**
 * Imports
 */
import {element} from 'deku'
import css from '@deku-scrubs/css'


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