# Learning react-dnd
This is a repository for learning **react-dnd**, just summarizing main concepts from my personal perspective. Everything here is explained more thouroughly into its [documentation](http://react-dnd.github.io/react-dnd/docs/overview).

- [react-dnd](http://react-dnd.github.io/react-dnd)
- [touch backend](https://github.com/yahoo/react-dnd-touch-backend)

## Backends

- Built over a **pluggable implementation of [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)**
  - It screenshots the dragged DOM node and uses it as a "drag preview" out of the box (no drawing needed).
  - Only way to handle _file drop events_.
  - Does not work on touch devices.
  - Less customizations opportunities on IE regarding other browsers.
- Different API implementations can be provided as **Backends** to handle touch events, mouse events, etc.
- They abstract away the browser differences and process native DOM events. (similar to React's synthetic events).
- They translate DOM events into the _internal Redux actions_ that react DnD can process.

## Items and Types

- Data is the source of truth.
- The dragged element is an **item** of certan **type** (data).
- **Item**: POJO describing what's being dragged.
  - Describing the dragged data as a plain object helps us to _keep components decoupled_.
- **Type**: string or symbol identifying a whole class of items (enumeration like Redux action types).
  - Lets you specify which _drag sources_ and _drop targets_ are **compatible**.

## Monitors

- DnD is inherently **stateful**.
- The state is _exposed_ to the components using **monitors** (tiny wrappers over the internal state storage).
- For each component that needs to _track the DnD state_, we can define a **collecting function**.
- **Monitors** allow to update the props of the components in response to the DnD state changes. The collecting function will be timely called merging the return value into the components props.

## Connectors

- Backends handle DOM events, but we code React Components, connectors help us link them by _assigning one of the **predefined roles**_ to the DOM nodes:
  - **Drag source**: the element to be dragged.
  - **Drag preview**: the element while is being dragged.
  - **Drop target**: the element where we can drop draggable elements.
- First argument of the collecting function.

## Drag sources and Drop targets

They really tie the _types_, the _items_, the _side effects_, and the _collecting functions_ together with your components.

### DragSource

- A component expected to be draggable must be wrapped in a DragSource.
- Every DragSource is **registered to a certain type**.
- It has to **implement a method producing an item** from the component's props.
- It lets you specify the **collecting function** for the given component.

### DropTarget

- Very similar to a drag source with the difference in that one target can be registered to **multiple item types**.

## Adding Drag and Drop Interaction

### 1. Setting up DnD Context and plugging in the backend (_DragDropContextProvider_).

```js
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

...
  render()
    return (
      <DragDropContextProvider backend={html5Backend}>
        ...
      </DragDropContextProvider>
    )
  }
...
```

### 2. Define Drag Types:

```js
export const ItemTypes = {
  KNIGHT: 'knight'
};
```

### 3. Define a Drag Source.
Make elements draggable.

**DragSource** HoC:
- 3 parameters: *type*, *spec* and *collect*.

```js
const sourceSpec = {
  beginDrag(props) {
    return {}
  }
};

const collectFn = (connect, monitor) => {
  return {};
};

DragSource('ITEM_TYPE', sourceSpec, collectFn)(Component)
```

### 4. Define a Drop Target

**DropTarget** HoC:
- 3 parameters: *type*, *spec* and *collect*.
- Call `connect.dropTarget` function to obtain a wrapper for the Target node.
- Monitor provides `canDrop` and `isOver` to interact with target.
- Spec: `drop` and `canDrop` functions.

```js
const targetSpec = {
  drop(props, monitor) {
    const item = monitor.getItem();
    doSomething(item, props.x, props.y);
  }
  canDrop(props) {
    return true; // Can the Item be dropped here.
  }
};

const collectFn = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget() // Function to connect the node
  isOver: monitor.isOver(),  // Item is being dragged over the target?
  canDrop: monitor.canDrop(), // If can be dropped let's render something for it.
});

DropTarget('ITEM_TYPE', targetSpec, collectFn)(Component)
```

### 5. Connect Drag Preview Image

- Connect **Preview** to the **DragSource**.
- Call `connect.dragPreview` function to obtain a wrapper for the preview node.

```js
const collectFn = (connect, monitor) => ({
  connectDragPreview: connect.dragPreview(),
});

DragSource('ITEM_TYPE', targetSpec, collectFn)(Component)
```
