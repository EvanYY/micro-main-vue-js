import _ from 'lodash'

/**
 * @author evan_yangyang
 * @since 2020-7-24
 */
import { __spread } from 'tslib'
var rawWindowInterval = window.setInterval
var rawWindowClearInterval = window.clearInterval
export default function patch () {
  var intervals = [] // @ts-ignore

  window.clearInterval = function (intervalId) {
    intervals = intervals.filter(function (id) {
      return id !== intervalId
    })
    return rawWindowClearInterval(intervalId)
  } // @ts-ignore


  window.setInterval = function (handler, timeout) {
    var args = []

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i]
    }

    var intervalId = rawWindowInterval.apply(undefined, __spread([handler, timeout], args))
    intervals = __spread(intervals, [intervalId])
    return intervalId
  }

  return function free () {
    intervals.forEach(function (id) {
      return window.clearInterval(id)
    })
    window.setInterval = rawWindowInterval
    window.clearInterval = rawWindowClearInterval
    return _.noop
  }
}
