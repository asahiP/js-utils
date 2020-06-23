"use strict";

export function parseQueryString (str: string): { [key: string]: string } {
  return str.includes('?')
    ? str.split('?')[1].split('&').reduce((prev: { [key: string]: string }, current) => {
        const [key, val] = current.split('=')
        prev[key] = val

        return prev
      }, {})
    : {}
}