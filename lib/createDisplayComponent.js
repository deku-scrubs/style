/**
 * Imports
 */
import element from 'virtual-element'
import assign from 'object-assign'
import omit from 'object.omit'
import css from '@deku-scrubs/css'

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
        props.component || 'div',
        assign({}, props.props || {}, {style: css(styl)}),
        props.children
      )
    }
  }
}

/**
 * Exports
 */
export default createDisplayComponent
