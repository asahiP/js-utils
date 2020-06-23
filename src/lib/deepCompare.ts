"use strict";

const isArr = Array.isArray
const isObj = (val: any) => typeof val === 'object' && val !== null

export function deepCompare (ref: any, val: any): boolean {
  if (isArr(ref)) {
    if (isArr(val)) {
      let rLen = ref.length
      let vLen = val.length

      if (rLen === vLen) {
        for (let i = 0; i < rLen; i++) {
          if (!deepCompare(ref[i], val[i])) {
            return false
          }
        }
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } else if (isObj(ref)) {
    if (isObj(val)) {
      let rKeys = Object.keys(ref)
      let vKeys = Object.keys(val)
      let keySet = new Set([...rKeys, ...vKeys])
      let rLen = rKeys.length
      let vLen = vKeys.length
      let kLen = keySet.size

      if (rLen === vLen && rLen === kLen) {
        for (let i = 0; i < rLen; i++) {
          let key = rKeys[i]
          if (!deepCompare(ref[key], val[key])) {
            return false
          }
        }
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  } else if (isNaN(ref)) {
    return isNaN(val)
  }

  return ref === val
}