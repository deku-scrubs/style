/**
 * Imports
 */
import {tree, element, render} from 'deku'
import css from '@deku-scrubs/css'
import assert from 'assert'
import {Flex} from '..'

let container

describe('style', function () {
  beforeEach(function () {
    empty(document.body)
    container = document.body.appendChild(document.createElement('div'))
  })

  it('should work', function () {
    create(<Flex width='4px'>test</Flex>)

    const flex = container.querySelector('div')
    const style = flex.attributes.style.value

    assert.ok(style.indexOf('display:flex') !== -1)
    assert.ok(style.indexOf('width:4px') !== -1)
  })

  it('should allow component mixins', function () {
    const Button = {
      render (component) {
        const {props} = component
        return <button style={css(props.style)}>{props.text}</button>
      }
    }

    create(<Flex component={Button} props={{text: 'test'}} width='4px' />)

    const btn = container.querySelector('button')
    const styl = btn.attributes.style.value

    assert.equal(btn.textContent, 'test')
    assert.ok(styl.indexOf('display:flex') !== -1)
    assert.ok(styl.indexOf('width:4px') !== -1)
  })

  it('should not break defaultProps on re-render', function () {
    let setState
    const Component = {
      render (component, _setState) {
        setState = _setState
        return (<Flex width='5px' />)
      }
    }

    create(<Component/>)

    assert(checkStyle(container.children[0]))
    setState({test: true})
    assert(checkStyle(container.children[0]))

    function checkStyle (el) {
      return el.attributes.style.value.indexOf('display:flex') !== -1
    }
  })
})

function create (component) {
  const app = tree(component)
  app.option('batching', false)
  render(app, container)
  return app
}

function empty (node) {
  while (node.lastChild) {
    node.removeChild(node.lastChild)
  }
}
