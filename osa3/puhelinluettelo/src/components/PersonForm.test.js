import React from 'react';
import { shallow, mount } from 'enzyme';
import PersonForm from './PersonForm';

// note: props can be added in individual tests
const createTestProps = (props) => {
    return {
        addNew: jest.fn(), //mock function
        onChangeNameHandler: jest.fn(), //mock function
        onChangeNumberHandler: jest.fn(), // mock function
        ...props,
    };
};

// props are created for all tests in beforeEach
let props;
beforeEach(() => {
    props = createTestProps();
});

describe('<PersonForm rendering />', () => {

    it('should render one form', () => {
        const wrapper = shallow(<PersonForm />);
        const form = wrapper.find('form');
        expect(form.exists()).toEqual(true);
        expect(form).toHaveLength(1);
    });

    it('should render two input fields: name and phone number', () => {
        const wrapper = shallow(<PersonForm />);
        const inputFields = wrapper.find('input');
        expect(inputFields).toHaveLength(2);
        expect(wrapper.exists('#nameInput')).toEqual(true);
        expect(wrapper.exists('#phoneInput')).toEqual(true);
    });

    it('contains an "Add" button', () => {
        const wrapper = shallow(<PersonForm />);
        const button = wrapper.find('button#addBtn');
        expect(button.exists()).toEqual(true);
        expect(button.text()).toEqual('Add');
    });

});

describe('<PersonForm /> interactions', () => {

    it('should call the onChangeNameHandler mockfunction when name is entered', () => {
        const wrapper = shallow(<PersonForm {...props} />);
        const namefield = wrapper.find('#nameInput');
        expect(namefield.exists()).toEqual(true);

        // when changing the input value
        // the props function must be called
        namefield.simulate('change',
            {
                target: { value: 'Maija Mallikas' }
            });
        expect(props.onChangeNameHandler).toHaveBeenCalledWith({"target": {"value": "Maija Mallikas"}});
    });

    it('should call the onChangeNumberHandler mockfunction when phonenumber is entered', () => {
        const wrapper = shallow(<PersonForm {...props} />);
        const phonefield = wrapper.find('#phoneInput');
        expect(phonefield.exists()).toEqual(true);

        // when changing the input value
        // the props function must be called
        phonefield.simulate('change',
            {
                target: { value: '0401234567' }
            });
        expect(props.onChangeNumberHandler).toHaveBeenCalledWith({"target": {"value": "0401234567"}});
    });

    it('Add button submits the form and the addNew mockFunction must be called', () => {
        const wrapper = mount(
            <PersonForm {...props} />
        );
        wrapper.find('button#addBtn').simulate('submit');
        expect(props.addNew).toHaveBeenCalledTimes(1);
    });
});