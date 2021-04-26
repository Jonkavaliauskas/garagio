// import { mount, render, shallow } from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import Enzyme from 'enzyme';
// import React from 'react';
// import { act } from 'react-dom/test-utils';
// import EventInfo from '../../components/ShopOwner/ShopDashboard/EventInfo.jsx';
// import FinalizeAppointment from '../../components/Customer/FinalizeAppointment.jsx';

// Enzyme.configure({ adapter: new Adapter() });

// describe('rendering FinalizeAppointment', () => {

//     let wrapper;
//     // const mockSuccessResponse = {"id":69,"customer_id":76,"make":"Toyota","model":"Prius","year":2007,"created_at":"2021-04-26T02:23:31.578Z","updated_at":"2021-04-26T02:23:31.578Z","body_style":"Hatchback","info":null,"customer":{"id":76,"name":"Chad Palmer","email":"chad.palmer@yale.edu","created_at":"2021-04-26T02:23:31.552Z","updated_at":"2021-04-26T02:23:31.552Z","password_digest":null,"phone":"(123) 456-7890"}};
//     // const mockJsonPromise = Promise.resolve(mockSuccessResponse);
//     // const mockFetchPromise = Promise.resolve({
//     //     json: () => mockJsonPromise,
//     // });
//     beforeEach(async () => { 
//         const handleSubmit = jest.fn();
//         wrapper = mount(<FinalizeAppointment />); 
//         // year: year,
//         // make: make,
//         // model: model,
//         // body: body,
//         // shop: shop,
//         // services: services
//     });
//     // afterEach(() => {
//     //     global.fetch.mockClear();
//     //     delete global.fetch;
//     // });

//     it('renders one <form>', () => {
//         expect(wrapper.find('form')).toHaveLength(1);
//     });

//     it('renders 3 <input> fields', () => {
//         expect(wrapper.find('input')).toHaveLength(3);
//     });

//     it('renders 1 <PhoneInput> component', () => {
//         expect(wrapper.find('PhoneInput')).toHaveLength(3);
//     });

//     it('calls onSubmit when Submit is pressed', () => {
//         wrapper.find('button').simulate('click');
//         expect(handleSubmit.mock.calls.length).toEqual(1);
//     });
// });