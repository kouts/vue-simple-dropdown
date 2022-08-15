/**
 * Checks whether an element is visible
 */
export const isVisible = (element: HTMLElement) => {
  if (!(element instanceof Element)) {
    throw Error('You must provide a DOM element.')
  }

  return (
    !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length) &&
    window.getComputedStyle(element).visibility !== 'hidden' &&
    window.getComputedStyle(element).display !== 'none'
  )
}

/**
 * Return the previous/next element of a list.
 */
export const getNextActiveElement = (
  list: HTMLElement[],
  activeElement: HTMLElement,
  shouldGetNext: boolean,
  isCycleAllowed: boolean
) => {
  const listLength = list.length
  let index = list.indexOf(activeElement)

  // if the element does not exist in the list return an element
  // depending on the direction and if cycle is allowed
  if (index === -1) {
    return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0]
  }

  index += shouldGetNext ? 1 : -1

  if (isCycleAllowed) {
    index = (index + listLength) % listLength
  }

  return list[Math.max(0, Math.min(index, listLength - 1))]
}
