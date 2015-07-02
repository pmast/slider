// slider component
// - should have a current value
// - should be increasable

import assert from 'assert';

describe('env', function () {
  it('is working', function () {
    assert.equal(1, 1);
  });
});

class Slider {
  constructor() {
    this.value = 0;
  }

  increase() {
    this.value++;
  }
}

describe('slider', function () {
  it('should have a current value', function () {
    let slider = new Slider();
    assert.ok('value' in slider);
  });

  it('should increase by one', function () {
    let slider = new Slider();
    let oldValue = slider.value;
    slider.increase();
    assert.equal(slider.value, oldValue + 1);
  });
});
