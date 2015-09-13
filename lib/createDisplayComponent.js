/**
 * Imports
 */

import element from 'magic-virtual-element'
import assign from 'object-assign'
import omit from 'object.omit'

/**
 * Vars
 */

const exclude = ['children', 'props', 'component', 'style']

/**
 * Create a display component
 */

export default function (defaults) {
  return function ({props}) {
    const tag = props.component || 'div'
    const style = omit(assign({}, defaults, props, props.style || {}), exclude)

    return element(
      tag,
      assign({}, props.props || {}, {style: style}),
      props.children
    )
  }
}
