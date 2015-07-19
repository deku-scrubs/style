/**
 * Imports
 */
import createDisplayComponent from './createDisplayComponent'
import CSSDisplayNames from './CSSDisplayNames'
import assign from 'object-assign'
import omap from 'object.map'

/**
 * Display
 */
const display = omap(CSSDisplayNames, name => createDisplayComponent({display: name}))
const Style = createDisplayComponent()

/**
 * Exports
 */
export default assign({Style}, display)