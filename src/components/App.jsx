import React from 'react';

import ItemDragSource from './ItemDragSource';
import ItemDropTarget from './ItemDropTarget';

const App = () => (
  <main>
    <section>
      <ItemDropTarget />
      <ul>
        <ItemDragSource>Item 1</ItemDragSource>
        <ItemDragSource>Item 2</ItemDragSource>
        <ItemDragSource>Item 3</ItemDragSource>
      </ul>
    </section>
  </main>
);

export default App;
