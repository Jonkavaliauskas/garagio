import { mount, render, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import FinalizeAppointment from '../../components/Customer/FinalizeAppointment.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('rendering FinalizeAppointment', () => {

    let wrapper;
    beforeEach(async () => { 
        wrapper = mount(<FinalizeAppointment location={{
            state: {
                year: '1',
                make: '2',
                model: '3',
                body: '4',
                shop: '5',
                services: '6'
            }
        }}/>); 
    });

    it('renders one <form>', () => {
        expect(wrapper.find('form')).toHaveLength(1);
    });

    it('renders 4 <input> fields', () => {
        expect(wrapper.find('input')).toHaveLength(4);
    });

    it('renders 1 <PhoneInput> component', () => {
        expect(wrapper.find('PhoneInput')).toHaveLength(1);
    });
});