import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('<Input rendering />', () => {
    const onChangeHandler= jest.fn();

      it('should render an input field with the given id', () => {
        const wrapper = shallow(<Input inputId={"testInput"} handleChange={onChangeHandler} />);
        const input = wrapper.find('input#testInput');
        expect(input.exists()).toEqual(true);
      });
      
});

describe('<Input /> interactions', () => {
    const onChangeHandler = jest.fn();

    it('should call the onChangeHandler function when input changed', () => {
        const wrapper = shallow(<Input inputId={"testInput"} handleChange={onChangeHandler} />);
        const input = wrapper.find('input#testInput');

        // when changing the input value
        // the props function must be called with each change
        input.simulate('change', {target: { value: 'A' }});
        input.simulate('change', {target: { value: 'B' }});
        expect(onChangeHandler).toHaveBeenCalledTimes(2);
    });

});