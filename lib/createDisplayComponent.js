/**
 * Imports
 */
import magicElement from 'virtual-element'
import normalElement from 'virtual-element'
import assign from 'object-assign'
import omit from 'object.omit'

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
      const tag = props.component || 'div'
      const style = omit(assign({}, props, props.style || {}, defaults), exclude)
      // Use magicElement only when we get down to the level of a raw DOM node
      // so that we translate the style object into a CSS string exactly once
      const element = 'string' === typeof tag
        ? magicElement
        : normalElement

      return element(
        tag,
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
