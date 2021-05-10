# Garagio

An app to connect auto repair shops with customers in need of service!

## Functionality

Customers are able to sign up for a service by inputting their car information, their service information, selecting a car shop, and making an appointment.

Auto shops are able to sign up for an account and access a dashboard (pun intended), which contains a calendar view of their appointments, a list of current customers and their contact info, and information about the appointments.

## Structure of the Codebase

Our tech stack is Ruby on Rails with React.

### Front-end -- React

All front-end React components can be found under /app/javascript/components, with sub-folders describing components for the customer workflow and the auto shop workflow.

The file app/javascript/routes.jsx describes the urls that can be accessed and which main webpage components are loaded with each url.

Stylesheets can be found under /app/assets/stylesheets.

### Back-end -- Ruby on Rails

The code for our API can be found under /app/controllers/api/v1/

API calls can be made in the browser by going to the url /api/v1/...", with routes as indicated in /config/routes.rb. These allow for basic CRUD operations with a local postgresql database.

## Testing

Front-end testing was implemented with the Jest test-running framework with Enzyme as a supplemental testing library. These can be found under app/javascript/tests. These unit tests make sure that components load and have the correct structure.

Back-end testing was implemented with RSpec, a testing tool for Ruby code. These are found in /spec/models. These tests make sure that our databases only accept valid CRUD operations.
