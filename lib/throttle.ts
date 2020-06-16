"use strict";

export function throttle<T> (fn: (...args: any) => T, delay: number): (...args: any) => Promise<T> {
  let previous: number = null
  return function bundle (...args: any) {
    const context = this
    const now = Date.now()

    return new Promise((res, rej) => {
      if (now - previous > delay) {
        previous = now
        res(fn.apply(context, args))
      }
    })
  }
}