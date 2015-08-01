/**
 * Imports
 */
import assign from 'object-assign'
import {element} from 'deku'
import Style from './style'

/**
 * Create a display component
 */
function createDisplayComponent (defaults) {
  return {
    render (component) {
      const {props} = component
      const styl = assign({}, props, props.style || {}, defaults, {
        children: null,
        style: null,
        component: null,
        props: null
      })

      return element(
        props.component || Style,
        assign({}, props.props || {}, {style: styl}),
        props.children
      )
    }
  }
}

/**
 * Exports
 */
export default createDisplayComponent
