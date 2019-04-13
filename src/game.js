let knightPosition = [1, 7];
let observer = null;

const emitChange = () => {
  observer(knightPosition)
};

export const observe = (o) => {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
};

export const canMoveKnight = (toX, toY) => {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  const dx2dy1 = Math.abs(dx) === 2 && Math.abs(dy) === 1;
  const dx1dy2 = Math.abs(dx) === 1 && Math.abs(dy) === 2;

  return dx2dy1 || dx1dy2;
};

export const moveKnight = (toX, toY) => {
  if (canMoveKnight(toX, toY)) {
    knightPosition = [toX, toY];
    emitChange();
  }
};
