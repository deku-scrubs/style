/**
 * Imports
 */
import createDisplayComponent from './lib/createDisplayComponent'
import CSSDisplayNames from './lib/CSSDisplayNames'
import omap from 'object.map'

/**
 * Display
 */
const display = omap(CSSDisplayNames, name => createDisplayComponent({display: name}))

/**
 * Exports
 */
export default display