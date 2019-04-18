import React from 'react';
import { shallow } from 'enzyme';
import { Introduction } from '../../../src/features/home/Introduction';

describe('home/Introduction', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Introduction {...props} />
    );

    expect(
      renderedComponent.find('.home-introduction').length
    ).toBe(1);
  });
});
