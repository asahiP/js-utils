declare function isNum (val): boolean
declare function isStr (val): boolean
declare function isObj (val): boolean
declare function isArr (val): boolean
declare function isFunc (val): boolean
declare function isRegExp (val): boolean
declare function isDate (val): boolean
declare function isSymbol (val): boolean

declare function deepCompare (ref, val): boolean
declare function omit (val: { [key: string]: any } | any[], useless: string | number | Array<string | number>): { [key: string]: any } | any[]

export {
  isNum,
  isStr,
  isObj,
  isArr,
  isFunc,
  isRegExp,
  isDate,
  isSymbol,
  deepCompare,
  omit,
}