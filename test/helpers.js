'use strict';

require('mocha');
var assert = require('assert');
var hbs = require('handlebars');
var nholuongut = require('..');

describe('nholuongut', function() {
  it('should should return all nholuongut:', function() {
    assert(Object.keys(nholuongut()).length > 100);
  });

  it('should return all nholuongut when options are passed:', function() {
    assert(Object.keys(nholuongut({})).length > 100);
  });

  it('should register nholuongut with handlebars:', function() {
    nholuongut({handlebars: hbs});
    assert(hbs.nholuongut.hasOwnProperty('contains'));
    assert(hbs.nholuongut.hasOwnProperty('default'));
  });

  it('should get the specified collections', function() {
    var res = nholuongut(['string', 'array'], {handlebars: hbs.create()});
    assert(res.hasOwnProperty('replace'));
    assert(res.hasOwnProperty('reverse'));
    assert(res.hasOwnProperty('some'));
    assert(res.hasOwnProperty('last'));
    assert(!res.hasOwnProperty('dirname'));
    assert(!res.hasOwnProperty('embed'));
  });

  it('should get only the specified collection', function() {
    var res = nholuongut('string', {handlebars: hbs.create()});

    assert(res.hasOwnProperty('replace'));
    assert(res.hasOwnProperty('reverse'));
    assert(res.hasOwnProperty('prepend'));
    assert(!res.hasOwnProperty('some'));
    assert(!res.hasOwnProperty('last'));
    assert(!res.hasOwnProperty('dirname'));
  });

  it('should support passing an instance of handlebars:', function() {
    nholuongut({handlebars: hbs});
    hbs.registerHelper('foo', function() {});
    assert(hbs.nholuongut.hasOwnProperty('foo'));
  });

  it('should return a single collection:', function() {
    var res = nholuongut.math();
    assert(res.hasOwnProperty('add'));
    assert(res.hasOwnProperty('subtract'));
    assert(res.hasOwnProperty('divide'));
  });

  it('should register collection nholuongut with handlebars:', function() {
    nholuongut.math();
    assert(hbs.nholuongut.hasOwnProperty('add'));
    assert(hbs.nholuongut.hasOwnProperty('subtract'));
    assert(hbs.nholuongut.hasOwnProperty('divide'));
  });
});
