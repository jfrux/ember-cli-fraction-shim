import { test, module } from 'qunit';
import Fraction from 'fraction';
// import Ember from 'ember';

module('Unit | fraction exports');

test('Fraction exports', (assert) => {
  assert.ok(Fraction, 'Fraction exports');
});

test('Fraction() instanceof fraction', (assert) => {
  let fraction = new Fraction();
  assert.equal(fraction instanceof Fraction, true);
});

test('Fraction toFraction fn exists', (assert) => {
  let fraction = new Fraction();
  assert.equal(typeof fraction.toFraction, 'function');
});

test('Fraction toFraction for `0.25` returns 1/4', (assert) => {
  let fraction = new Fraction(0.25);
  assert.equal(fraction.toFraction(true), '1/4');
});
