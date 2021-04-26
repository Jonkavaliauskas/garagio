import { mount, render, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import EventInfo from '../../components/ShopOwner/ShopDashboard/EventInfo.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('rendering EventInfo', () => {

    let wrapper;
    const closeEvent = jest.fn();
    const event = {
        title: 'Chad Palmer',
        start: new Date("2021-04-01T13:30:00.000Z"),
        end: new Date("2021-04-01T14:30:00.000Z"),
        appt: {"id":89,"customer_id":76,"date":"2021-04-01T13:30:00.000Z","car_issue":"ac broke","last_quote":null,"invoice_number":null,"created_at":"2021-04-26T02:23:33.024Z","updated_at":"2021-04-26T02:23:33.024Z","shop_owner_id":42,"car_id":69},
        customer: {
                "id":76,"name":"Chad Palmer","email":"chad.palmer@yale.edu","created_at":"2021-04-26T02:23:31.552Z","updated_at":"2021-04-26T02:23:31.552Z","password_digest":null,"phone":"(123) 456-7890","appointments":[{"id":89,"customer_id":76,"date":"2021-04-01T13:30:00.000Z","car_issue":"ac broke","last_quote":null,"invoice_number":null,"created_at":"2021-04-26T02:23:33.024Z","updated_at":"2021-04-26T02:23:33.024Z","shop_owner_id":42,"car_id":69},{"id":93,"customer_id":76,"date":"2021-04-21T13:30:00.000Z","car_issue":"ac broke","last_quote":null,"invoice_number":null,"created_at":"2021-04-26T02:23:33.042Z","updated_at":"2021-04-26T02:23:33.042Z","shop_owner_id":43,"car_id":69}],"cars":[{"id":69,"customer_id":76,"make":"Toyota","model":"Prius","year":2007,"created_at":"2021-04-26T02:23:31.578Z","updated_at":"2021-04-26T02:23:31.578Z","body_style":"Hatchback","info":null}]
        }
    }
    const mockSuccessResponse = {"id":69,"customer_id":76,"make":"Toyota","model":"Prius","year":2007,"created_at":"2021-04-26T02:23:31.578Z","updated_at":"2021-04-26T02:23:31.578Z","body_style":"Hatchback","info":null,"customer":{"id":76,"name":"Chad Palmer","email":"chad.palmer@yale.edu","created_at":"2021-04-26T02:23:31.552Z","updated_at":"2021-04-26T02:23:31.552Z","password_digest":null,"phone":"(123) 456-7890"}};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
    });
    beforeEach(async () => { 
        global.fetch = jest.fn().mockImplementation( () => mockFetchPromise );
        await act( async () => {
            wrapper = mount(<EventInfo event={event} closeEvent={closeEvent} />); 
        });
    });
    afterEach(() => {
        global.fetch.mockClear();
        delete global.fetch;
    });

    it('renders form (EventInfo box)', () => {
        expect(wrapper.find('form.event-info-box')).toHaveLength(1);
    });

    it('renders Vehicle Info', async () => {
        const currentDiv = wrapper.find('#vehicle-info');
        expect(currentDiv.find('p.information').render().text()).toEqual('2007 Toyota Prius');
    });

    it('renders VehicleIssue correctly', async () => {
        const currentDiv = wrapper.find('#vehicle-issue');
        expect(currentDiv.find('textarea').render().text()).toEqual("ac broke");
    });
});