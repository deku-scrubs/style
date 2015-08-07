/**
 * Imports
 */
import element from 'magic-virtual-element'
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
      let style = omit(assign({}, props, props.style || {}, defaults), exclude)

      if ('string' === typeof props.component || ! props.component)
        style = css(style)

      return element(
        props.component || 'div',
        assign({}, props.props || {}, {style: style}),
        props.children
      )
    }
  }
}

/**
 * Exports
 */
export default createDisplayComponent
