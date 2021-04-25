import { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import React from 'react';
import CustomerList from '../../components/ShopOwner/ShopDashboard/CustomerList.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('loading CustomerList', () => {
    // let wrapper;
    let customers = [
        {"id":65,"name":"Chad Palmer","email":"chad.palmer@yale.edu","created_at":"2021-04-19T17:27:32.944Z","updated_at":"2021-04-19T17:27:32.944Z","password_digest":null,"phone":"(123) 456-7890","appointments":[{"id":70,"customer_id":65,"date":"2021-04-01T13:30:00.000Z","car_issue":"ac broke","last_quote":null,"invoice_number":null,"created_at":"2021-04-19T17:27:36.246Z","updated_at":"2021-04-19T17:27:36.246Z","shop_owner_id":34,"car_id":58},{"id":74,"customer_id":65,"date":"2021-04-21T13:30:00.000Z","car_issue":"ac broke","last_quote":null,"invoice_number":null,"created_at":"2021-04-19T17:27:36.266Z","updated_at":"2021-04-19T17:27:36.266Z","shop_owner_id":35,"car_id":58}],"cars":[{"id":58,"customer_id":65,"make":"Toyota","model":"Prius","year":2007,"created_at":"2021-04-19T17:27:32.964Z","updated_at":"2021-04-19T17:27:32.964Z","body_style":"Hatchback","info":null}]}
    ];
    // beforeEach(() => { wrapper = shallow(<CustomerList customers={customers}/>); });

    it('has div with class name: testing', () => {
        const wrapper = shallow(<div className="some-class" />);
        expect(wrapper.exists('.some-class')).toEqual(true);
    })
});