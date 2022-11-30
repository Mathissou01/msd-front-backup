export const mockResizeWindow = (x: number, y: number) => {
  // noinspection JSConstantReassignment
  window.innerWidth = x;
  // noinspection JSConstantReassignment
  window.innerHeight = y;
  window.dispatchEvent(new Event("resize"));
};
