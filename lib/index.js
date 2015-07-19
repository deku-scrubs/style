/**
 * Imports
 */
import createDisplayComponent from './createDisplayComponent'
import CSSDisplayNames from './CSSDisplayNames'
import omap from 'object.map'

/**
 * Display
 */
const display = omap(CSSDisplayNames, name => createDisplayComponent({display: name}))

/**
 * Exports
 */
export default display