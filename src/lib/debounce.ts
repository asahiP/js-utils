"use strict";

export function debounce<T> (fn: (...args: any) => T, delay: number): (...args: any) => Promise<T> {
  let timer: any
  return function bundle (...args: any) {
    const context = this
    clearTimeout(timer)

    return new Promise((res, rej) => {
      timer = setTimeout(() => {
        res(fn.apply(context, args))
      }, delay)

    })
  }
}