const ItemTypes = {};

Object.defineProperties(ItemTypes, {
  KNIGHT: {
    value: Symbol('knight'),
    writable: false
  }
});

export {
  ItemTypes
};
