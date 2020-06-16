"use strict";

export function getAttribute (element: any, attributeName: string): string {
  let result: string = null

  while (
    element.getAttribute
    && !(result = element.getAttribute(attributeName))
    && element.parentNode
  ) {
    element = element.parentNode
  }

  return result
}