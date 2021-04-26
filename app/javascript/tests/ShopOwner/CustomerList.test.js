import { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import React from 'react';
import CustomerList from '../../components/ShopOwner/ShopDashboard/CustomerList.jsx';
import CustomerBox from '../../components/ShopOwner/ShopDashboard/CustomerBox.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('rendering CustomerList', () => {
    let wrapper;
    let customers = [
        {"id":76,"name":"Chad Palmer","email":"chad.palmer@yale.edu","created_at":"2021-04-26T02:23:31.552Z","updated_at":"2021-04-26T02:23:31.552Z","password_digest":null,"phone":"(123) 456-7890"},
        {"id":77,"name":"Jonas Kavaliauskas","email":"jonas.kavaliauskas@yale.edu","created_at":"2021-04-26T02:23:31.555Z","updated_at":"2021-04-26T02:23:31.555Z","password_digest":null,"phone":"(123) 456-7890"},
        {"id":78,"name":"Carl Viyar","email":"carl.viyar@yale.edu","created_at":"2021-04-26T02:23:31.559Z","updated_at":"2021-04-26T02:23:31.559Z","password_digest":null,"phone":"(123) 456-7890"},
        {"id":79,"name":"Nico Burbano","email":"nico.burbano@yale.edu","created_at":"2021-04-26T02:23:31.562Z","updated_at":"2021-04-26T02:23:31.562Z","password_digest":null,"phone":"(123) 456-7890"}
    ];
    beforeEach(() => { wrapper = shallow(<CustomerList customers={customers}/>); });

    it('renders 4 divs', () => {
        expect(wrapper.find('div')).toHaveLength(4);
    });

    it('renders 4 CustomerBox components', () => {
        expect(wrapper.find(CustomerBox)).toHaveLength(4);
    });
});