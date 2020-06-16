"use strict";

/**
 * 当参数数量为 1 时，参数为最大值；
 *             2 时，参数为最小值，最大值；
 *             3 时，参数为最小值，最大值，步进值。
 * 前两个参数会被重新排序，确保参数1必然小于参数2
 */
export function range (...args: number[]): number[] {
  let min: number, max: number, step: number, len: number

  switch (args.length) {
    case 1:
      [max] = args
      return [...Array(
        /** max不为整数时长度进 1 */
        max % 1 === 0 ? max : Math.floor(max) + 1
      ).keys()]
    case 2:
      /** 大小值排序 */
      [min, max] = args.slice(0, 2).sort((a, b) => a - b)
      len = max - min
      return [...Array(
        /** 除不尽时长度进 1 */
        len % 1 === 0 ? len : Math.floor(len) + 1
      ).keys()].map(i => i + min)
    case 3:
      /** 大小值排序 */
      [min, max] = args.slice(0, 2).sort((a, b) => a - b)
      step = args[2]

      /** 步进值为 0 时，跳出 */
      if (step === 0) return range(min, max)
      /** 当步进值为负数时，作翻转处理 */
      if (step < 0) return range(min, max, Math.abs(step)).reverse()

      /** 步进值取绝对值 */
      step = Math.abs(step)
      /** 数组长度计算 */
      len = (max - min) / step
      return [...Array(
        /** 除不尽时长度进 1 */
        len % 1 === 0 ? len : Math.floor(len) + 1
      ).keys()].map((item, index) => {
        /** 步进值不是整数时做精度处理 */
        return step % 1 === 0
        ? min + step * index
        : parseFloat(
          /** 取步进值右边小数位数为 precision 参数值 */
          (min + step * index).toFixed(step.toString().split('.')[1].length)
        )
      })
  }
}