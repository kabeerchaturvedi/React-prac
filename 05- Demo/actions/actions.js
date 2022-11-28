export function onIncrement(step) {
  return {
    type: "INC",
    step,
  };
}

export function onDecrement(step) {
  return {
    type: "DEC",
    step,
  };
}
