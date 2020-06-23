"use strict";

export function getRandStr (len: number, numOnly = false): string {
  let seed = '0123456789' + (!numOnly
    ? 'abcdefghijklmnoprstuvwxyz'
    : '')
  let sLen = seed.length  
  let result = ''

  while (len--) {
    let part = seed[Math.floor(Math.random() * sLen)]
    result += Math.random() > 0.5
      ? part
      : part.toUpperCase()
  }

  return result
}