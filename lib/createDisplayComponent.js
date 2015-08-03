/**
 * Imports
 */
import assign from 'object-assign'
import omit from 'object.omit'
import {element} from 'deku'
import Style from './style'

/**
 * Vars
 */
const exclude = ['children', 'props', 'component', 'style']

/**
 * Create a display component
 */
function createDisplayComponent (defaults) {
  return {
    render (component) {
      const {props} = component
      const styl = omit(assign({}, props, props.style || {}, defaults), exclude)

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
