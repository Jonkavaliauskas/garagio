import { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import React from 'react';
import CustomerBox from '../../components/ShopOwner/ShopDashboard/CustomerBox.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('rendering CustomerBox', () => {
    let wrapper;
    beforeEach(() => { wrapper = shallow(<CustomerBox name="Nico Burbano" email="nico.burbano@yale.edu" phone='(123) 456-7890' />); });

    it('renders three <p>s with the right classes', () => {
        expect(wrapper.find('p')).toHaveLength(3);
        expect(wrapper.find('p.customer-name')).toHaveLength(1);
        expect(wrapper.find('p.customer-email')).toHaveLength(1);
        expect(wrapper.find('p.customer-phone')).toHaveLength(1);
    });

    it('renders correct info', () => {
        expect(wrapper.find('p.customer-name').render().text()).toEqual('Nico Burbano');
        expect(wrapper.find('p.customer-email').render().text()).toEqual('nico.burbano@yale.edu');
        expect(wrapper.find('p.customer-phone').render().text()).toEqual('(123) 456-7890');
    })

    it('renders parent div', () => {
        expect(wrapper.find('div.customer-box')).toHaveLength(1);
    });
});