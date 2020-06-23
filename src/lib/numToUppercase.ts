"use strict";

import { chunk } from './chunk'

/**
 * @description 转换范围 `10^44[小数点]10^-2`
 * @param {string} number 需要转换的数字字符串
 * @param {boolean} isSimplifiedChinese 是否为简体
 * @returns {Array} 包含转换后整数位和小数位字符串的数组
 */
export function numToUppercase (number: string, isSimplifiedChinese = false): string[] {
  const characterSet  = [
    [
      ['', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'],
      ['', '拾', '佰', '仟']
    ],
    [
      ['', '一', '二', '三', '四', '五', '六', '七', '八', '九'],
      ['', '十', '百', '千']
    ]
  ]
  const [capital, unit] = isSimplifiedChinese
    ? characterSet [1]
    : characterSet [0]
  const level = ['', '万', '亿', '兆', '京', '垓', '秭', '穣', '沟', '涧', '正', '载']
  const [integer, decimal] = number.split('.')
  const intChunk = chunk(integer.split('').reverse(), 4)
    .map((_chunk, _index) => {
      return _chunk.map((n, _index) => {
        const val = parseInt(n)

        return val === 0
          ? '零'
          : capital[val] + unit[_index]
      })
    })
    .map((_chunk, _index) => {
      const _val = _chunk.reverse().join('').replace(/零{2,}/g, '零')
      
      if (_val === '零') {
        return '零'
      }

      return _val.slice(-1) === '零'
      ? _val.slice(0, -1) + level[_index] + '零'
      : _val + level[_index]
    })
    .reverse()
  const _integer = intChunk.join('').replace(/零{2,}/g, '零')
  const _decimal = decimal && decimal.split('')
    .map((n, index) => {
      const val = parseInt(n)
      const _unit = ['角', '分']
      if (val === 0 && index === 1) return ''

      return val === 0
        ? '零'
        : capital[val] + _unit[index]
    })
    .join('')

  return [
    _integer.slice(-1) === '零' && _integer.length > 1 ? _integer.slice(0, -1) : _integer,
    _decimal
  ]
}