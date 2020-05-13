function _toString (val) {
  return Object.prototype.toString.call(val)
}

function isNum (val) {
  return _toString(val) === '[object Number]'
}

function isStr (val) {
  return _toString(val) === '[object String]'
}

function isObj (val) {
  return _toString(val) === '[object Object]'
}

function isArr (val) {
  return _toString(val) === '[object Array]'
}

function isFunc (val) {
  return _toString(val) === '[object Function]'
}

function isRegExp (val) {
  return _toString(val) === '[object RegExp]'
}

function isDate (val) {
  return _toString(val) === '[object Date]'
}

function isSymbol (val) {
  return _toString(val) === '[object Symbol]'
}

function deepCompare (ref, val) {
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

function omit (val, useless) {
  let keys = [].concat(useless)
  let result

  if (isObj(val)) {
    result = {}

    Object.keys(val).forEach((key) => {
      if (!keys.includes(key)) {
        result[key] = val[key]
      }``
    })
  } else if (isArr(val)) {
    result = []

    val.forEach((item, index) => {
      if (!keys.includes(index)) {
        result.push(item)
      }
    })
  }

  return result
}


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