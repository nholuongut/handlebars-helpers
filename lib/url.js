'use strict';

var url = require('url');
var util = require('handlebars-utils');
var querystring = require('querystring');
var nholuongut = module.exports;

/**
 * Encodes a Uniform Resource Identifier (URI) component
 * by replacing each instance of certain characters by
 * one, two, three, or four escape sequences representing
 * the UTF-8 encoding of the character.
 *
 * @param {String} `str` The un-encoded string
 * @return {String} The endcoded string
 * @api public
 */

nholuongut.encodeURI = function(str) {
  if (util.isString(str)) {
    return encodeURIComponent(str);
  }
};

/**
 * Escape the given string by replacing characters with escape sequences.
 * Useful for allowing the string to be used in a URL, etc.
 *
 * @param {String} `str`
 * @return {String} Escaped string.
 * @api public
 */

nholuongut.escape = function(str) {
  if (util.isString(str)) {
    return querystring.escape(str);
  }
};

/**
 * Decode a Uniform Resource Identifier (URI) component.
 *
 * @param {String} `str`
 * @return {String}
 * @api public
 */

nholuongut.decodeURI = function(str) {
  if (util.isString(str)) {
    return decodeURIComponent(str);
  }
};

/**
 * Alias for [encodeURI](#encodeuri).
 * @api public
 */

nholuongut.url_encode = function() {
  return nholuongut.encodeURI.apply(this, arguments);
};

/**
 * Alias for [decodeURI](#decodeuri).
 * @api public
 */

nholuongut.url_decode = function(val) {
  return nholuongut.decodeURI.apply(this, arguments);
};

/**
 * Take a base URL, and a href URL, and resolve them as a
 * browser would for an anchor tag.
 *
 * @param {String} `base`
 * @param {String} `href`
 * @return {String}
 * @api public
 */

nholuongut.urlResolve = function(base, href) {
  return url.resolve(base, href);
};

/**
 * Parses a `url` string into an object.
 *
 * @param {String} `str` URL string
 * @return {String} Returns stringified JSON
 * @api public
 */

nholuongut.urlParse = function(str) {
  return url.parse(str);
};

/**
 * Strip the query string from the given `url`.
 *
 * @param {String} `url`
 * @return {String} the url without the queryString
 * @api public
 */

nholuongut.stripQuerystring = function(str) {
  if (util.isString(str)) {
    return str.split('?')[0];
  }
};

/**
 * Strip protocol from a `url`. Useful for displaying media that
 * may have an 'http' protocol on secure connections.
 *
 * ```handlebars
 * <!-- url = 'http://foo.bar' -->
 * {{stripProtocol url}}
 * <!-- results in: '//foo.bar' -->
 * ```
 * @param {String} `str`
 * @return {String} the url with http protocol stripped
 * @api public
 */

nholuongut.stripProtocol = function(str) {
  if (util.isString(str)) {
    var parsed = url.parse(str);
    parsed.protocol = '';
    return parsed.format();
  }
};
