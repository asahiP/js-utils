"use strict";

/** currentTime === nowTime - startTime */

export function easeInQuad (currentTime: number, startValue: number, changeValue: number, duration: number): number {
  currentTime /= duration
  return changeValue * currentTime * currentTime + startValue
}

export function easeOutQuad (currentTime: number, startValue: number, changeValue: number, duration: number): number {
  currentTime /= duration
  return -changeValue * currentTime * (currentTime - 2) + startValue
}

export function easeInOutQuad (currentTime: number, startValue: number, changeValue: number, duration: number): number {
  currentTime /= duration / 2
  if (currentTime < 1) return changeValue / 2 * currentTime * currentTime + startValue
  currentTime--
  return -changeValue / 2 * (currentTime * (currentTime - 2) - 1) + startValue
}