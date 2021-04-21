import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('<App rendering />', () => {
    
    it('should render h2-title "Phonebook"', () => {
      const wrapper = shallow(<App />);
      const title = wrapper.find('h2');
      expect(title.hasClass('center')).toEqual(true);
      const result = title.text();
      expect(result).toBe('Phonebook');
    });

    it('should render h3-titles "Add new" and "Numbers"', () => {
        const wrapper = shallow(<App />);
        const title1 = wrapper.find('h3').at(0);
        const result = title1.text();
        expect(result).toBe('Add new');
        const title2 = wrapper.find('h3').at(1);
        const result2 = title2.text();
        expect(result2).toBe('Numbers');
      });
      
});