import React from 'react';
import { shallow, mount } from 'enzyme';
import Persons from './Persons';

const onePersonTestArray = [
    {
        id: "6032bf017b3aa7b55ccf8bda",
        name: "Mari Mallikas",
        number: "0443234556"
    }
]

// props can be added in individual tests
const createTestProps = (props) => {
    return {
        personsToShow: onePersonTestArray,
        onDelete: jest.fn(), // mock function
        ...props,
    };
};

// props are created for all tests in beforeEach
let props;
beforeEach(() => {
    props = createTestProps();
});

describe('<Persons rendering />', () => {

    it('should render one collection when there is at least one person in the list', () => {
        const wrapper = shallow(<Persons {...props} />);
        const collection = wrapper.find('ul.collection');
        expect(collection.exists()).toEqual(true);
        expect(collection).toHaveLength(1);
    });

    it('should render one collection-item when there is one person in the list', () => {
        const wrapper = mount(<Persons {...props} />); // mount necessary
        const item = wrapper.find('li.collection-item');
        expect(item.exists()).toEqual(true);
        expect(item).toHaveLength(1);
        const result = item.text();
        expect(result).toContain("Mari Mallikas");
        expect(result).toContain("0443234556");
    });

    it('should render only div with text when the list is empty', () => {
        const wrapper = shallow(<Persons {...props} personsToShow={[]} />);
        const emptyList = wrapper.find('div.empty');
        expect(emptyList.exists()).toEqual(true);
        const result = emptyList.text();
        expect(result).toBe('No phone numbers saved in the phonebook.');
        const collection = wrapper.find('ul.collection');
        expect(collection.exists()).toEqual(false);
    });

});

describe('<Persons /> interactions', () => {

    it('Delete button should call the onDelete props function', () => {
        const wrapper = mount(<Persons {...props} />);
        wrapper.find('button#deleteBtn').simulate('click');
        expect(props.onDelete).toHaveBeenCalledTimes(1);
    });
});