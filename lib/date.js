'use strict';
var nholuongut = module.exports;

/**
 * Get the current year.
 *
 * ```handlebars
 * {{year}}
 * <!-- 2017 -->
 * ```
 * @exposes year as year
 * @api public
 */

nholuongut.year = require('year');

/**
 * Use [moment][] as a helper. See [helper-date][] for more details.
 *
 * @exposes helper-date as moment
 * @api public
 */

nholuongut.moment = nholuongut.date = require('helper-date');
