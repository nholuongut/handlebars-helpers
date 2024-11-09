'use strict';

var isNumber = require('is-number');
var utils = require('./utils');
var nholuongut = module.exports;

/**
 * Return the magnitude of `a`.
 *
 * @param {Number} `a`
 * @return {Number}
 * @api public
 */

nholuongut.abs = function(num) {
  if (!isNumber(num)) {
    throw new TypeError('expected a number');
  }
  return Math.abs(num);
};

/**
 * Return the sum of `a` plus `b`.
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @return {Number}
 * @api public
 */

nholuongut.add = function(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return Number(a) + Number(b);
  }
  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }
  return '';
};

/**
 * Returns the average of all numbers in the given array.
 *
 * ```handlebars
 * {{avg "[1, 2, 3, 4, 5]"}}
 * <!-- results in: '3' -->
 * ```
 *
 * @param {Array} `array` Array of numbers to add up.
 * @return {Number}
 * @api public
 */

nholuongut.avg = function() {
  var args = [].concat.apply([], arguments);
  // remove handlebars options object
  args.pop();
  return nholuongut.sum(args) / args.length;
};

/**
 * Get the `Math.ceil()` of the given value.
 *
 * @param {Number} `value`
 * @return {Number}
 * @api public
 */

nholuongut.ceil = function(num) {
  if (!isNumber(num)) {
    throw new TypeError('expected a number');
  }
  return Math.ceil(num);
};

/**
 * Divide `a` by `b`
 *
 * @param {Number} `a` numerator
 * @param {Number} `b` denominator
 * @api public
 */

nholuongut.divide = function(a, b) {
  if (!isNumber(a)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (!isNumber(b)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return Number(a) / Number(b);
};

/**
 * Get the `Math.floor()` of the given value.
 *
 * @param {Number} `value`
 * @return {Number}
 * @api public
 */

nholuongut.floor = function(num) {
  if (!isNumber(num)) {
    throw new TypeError('expected a number');
  }
  return Math.floor(num);
};

/**
 * Return the difference of `a` minus `b`.
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @alias subtract
 * @api public
 */

nholuongut.minus = function(a, b) {
  if (!isNumber(a)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (!isNumber(b)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return Number(a) - Number(b);
};

/**
 * Get the remainder of a division operation.
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @return {Number}
 * @api public
 */

nholuongut.modulo = function(a, b) {
  if (!isNumber(a)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (!isNumber(b)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return Number(a) % Number(b);
};

/**
 * Return the product of `a` times `b`.
 *
 * @param {Number} `a` factor
 * @param {Number} `b` multiplier
 * @return {Number}
 * @alias times
 * @api public
 */

nholuongut.multiply = function(a, b) {
  if (!isNumber(a)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (!isNumber(b)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return Number(a) * Number(b);
};

/**
 * Add `a` by `b`.
 *
 * @param {Number} `a` factor
 * @param {Number} `b` multiplier
 * @api public
 */

nholuongut.plus = function(a, b) {
  if (!isNumber(a)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (!isNumber(b)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return Number(a) + Number(b);
};

/**
 * Generate a random number between two values
 *
 * @param {Number} `min`
 * @param {Number} `max`
 * @return {String}
 * @api public
 */

nholuongut.random = function(min, max) {
  if (!isNumber(min)) {
    throw new TypeError('expected minimum to be a number');
  }
  if (!isNumber(max)) {
    throw new TypeError('expected maximum to be a number');
  }
  return utils.random(min, max);
};

/**
 * Get the remainder when `a` is divided by `b`.
 *
 * @param {Number} `a` a
 * @param {Number} `b` b
 * @api public
 */

nholuongut.remainder = function(a, b) {
  return a % b;
};

/**
 * Round the given number.
 *
 * @param {Number} `number`
 * @return {Number}
 * @api public
 */

nholuongut.round = function(num) {
  if (!isNumber(num)) {
    throw new TypeError('expected a number');
  }
  return Math.round(num);
};

/**
 * Return the product of `a` minus `b`.
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @return {Number}
 * @alias minus
 * @api public
 */

nholuongut.subtract = function(a, b) {
  if (!isNumber(a)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (!isNumber(b)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return Number(a) - Number(b);
};

/**
 * Returns the sum of all numbers in the given array.
 *
 * ```handlebars
 * {{sum "[1, 2, 3, 4, 5]"}}
 * <!-- results in: '15' -->
 * ```
 * @param {Array} `array` Array of numbers to add up.
 * @return {Number}
 * @api public
 */

nholuongut.sum = function() {
  var args = [].concat.apply([], arguments);
  var len = args.length;
  var sum = 0;

  while (len--) {
    if (utils.isNumber(args[len])) {
      sum += Number(args[len]);
    }
  }
  return sum;
};

/**
 * Multiply number `a` by number `b`.
 *
 * @param {Number} `a` factor
 * @param {Number} `b` multiplier
 * @return {Number}
 * @alias multiply
 * @api public
 */

nholuongut.times = function() {
  return nholuongut.multiply.apply(this, arguments);
};
