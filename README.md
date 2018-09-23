# RestoTracker
Diplomarbeit für staatlich anerkannte Prüfung. 16.09.2018 - WIP

This is the repository for the application that I have to present for getting my official certification as software developer.

The work started on 16.09.2018.

# Basic information about the app

RestoTracker will be a simple full-stack application built in JavaScript, using React-Redux-Ant Design-SCSS frontend and ExpressJS-MongoDB backend, via FeathersJS, Mongoose and SocketIO for API calls. It will emulate the workflow in a restaurant from the service personnel's perspective in a simplified way.

# Planned features

RestoTracker will need password authentication from users on each login.

After login, the user will be presented with a list of tables. On selecting a table, user will be routed to the corresponding page, where a search bar is presented with a list of available menu items.

The tracking of consumption happens in Redux store using Saga.

Closing the table triggers a print function set up for 80mm paper rolls.

After closing the tables the current table's data gets sent to a /manager endpoint. This will be the manager's login page, which uses JWT to handle access rights.

The manager can filter and track data and send reports in email through the Mailgun API.

# Milestones

- Setting up the working environment
- Rough backend work - endpoints, services
- Container logic, component design with reusability in sight
- Drawing up store handling logic
- Setting up logic for managerial needs, exploring printing options and Mailgun features
- Reassessment of tests
- Deployment

# User Stories

Challenging user stories will be detailed here.

US 1 - Frontend backbone switched to React-Slingshot for convenience
US 2 - Frontend: Basic url routing drawn up, store set up, redux-saga implemented, layouts deployed, authorization drawn up
