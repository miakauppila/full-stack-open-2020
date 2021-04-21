import React from 'react';
import { shallow } from 'enzyme';
import Notification from './Notification';

describe('<Notification rendering />', () => {
    
    it('should render message correctly', () => {
      const testMessage = 'Added new contact';
      const wrapper = shallow(<Notification message={testMessage} />);
      const msg = wrapper.find('div');
      expect(msg.hasClass('message')).toEqual(true);
      const result = msg.text();
      expect(result).toBe('Added new contact');
    });

    it('should render error correctly', () => {
        const testError = 'Sorry, error';
        const wrapper = shallow(<Notification errorMessage={testError} />);
        const error = wrapper.find('div');
        expect(error.hasClass('error')).toEqual(true);
        const result = error.text();
        expect(result).toBe('Sorry, error');
      });

      it('should not render when there is no content', () => {
        const wrapper = shallow(<Notification message={null} errorMessage={null} />);
        const notification = wrapper.find('div');
        expect(notification.exists()).toEqual(false);
      });
      
});