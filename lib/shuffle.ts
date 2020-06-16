"use strict";

export function shuffle<T> (arr: T[]): T[] {
  const copy = arr.concat()
  let len = copy.length

  while (len) {
    const random = Math.floor(Math.random() * len--);
    [copy[len], copy[random]] = [copy[random], copy[len]]
  }

  return copy
}