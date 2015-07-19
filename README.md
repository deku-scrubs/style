# style

Deku style components.  Basically a clone of petehunt/jsxstyle but for deku.

## Usage

Display elements:

  * Flex
  * Block
  * InlineBlock
  * Inline
  * Table
  * TableCell
  * TableRow

CSS properties may be passed in as props to your components, e.g.

```javascript
function render() {
  return <Block width='50px'>50 pixel Block</Block>
}
```

### Composition by containment

However, style components also accept a special `style` prop, which takes precedence over any of the attribute styles.  This allows you to create your own stylable components that expose the same attribute-styling interface as these.  E.g.

```javascript
const MediaBlock = {
  render(component) {
    const {props} = component
    const style = Object.assign({}, props, props.style || {}, {
      style: null,
      children: null
    })

    return (
      <Block color='blue' style={style}>
        {props.children}
      </Block>
    )
  }
}
```

Then your custom `MediaBlock` component will inherit the ability to be styled via attributes.

### Composition by mixin

You may also sometimes wish to directly style elements other than divs (e.g. resetting button styles).  To do this, you may use the special props `component` and `props`, like so:

```javascript
const ResetButton = {
  render() {
    return (
      <InlineBlock
        background="none"
        border=0
        color="inherit"
        font="inherit"
        lineHeight="normal"
        overflow="visible"
        padding=0
        appearance="button"
        userSelect="none"
        boxSizing="content-box"
        component={Button}
        props={props}>
        {props.children}
      </InlineBlock>
    )
  }
}
```

Then you can use `ResetButton` as if it were your standard `Button` component:

`<ResetButton onClick={incrementCounter}>Increment Counter</ResetButton>`

Of course this also composes infinitely with itself.