// SOURCE: Inspired by https://www.youtube.com/watch?v=htGfnF1zN4g
export function applyMouseEffect() {
  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };
  for (const card of document.querySelectorAll(".blog__card")) {
    card.onmousemove = (e) => handleOnMouseMove(e);
  }
}
