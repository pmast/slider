// slider component
// - should have a current value
// - should be increasable
// - should have a maximum value
// - should have a minimum value
// - should take a start value
// - should take a min value
// - should take a max value
// - should not increase beyond max value
// - should be decreasable
// - should not decrease beyond minimum value
// - should be increasable by spcified value

import assert from 'assert';

describe('env', function () {
  it('is working', function () {
    assert.equal(1, 1);
  });
});

class Slider {
  constructor(initialValue = 0, minValue = 0, maxValue = 10) {
    this.value = initialValue;
    this.maxValue = maxValue;
    this.minValue = minValue;
  }

  increaseValue() {
    this.value = Math.min(this.value + 1, this.maxValue);
  }

  decreaseValue() {
    this.value = Math.max(this.value - 1, this.minValue);
  }
}

let maxValue = 10;
let minValue = 0;
let slider = new Slider(5, minValue, maxValue);

describe('slider', function () {
  it('should have a current value', function () {
    assert.ok('value' in slider);
  });

  it('should take a start value', function () {
    assert.equal(slider.value, 5);
  });

  it('should increase by one', function () {
    let oldValue = 5;
    slider.value = oldValue;
    slider.increaseValue();
    assert.equal(slider.value, oldValue + 1);
  });

  it('should have a max value', function () {
    assert.ok('maxValue' in slider);
  });

  it('should have a min value', function () {
    assert.ok('minValue' in slider);
  });


  it('should take a min value', function () {
    assert.equal(slider.minValue, 0);
  });

  it('should take a max value', function () {
    assert.equal(slider.maxValue, 10);
  });

  it('should not increase beyond the max value', function () {
    slider.value = slider.maxValue;
    slider.increaseValue();
    assert.equal(slider.value, maxValue);
  });

  it('should be decreaseable', function () {
    let oldValue = 5;
    slider.value = oldValue;
    slider.decreaseValue();
    assert.equal(slider.value, oldValue - 1);
  });

  it('should not increase beyond the max value', function () {
    slider.value = slider.minValue;
    slider.decreaseValue();
    assert.equal(slider.value, minValue);
  });

  it('should be increasable by value', function () {
    slider.value = 5;
    slider.increaseValue(5);
    assert.equal(slider.value, 10);
  });
});
