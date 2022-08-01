- Separate Server Rendering And Front End Hydration.
  \*\* Webpack Configuration Files
  \*\* Bundling Strategies For Better Performance.

- Static Routing vs. Browser Routing
  \*\* Same Routes File, But Consume Differently By Server And Client.
  \*\* 1 Set Of Routes, But 2 Separate Routers
  \*\* The HTML Served By The Server And Client Should Be The Same. (This Could Be A Potencial Common Error)
  \*\* Express Will Delegate Routing To React Router DOM. Express Routing Will Identy The URL First And Then Passing It To RRD.

- Use Redux (State Management System) To Handle Data. 4 Challenges:
  \*\* Redux Needs Different Config On Browser And Server.
  \*\* Aspects of Auth Needs To Be Handled On Server. Normally This Is Only On Browser. Uses Cookies 4 Auth, However Server Has No Easy Way To Access Cookies.
  \*\* Need Some Way To Detect When All Initial Data Load Action Creators Are Completed On Server.
  \*\* Need State Rehydration On The Browser.

  An Action Creator = Fetch Data From API.

  API ENDPOINT: https://react-ssr-api.herokuapp.com/

* Redux
  \*\* Definition:
  Redux is a pattern for managing and updating app state, using events called 'actions'.
  Redux make it easier to understand when, where, why and how the state in your app is beig updated, and how your app logic will behave when those changes occur.
  \*\* Might be useful when:

  - You have large amount of app state that are needed in many places in the app.
  - The app state is updated frequently.
  - The logic to update that state may be complex.
  - The app has a medium or large-sized codebase.

  \*\* Terminology
  \*\*\* Actions
  You can think of an action as an event that describes something that happened in the app.
  Typically looks like:

  const action = {
  type: 'todos/todoAdded' // domain/eventName syntax.
  payload: 'Buy Milk' // Additional information.
  }

  \*\*\* Action Creators
  An action creator is a function that creates and returns an action object.

  const addTodo = (text) => {
  return {
  type: 'todos/todoAdded',
  payload: text
  }
  }

  \*\*\* Reducers
  You can think of a reducer as an event listener which handles events based on the received action (event) type.

  (state, action) => newState

  Reducers must always follow some specific rules:

  - They should only calculate the new state value based on the state and action arguments.
  - They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied value.
  - They must not do any asynchronous logic, calculate random values, or cause other 'side effects'.

  \*\*\* Store
  The current Redux app state lives in an object called the store.

  import { configureStore } from '@reduxjs/toolkit';

  const store = configureStore({ reducer: reduxReducer });

  \*\*\* Dispatch
  The only way to update the state is to call store.dispatch(); and pass in an action object.

  store.dispatch({ type: 'counter/increment' });

  You can think of dispatching actions as 'triggering an event' in the app.

  \*\*\* Selectors
  Selectors are functions that know how to extract specific pieces of information from a store state value.

  const selectValue = (state) => state.value;

  \*\* Redux App Data Flow
