"use strict";

import { range } from './range'

export function characterRange (start: string, end: string): string[] {
  let [min, max] = [start, end]
    /** 转换Unicode */
    .map(i => i.charCodeAt(0))
    /** 重新排序 */
    .sort((a, b) => a - b)

  return range(min, max + 1)
    /** 遍历数组并返回字符串 */
    .map(i => String.fromCharCode(i))
}