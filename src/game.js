let knightPosition = [1, 7];
let observer = null;

function emitChange() {
  observer(knightPosition)
};

export function canMoveKnight(toX, toY) {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;

  const dx2dy1 = Math.abs(dx) === 2 && Math.abs(dy) === 1;
  const dx1dy2 = Math.abs(dx) === 1 && Math.abs(dy) === 2;

  return dx2dy1 || dx1dy2;
}

export function observe(o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
};

export function moveKnight(toX, toY) {
  if (canMoveKnight(toX, toY)) {
    knightPosition = [toX, toY];
    emitChange();
  }
};
