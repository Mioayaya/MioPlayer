export const isElementInViewport = (element: HTMLElement | null):boolean => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  console.log(rect);
  
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}