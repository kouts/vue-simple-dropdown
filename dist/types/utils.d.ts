/**
 * Checks whether an element is visible
 */
export declare const isVisible: (element: HTMLElement) => boolean;
/**
 * Return the previous/next element of a list.
 */
export declare const getNextActiveElement: (list: HTMLElement[], activeElement: HTMLElement, shouldGetNext: boolean, isCycleAllowed: boolean) => HTMLElement;
