## Resources

\***\*Read or watch:\*\***

- [Redux](/rltoken/Yd9gOVf8dlCViUZFilvDMw)
- [Create Slice](/rltoken/ooeD3LckPHBmgogu7lEqkQ)
- [Extra reducers](/rltoken/VAdgWlGruL-Pblt6A5Y6iw)
- [Root reducer](/rltoken/PHZHwM7Rig8lmConVHWWog)
- [Mock Axios](/rltoken/kRbIyf5Ycq6ZuGlXaO2GuA)

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/YWniKf3iaJwqGkGNcBBZWg), **without the help of Google**:

- Why Redux is Awesome
- How to manage state through redux slices
- What Happens When You Dispatch an Action in Redux
- What is a Redux Store
- How to Access State using useSelector
- How to dispatch actions using useDispatch

## Requirements

- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 10.x.x`
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the project’s folder and each task’s folder, is mandatory
- Install Jest globally: `npm install -g jest` version `29.7.0`

## Tasks

### 1.

"In this task you'll update your project structure, and to achieve that update your \`src\` to the one below:\\r\\n\\r\\n\`\`\`\\r\\nsrc/\\r\\n│\\r\\n├── app/\\r\\n│ ├── store.js\\r\\n│ └── rootReducer.js\\r\\n│\\r\\n├── features/\\r\\n│ ├── auth/\\r\\n│ │ └── authSlice.js\\r\\n│ ├── notifications/\\r\\n│ │ └── notificationsSlice.js\\r\\n│ └── courses/\\r\\n│ └── coursesSlice.js\\r\\n│\\r\\n├── components/\\r\\n│ ├── Header/\\r\\n│ │ ├── Header.jsx\\r\\n│ │ └── Header.spec.js\\r\\n│ ├── Footer/\\r\\n│ │ ├── Footer.jsx\\r\\n│ │ └── Footer.spec.js\\r\\n│ ├── BodySection/\\r\\n│ │ ├── BodySection.jsx\\r\\n│ │ └── BodySection.spec.js\\r\\n│ ├── BodySectionWithMarginBottom/\\r\\n│ │ ├── BodySectionWithMarginBottom.jsx\\r\\n│ │ └── BodySectionWithMarginBottom.spec.js\\r\\n│ ├── HOC/\\r\\n│ │ ├── WithLogging.jsx\\r\\n│ │ └── WithLogging.spec.js\\r\\n│ ├── NotificationItem/\\r\\n│ │ ├── NotificationItem.jsx\\r\\n│ │ └── NotificationItem.spec.js\\r\\n│ └── Notifications/\\r\\n│ ├── Notifications.jsx\\r\\n│ └── Notifications.spec.js\\r\\n│\\r\\n├── pages/\\r\\n│ ├── CourseList/\\r\\n│ │ ├── CourseList.jsx\\r\\n│ │ ├── CourseList.spec.js\\r\\n│ │ └── CourseListRow/\\r\\n│ │ ├── CourseListRow.jsx\\r\\n│ │ └── CourseListRow.spec.js\\r\\n│ └── Login/\\r\\n│ ├── Login.jsx\\r\\n│ └── Login.spec.js\\r\\n│\\r\\n├── hooks/\\r\\n│ └── useLogin.jsx\\r\\n│\\r\\n├── utils/\\r\\n│ ├── utils.js\\r\\n│ └── utils.spec.js\\r\\n│\\r\\n├── assets/\\r\\n│ ├── close-icon.png\\r\\n│ └── holberton-logo.jpg\\r\\n│\\r\\n├── tests/\\r\\n│ └── App.spec.js\\r\\n│\\r\\n├── App.jsx\\r\\n├──appReducer.js\\r\\n└── main.jsx\\r\\n\`\`\`\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Package to install:\*\*\\r\\n\\r\\n- reduxjs/toolkit\\r\\n- react-redux\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\nYour \`src\` folder must follow the above structure (and even empty the new files must be included in your project structure)\\r\\n\\r\\nYour React application works as expected\\r\\n\\r\\nAll your unit tests PASS"

In this task you'll update your project structure, and to achieve that update your `src` to the one below:

src/
│
├── app/
│ ├── store.js
│ └── rootReducer.js
│
├── features/
│ ├── auth/
│ │ └── authSlice.js
│ ├── notifications/
│ │ └── notificationsSlice.js
│ └── courses/
│ └── coursesSlice.js
│
├── components/
│ ├── Header/
│ │ ├── Header.jsx
│ │ └── Header.spec.js
│ ├── Footer/
│ │ ├── Footer.jsx
│ │ └── Footer.spec.js
│ ├── BodySection/
│ │ ├── BodySection.jsx
│ │ └── BodySection.spec.js
│ ├── BodySectionWithMarginBottom/
│ │ ├── BodySectionWithMarginBottom.jsx
│ │ └── BodySectionWithMarginBottom.spec.js
│ ├── HOC/
│ │ ├── WithLogging.jsx
│ │ └── WithLogging.spec.js
│ ├── NotificationItem/
│ │ ├── NotificationItem.jsx
│ │ └── NotificationItem.spec.js
│ └── Notifications/
│ ├── Notifications.jsx
│ └── Notifications.spec.js
│
├── pages/
│ ├── CourseList/
│ │ ├── CourseList.jsx
│ │ ├── CourseList.spec.js
│ │ └── CourseListRow/
│ │ ├── CourseListRow.jsx
│ │ └── CourseListRow.spec.js
│ └── Login/
│ ├── Login.jsx
│ └── Login.spec.js
│
├── hooks/
│ └── useLogin.jsx
│
├── utils/
│ ├── utils.js
│ └── utils.spec.js
│
├── assets/
│ ├── close-icon.png
│ └── holberton-logo.jpg
│
├── tests/
│ └── App.spec.js
│
├── App.jsx
├──appReducer.js
└── main.jsx

**Package to install:**

- reduxjs/toolkit
- react-redux

**Requirements:**

Your `src` folder must follow the above structure (and even empty the new files must be included in your project structure)

Your React application works as expected

All your unit tests PASS

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_redux-part1`
- **File:** `task_0/dashboard/src`

### 2.

"In this task, you will create a Redux slice called authSlice to manage the authentication state of a React application. This slice will handle user login and logout functionality, storing the user's email, password, and authentication status.\\r\\n\\r\\nIn the \`authSlice.js\` file:\\r\\n\\r\\nCreate an \`initialState\` object to represent the initial authentication state. This object should include:\\r\\n\\r\\n- \`user\` object with the following properties:\\r\\n\\t- email: Initialized as an empty string\\r\\n\\t- password: Initialized as an empty string\\r\\n- \`isLoggedIn\` property: Initialized as false\\r\\n\\r\\nCreate the \`authSlice\` object using the Redux Toolkit \`createSlice\` function to create the slice, and ensure that:\\r\\n\\r\\n- The slice is named \`auth\`\\r\\n- The \`initialState\` object is passed as the default state of the slice\\r\\n- The slice includes the following reducers:\\r\\n\\t- \`login\` Reducer:\\r\\n\\t\\t- Updates the state with the user's email and password from the action payload\\r\\n\\t\\t- Sets isLoggedIn to true\\r\\n\\r\\n\\t- \`logout\` Reducer:\\r\\n\\t\\t- Resets the user object's email and password to their initial values\\r\\n\\t\\t- Sets isLoggedIn to false\\r\\n\\r\\n\\r\\nDon't forget to export the authSlice \`reducer\` as default export and the \`actions\` as named exports\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Tip:\*\*\\r\\n\\r\\nThe logout action is always a state reset, there's no need for any payload\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Tests:\*\*\\r\\n\\r\\nYou should use the package \`jest-mock-axios\` to simulate mocking requests\\r\\n\\r\\nCheck that the \`authSlice\`:\\r\\n\\r\\n- Returns the correct initial state by default\\r\\n- Updates the state correctly when the login action is dispatched:\\r\\n\\t- The user object's email and password should match the values from the action payload\\r\\n\\t- The isLoggedIn property should be set to true.\\r\\n- Resets the state correctly when the logout action is dispatched:\\r\\n\\t- The user object's email and password should be reset to empty string\\r\\n\\t- The isLoggedIn property should be set to false.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\nYour React application core features and state follow remains intact and works as expected\\r\\n\\r\\nYour new unit tests PASS\\r\\n\\r\\nNo console warns or errors\\r\\n\\r\\nNo lint errors"

In this task, you will create a Redux slice called authSlice to manage the authentication state of a React application. This slice will handle user login and logout functionality, storing the user's email, password, and authentication status.

In the `authSlice.js` file:

Create an `initialState` object to represent the initial authentication state. This object should include:

- `user` object with the following properties:
  - email: Initialized as an empty string
  - password: Initialized as an empty string
- `isLoggedIn` property: Initialized as false

Create the `authSlice` object using the Redux Toolkit `createSlice` function to create the slice, and ensure that:

- The slice is named `auth`
- The `initialState` object is passed as the default state of the slice
- The slice includes the following reducers:
  - `login` Reducer:
    - Updates the state with the user's email and password from the action payload
    - Sets isLoggedIn to true

  - `logout` Reducer:
    - Resets the user object's email and password to their initial values
    - Sets isLoggedIn to false

Don't forget to export the authSlice `reducer` as default export and the `actions` as named exports

**Tip:**

The logout action is always a state reset, there's no need for any payload

**Tests:**

You should use the package `jest-mock-axios` to simulate mocking requests

Check that the `authSlice`:

- Returns the correct initial state by default
- Updates the state correctly when the login action is dispatched:
  - The user object's email and password should match the values from the action payload
  - The isLoggedIn property should be set to true.
- Resets the state correctly when the logout action is dispatched:
  - The user object's email and password should be reset to empty string
  - The isLoggedIn property should be set to false.

**Requirements:**

Your React application core features and state follow remains intact and works as expected

Your new unit tests PASS

No console warns or errors

No lint errors

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_redux-part1`
- **File:** `task_1/dashboard/src/features/auth/authSlice.js, task_1/dashboard/src/features/tests/authSlice.spec.js`

### 3.

"In this task, you will create a Redux slice called \`notificationsSlice\` to manage the notifications state of a React application. \\r\\n\\r\\nThis slice will handle fetching notifications, marking notifications as read, and controlling the visibility of the notifications drawer.\\r\\n\\r\\n\\r\\nIn the \`notificationsSlice.js\` file:\\r\\n\\r\\nCreate an \`initialState\` object to represent the initial notifications state. This object should include:\\r\\n\\r\\n- A \`notifications\` array: Initialized as an empty array.\\r\\n- A \`displayDrawer\` boolean: Initialized as true.\\r\\n\\r\\nSet Up the API Configuration:\\r\\n\\r\\n- Define a constant \`API_BASE_URL\` to store the base URL of your API (e.g., \`http://localhost:5173\`)\\r\\n- Create an \`ENDPOINTS\` object to store the API endpoints. For this task, include:\\r\\n\\t- notifications: The endpoint to fetch notifications (e.g., \`${API_BASE_URL}/notifications.json\`)\\r\\n\\r\\nCreate and export the \`fetchNotifications\` Async Thunk:\\r\\n\\r\\n- Use the \`createAsyncThunk\` function to handle fetching notifications from the API\\r\\n- Provide the action type string \`'notifications/fetchNotifications'\` as the first argument to createAsyncThunk\\r\\n- The thunk should:\\r\\n\\t- Fetch the notifications from the ENDPOINTS.notifications endpoint\\r\\n\\t- Update the notification with id \`3\` to include the latest notification from the \`getLatestNotification\` utility function\\r\\n\\t- Return the updated notifications array.\\r\\n\\r\\nCreate the \`notificationsSlice\` object using the Redux Toolkit \`createSlice\` function, and ensure that:\\r\\n\\r\\n- The slice is named \`notifications\`\\r\\n- The \`initialState\` object is passed as the default state of the slice\\r\\n- The slice includes the following reducers:\\r\\n\\t- \`markNotificationAsRead\` Reducer:\\r\\n\\t\\t- Removes a notification from the notifications array based on its id\\r\\n\\t\\t- Log to console the removed notification id (the same you applied in the \`markNotificationAsRead\` handler before)\\r\\n\\t- \`showDrawer\` Reducer:\\r\\n\\t\\t- Sets displayDrawer to true\\r\\n\\t- \`hideDrawer\` Reducer:\\r\\n\\t\\t- Sets displayDrawer to false.\\r\\n\\r\\n\\t\\t\\t\\r\\n- The slice includes an \`extraReducers\` section to handle the \`fetchNotifications\` async thunk:\\r\\n\\t- Updates the notifications array with the fetched data when the fetchNotifications thunk is fulfilled.\\r\\n\\r\\n- Don't forget to export the \`notificationsSlice\` reducer as the default export and the actions (\`markNotificationAsRead\`, \`showDrawer\`, \`hideDrawer\`) as named exports.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Tip:\*\*\\r\\n\\r\\n- The \`showDrawer\` and \`hideDrawer\` actions are simple state updates, so there's no need for a payload.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Tests:\*\*\\r\\n\\r\\nCheck that the \`notificationsSlice\`:\\r\\n\\r\\n- Returns the correct initial state by default\\r\\n- fetches notifications data correctly\\r\\n- Removes a notification correctly when the \`markNotificationAsRead\` action is dispatched\\r\\n- Toggles the \`displayDrawer\` state correctly when the \`showDrawer\` and \`hideDrawer\` actions are dispatched\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\nYour React application's core features and state management remain intact and work as expected\\r\\n\\r\\nYour new unit tests PASS\\r\\n\\r\\nNo console warnings or errors\\r\\n\\r\\nNo lint errors."

In this task, you will create a Redux slice called `notificationsSlice` to manage the notifications state of a React application.

This slice will handle fetching notifications, marking notifications as read, and controlling the visibility of the notifications drawer.

In the `notificationsSlice.js` file:

Create an `initialState` object to represent the initial notifications state. This object should include:

- A `notifications` array: Initialized as an empty array.
- A `displayDrawer` boolean: Initialized as true.

Set Up the API Configuration:

- Define a constant `API_BASE_URL` to store the base URL of your API (e.g., `http://localhost:5173`)
- Create an `ENDPOINTS` object to store the API endpoints. For this task, include:
  - notifications: The endpoint to fetch notifications (e.g., `${API_BASE_URL}/notifications.json`)

Create and export the `fetchNotifications` Async Thunk:

- Use the `createAsyncThunk` function to handle fetching notifications from the API
- Provide the action type string `'notifications/fetchNotifications'` as the first argument to createAsyncThunk
- The thunk should:
  - Fetch the notifications from the ENDPOINTS.notifications endpoint
  - Update the notification with id `3` to include the latest notification from the `getLatestNotification` utility function
  - Return the updated notifications array.

Create the `notificationsSlice` object using the Redux Toolkit `createSlice` function, and ensure that:

- The slice is named `notifications`
- The `initialState` object is passed as the default state of the slice
- The slice includes the following reducers:
  - `markNotificationAsRead` Reducer:
    - Removes a notification from the notifications array based on its id
    - Log to console the removed notification id (the same you applied in the `markNotificationAsRead` handler before)
  - `showDrawer` Reducer:
    - Sets displayDrawer to true
  - `hideDrawer` Reducer:
    - Sets displayDrawer to false.

- The slice includes an `extraReducers` section to handle the `fetchNotifications` async thunk:
  - Updates the notifications array with the fetched data when the fetchNotifications thunk is fulfilled.

- Don't forget to export the `notificationsSlice` reducer as the default export and the actions (`markNotificationAsRead`, `showDrawer`, `hideDrawer`) as named exports.

**Tip:**

- The `showDrawer` and `hideDrawer` actions are simple state updates, so there's no need for a payload.

**Tests:**

Check that the `notificationsSlice`:

- Returns the correct initial state by default
- fetches notifications data correctly
- Removes a notification correctly when the `markNotificationAsRead` action is dispatched
- Toggles the `displayDrawer` state correctly when the `showDrawer` and `hideDrawer` actions are dispatched

**Requirements:**

Your React application's core features and state management remain intact and work as expected

Your new unit tests PASS

No console warnings or errors

No lint errors.

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_redux-part1`
- **File:** `task_1/dashboard/src/features/notifications/notificationsSlice.js, task_1/dashboard/src/features/tests/notificationsSlice.spec.js`

### 4.

"In this task, you will create a Redux slice called \`coursesSlice\` to manage the courses state of a React application. \\r\\n\\r\\nThis slice will handle fetching courses from an API and resetting the courses state when the user logs out.\\r\\n\\r\\nCreate an \`initialState\` object to represent the initial courses state. This object should include:\\r\\n\\r\\n- A courses array: Initialized as an empty array\\r\\n- Set Up the API Configuration:\\r\\n\\r\\n\\r\\nDefine a constant \`API_BASE_URL\` to store the base URL of your API (e.g., \`http://localhost:5173\`)\\r\\nCreate an ENDPOINTS object to store the API endpoints. For this task, include:\\r\\n\\r\\n- courses: The endpoint to fetch courses (e.g., \`${API_BASE_URL}/courses.json\`)\\r\\n\\r\\nCreate and export the \`fetchCourses\` Async Thunk:\\r\\n\\r\\n- Use the \`createAsyncThunk\` function to handle fetching courses from the API\\r\\n- Provide the action type string \`'courses/fetchCourses'\` as the first argument to createAsyncThunk\\r\\n- The thunk should:\\r\\n\\r\\n\\t- Fetch the courses from the ENDPOINTS.courses endpoint\\r\\n\\t- Return the fetched courses data.\\r\\n\\r\\n\\r\\nCreate the \`coursesSlice\`:\\r\\n\\r\\n- Use the Redux Toolkit \`createSlice\` function to create the slice. Ensure that:\\r\\n\\r\\n\\t- The slice is named \`courses\`\\r\\n\\t- The \`initialState\` object is passed as the default state of the slice\\r\\n\\t- The slice includes an \`extraReducers\` section to handle the fetchCourses async thunk:\\r\\n\\r\\n\\t\\t- Updates the courses array with the fetched data when the fetchCourses thunk is fulfilled\\r\\n\\r\\n\\r\\nThe slice listens for the \`logout\` action from the \`authSlice\` and resets the courses state to its initial value\\r\\n\\r\\nExport the \`coursesSlice\` reducer as the default export\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Tests:\*\*\\r\\n\\r\\nCheck that the \`coursesSlice\`:\\r\\n\\r\\n- Returns the correct initial state by default\\r\\n- fetches correctly the courses data\\r\\n- resets the courses array to empty whenever the \`logout\` action is dispatched\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\nYour React application’s core features and state management remain intact and work as expected\\r\\n\\r\\nAll your new unit tests PASS\\r\\n\\r\\nNo console warnings or errors\\r\\n\\r\\nNo lint errors\\r\\n"

In this task, you will create a Redux slice called `coursesSlice` to manage the courses state of a React application.

This slice will handle fetching courses from an API and resetting the courses state when the user logs out.

Create an `initialState` object to represent the initial courses state. This object should include:

- A courses array: Initialized as an empty array
- Set Up the API Configuration:

Define a constant `API_BASE_URL` to store the base URL of your API (e.g., `http://localhost:5173`) Create an ENDPOINTS object to store the API endpoints. For this task, include:

- courses: The endpoint to fetch courses (e.g., `${API_BASE_URL}/courses.json`)

Create and export the `fetchCourses` Async Thunk:

- Use the `createAsyncThunk` function to handle fetching courses from the API
- Provide the action type string `'courses/fetchCourses'` as the first argument to createAsyncThunk
- The thunk should:
  - Fetch the courses from the ENDPOINTS.courses endpoint
  - Return the fetched courses data.

Create the `coursesSlice`:

- Use the Redux Toolkit `createSlice` function to create the slice. Ensure that:
  - The slice is named `courses`
  - The `initialState` object is passed as the default state of the slice
  - The slice includes an `extraReducers` section to handle the fetchCourses async thunk:
    - Updates the courses array with the fetched data when the fetchCourses thunk is fulfilled

The slice listens for the `logout` action from the `authSlice` and resets the courses state to its initial value

Export the `coursesSlice` reducer as the default export

**Tests:**

Check that the `coursesSlice`:

- Returns the correct initial state by default
- fetches correctly the courses data
- resets the courses array to empty whenever the `logout` action is dispatched

**Requirements:**

Your React application’s core features and state management remain intact and work as expected

All your new unit tests PASS

No console warnings or errors

No lint errors

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_redux-part1`
- **File:** `task_1/dashboard/src/features/courses/coursesSlice.js, task_1/dashboard/src/features/tests/coursesSlice.spec.js`

### 5.

"\\r\\nIn this task, you will create a root reducer for a Redux application using the \`combineReducers\` function from Redux Toolkit. \\r\\n\\r\\nThe root reducer will combine multiple individual reducers (slices) into a single reducer that manages the overall state of the application\\r\\n\\r\\n\\r\\nUse the \`combineReducers\` function to combine the following reducers into a single \`rootReducer\`\\r\\n\\r\\nThe \`rootReducer\` should structure the state object such that each slice of state is nested under its corresponding key:\\r\\n\\r\\n- \`auth\`: Contains the state managed by authReducer\\r\\n\\r\\n- \`notifications\`: Contains the state managed by notificationsReducer\\r\\n\\r\\n- \`courses\`: Contains the state managed by coursesReducer\\r\\n\\r\\n\\r\\nExport the \`rootReducer\` as the default export of the module\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\nNo console warnings or errors\\r\\n\\r\\nNo lint errors"

In this task, you will create a root reducer for a Redux application using the `combineReducers` function from Redux Toolkit.

The root reducer will combine multiple individual reducers (slices) into a single reducer that manages the overall state of the application

Use the `combineReducers` function to combine the following reducers into a single `rootReducer`

The `rootReducer` should structure the state object such that each slice of state is nested under its corresponding key:

- `auth`: Contains the state managed by authReducer
- `notifications`: Contains the state managed by notificationsReducer
- `courses`: Contains the state managed by coursesReducer

Export the `rootReducer` as the default export of the module

**Requirements:**

No console warnings or errors

No lint errors

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_redux-part1`
- **File:** `task_2/dashboard/src/app/rootReducer.js`

### 6.

"In this task, you will configure a Redux store for a React application using the \`configureStore\` function from Redux Toolkit\\r\\n\\r\\nThe store will use a root reducer to manage the overall state of the application\\r\\n\\r\\n\\r\\nUse the \`configureStore\` function from Redux Toolkit to create the Redux store and pass the \`rootReducer\` as the reducer property in the store configuration\\r\\n\\r\\n\\r\\nExport the configured store as the default export of the module.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\nNo console warnings or errors.\\r\\n\\r\\nNo lint errors in the code."

In this task, you will configure a Redux store for a React application using the `configureStore` function from Redux Toolkit

The store will use a root reducer to manage the overall state of the application

Use the `configureStore` function from Redux Toolkit to create the Redux store and pass the `rootReducer` as the reducer property in the store configuration

Export the configured store as the default export of the module.

**Requirements:**

No console warnings or errors.

No lint errors in the code.

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_redux-part1`
- **File:** `task_2/dashboard/src/app/store.js`

### 7.

"In this task, you will update the \`Header\` component to use Redux for managing the authentication state\\r\\n\\r\\nThe updated Header will no longer receive \`user\` and \`logOut\` as props but will instead interact with the Redux store to determine the user's authentication status and handle logout functionality\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\nTo achieve this make sure that:\\r\\n\\r\\n- You retrieve the \`isLoggedIn\` and \`user\` state from the \`auth\` slice in the Redux store, using the appropriate hook\\r\\n- You dispatch the \`logout\` action when the user clicks the logout link, using the appropriate hook:\\r\\n\\t- Define a \`handleLogout\` function that triggers the logout action\\r\\n- Render conditionally the logout section based on the \`isLoggedIn\` state\\r\\n- Replace the \`logOut\` prop with the \`handleLogout\` function in the logout link's onClick handler\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Note:\*\*\\r\\n\\r\\n\*\*\*From now on your app fail to render and some of your tests failed, YOU'LL FIX THIS LATER\*\*\*\\r\\n"

In this task, you will update the `Header` component to use Redux for managing the authentication state

The updated Header will no longer receive `user` and `logOut` as props but will instead interact with the Redux store to determine the user's authentication status and handle logout functionality

To achieve this make sure that:

- You retrieve the `isLoggedIn` and `user` state from the `auth` slice in the Redux store, using the appropriate hook
- You dispatch the `logout` action when the user clicks the logout link, using the appropriate hook:
  - Define a `handleLogout` function that triggers the logout action
- Render conditionally the logout section based on the `isLoggedIn` state
- Replace the `logOut` prop with the `handleLogout` function in the logout link's onClick handler

**Note:\_From now on your app fail to render and some of your tests failed, YOU'LL FIX THIS LATER_Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_redux-part1`
- **File:** `task_3/dashboard/src/components/Header/Header.jsx`

### 8.

"The same principle went for the \`Header\` component, goes here for the \`Footer\` component\\r\\n\\r\\nThe updated \`Footer\` will no longer receive \`user\` as a prop but will instead interact with the Redux \`store\` to determine the user’s authentication status and conditionally render the \`Contact us\` link\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\nTo achieve this, make sure that:\\r\\n\\r\\n- Use the appropriate hook to retrieve the \`isLoggedIn\` and \`user\` state from the \`auth\` slice in the Redux store\\r\\n- Render the \`Contact us\` link conditionally based on the \`isLoggedIn\` state\\r\\n- Remove the \`user\` prop from the Footer component and rely on the Redux store for state management\\r\\n- Ensure the Footer component continues to display the copyright information and conditionally renders the \\"Contact us\\" link when the user is logged in\\r\\n\\r\\n"

The same principle went for the `Header` component, goes here for the `Footer` component

The updated `Footer` will no longer receive `user` as a prop but will instead interact with the Redux `store` to determine the user’s authentication status and conditionally render the `Contact us` link

To achieve this, make sure that:

- Use the appropriate hook to retrieve the `isLoggedIn` and `user` state from the `auth` slice in the Redux store
- Render the `Contact us` link conditionally based on the `isLoggedIn` state
- Remove the `user` prop from the Footer component and rely on the Redux store for state management
- Ensure the Footer component continues to display the copyright information and conditionally renders the "Contact us" link when the user is logged in

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_redux-part1`
- **File:** `task_4/dashboard/src/components/Footer/Footer.jsx`

### 9.

"In this task, you will update the \`CourseList\` component to use Redux for managing the \`courses\` state. \\r\\n\\r\\nThe updated CourseList will no longer receive courses as a \`prop\` but will instead interact with the Redux store to retrieve the list of courses\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\nTo achieve this, make sure that:\\r\\n\\r\\n- Use the appropriate hook to retrieve the courses state from the courses slice in the Redux store\\r\\n- Remove the courses prop from the CourseList component and rely on the Redux store for state management\\r\\n- Ensure the CourseList component continues to display the \`UI\`\\r\\n- Ensure the CourseList component remains wrapped in the \`WithLogging\` HOC"

In this task, you will update the `CourseList` component to use Redux for managing the `courses` state.

The updated CourseList will no longer receive courses as a `prop` but will instead interact with the Redux store to retrieve the list of courses

To achieve this, make sure that:

- Use the appropriate hook to retrieve the courses state from the courses slice in the Redux store
- Remove the courses prop from the CourseList component and rely on the Redux store for state management
- Ensure the CourseList component continues to display the `UI`
- Ensure the CourseList component remains wrapped in the `WithLogging` HOC

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_redux-part1`
- **File:** `task_5/dashboard/src/pages/CourseList/CourseList.jsx`

### 10.

"In this task, you will update the \`Login\` component to dispatch the login action from the Redux store when the form is submitted. \\r\\n\\r\\nYour task is to integrate Redux dispatch logic into the \`useLogin\` hook's \`onLogin\` callback function\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\nTo achieve this, make sure that:\\r\\n\\r\\n- Use the appropriate hook to dispatch the login action from the \`auth\` slice in the Redux store\\r\\n- Pass the \`login action\` dispatch function to the useLogin hook as the onLogin callback\\r\\n- The Login component must continue to use the useLogin hook for form state management and validation\\r\\n- Remember that the submit button should start in a disabled state and only become enabled when both the email and the password are valid\\r\\n- Remove the \`login prop\` from the Login component and rely on the Redux store for dispatching the login action\\r\\n"

In this task, you will update the `Login` component to dispatch the login action from the Redux store when the form is submitted.

Your task is to integrate Redux dispatch logic into the `useLogin` hook's `onLogin` callback function

To achieve this, make sure that:

- Use the appropriate hook to dispatch the login action from the `auth` slice in the Redux store
- Pass the `login action` dispatch function to the useLogin hook as the onLogin callback
- The Login component must continue to use the useLogin hook for form state management and validation
- Remember that the submit button should start in a disabled state and only become enabled when both the email and the password are valid
- Remove the `login prop` from the Login component and rely on the Redux store for dispatching the login action

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_redux-part1`
- **File:** `task_6/dashboard/src/pages/Login/Login.jsx`

### 11.

"In this task, you will update the \`Notifications\` component to use Redux for managing its state and actions. \\r\\n\\r\\nThe component will no longer rely on props for state and event handlers but will instead use the Redux \`store\` to manage the \`displayDrawer\` state, \`notifications\` list, and the actions \`markNotificationAsRead\`, \`showDrawer\`, and \`hideDrawer\`\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\nTo achieve this, make sure that:\\r\\n\\r\\n- Remove the props from the Notifications component\\r\\n- Use the appropriate hook to access the \`notifications\` and \`displayDrawer\` state from the Redux store\\r\\n- Move the handlers \`handleDisplayDrawer\`, \`handleHideDrawer\`, and \`markNotificationAsRead\` from the App to Notifications component\\r\\n- Replace the prop-based event of these handlers with Redux action dispatchers, and use the appropriate hook to dispatch the corresponding actions\\r\\n- Ensure that the \`markNotificationAsRead\` action is dispatched with the correct notification id\\r\\n\\r\\n\\r\\n"

In this task, you will update the `Notifications` component to use Redux for managing its state and actions.

The component will no longer rely on props for state and event handlers but will instead use the Redux `store` to manage the `displayDrawer` state, `notifications` list, and the actions `markNotificationAsRead`, `showDrawer`, and `hideDrawer`

To achieve this, make sure that:

- Remove the props from the Notifications component
- Use the appropriate hook to access the `notifications` and `displayDrawer` state from the Redux store
- Move the handlers `handleDisplayDrawer`, `handleHideDrawer`, and `markNotificationAsRead` from the App to Notifications component
- Replace the prop-based event of these handlers with Redux action dispatchers, and use the appropriate hook to dispatch the corresponding actions
- Ensure that the `markNotificationAsRead` action is dispatched with the correct notification id

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_redux-part1`
- **File:** `task_7/dashboard/src/components/Notifications/Notifications.jsx`

### 12.

"In this task, you will update the \`App\` component to use Redux for managing its authentication state \`isLoggedIn\` and dispatching side effects (fetching notifications and courses)\\r\\n\\r\\nThe component will no longer rely on local state or a custom reducer (\`appReducer\`) but on Redux state instead\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\nTo achieve this, make sure that:\\r\\n\\r\\n- Delete the \`useReducer\` hook and the \`appReducer\` logic (remove the appReducer file too)\\r\\n- Remove all prop-based event handlers (\`logIn\`, \`logOut\`, \`handleDisplayDrawer\`, \`handleHideDrawer\`, \`markNotificationAsRead\`)\\r\\n- Use the appropriate hook to access the \`isLoggedIn\` state from the \`auth\` slice\\r\\n- Use side effect to dispatch:\\r\\n\\t- \`fetchNotifications\` when the component mounts\\r\\n\\t- \`fetchCourses\` only when the user is logged in\\r\\n- Conditionally render the \`Login\` or \`CourseList\` components based on the isLoggedIn state\\r\\n- remove the \`appReducer\` file, and its related unit tests file\\r\\n\\r\\n\\r\\nDon't forget to wrap the App component with Redux \`Provider\` and pass the store\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Tests:\*\*\\r\\n\\r\\nSince Redux serves as a single source of truth for your application's state, you will need to write unit tests for each component in isolation\\r\\n\\r\\nSet Up Test Environment\\r\\n\\r\\n- Configure testing setup to include Redux store mocking and API request mocking\\r\\n\\r\\n- Import necessary modules like render, screen, userEvent, configureStore, etc...\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\`App\`:\\r\\n\\r\\n- Create a mock store with \`isLoggedIn\` set to \`false\`, render App with the mock store and verify that the \`Login\` component is displayed\\r\\n- Create a mock store with \`isLoggedIn\` set to \`true\`, render App with the mock store and verify that the \`CourseList\` component is displayed\\r\\n- Mock the \`fetchNotifications\` API call, render App and check that the notification items are displayed on mount\\r\\n\\r\\n\`Login\`:\\r\\n\\r\\n- Render the \`Login\` component and verify that the login form is displayed with \`email\`, \`password\` fields, and \`submit button\`\\r\\n- Simulate form submission with valid credentials and verify that \`isLoggedIn\` is set to \`true\`\\r\\n- Simulate form submission with invalid credentials and verify that \`isLoggedIn\` remains \`false\`\\r\\n\\r\\n\`Footer\`:\\r\\n\\r\\n- Render the \`Footer\` component and verify that the \`Copyright {current year} - Holberton School\` text is displayed\\r\\n- Create a mock store with \`isLoggedIn\` set to \`true\`, render the \`Footer\` component and verify that the \\"Contact us\\" link is displayed\\r\\n- Create a mock store with \`isLoggedIn\` set to \`false\`, render the \`Footer\` and verify that the \\"Contact us\\" link is not displayed\\r\\n\\r\\n\`Header\`:\\r\\n\\r\\n- Create a mock store with \`isLoggedIn\` set to \`true\`, render the \`Header\` component, and verify that the \`logout\` link is displayed\\r\\n- Create a mock store, dispatch the \`login\` action, render the \`Header\` component, and verify that a welcome message is displayed with the entered \`email\`\\r\\n- Simulate a \`logout\` action and verify that \`isLoggedIn\` is set to \`false\`\\r\\n\\r\\n\`CourseList\`:\\r\\n\\r\\n- Mock the \`fetchCourses\` API call, render the \`CourseList\` and verify that the \`courses\` list is displayed\\r\\n- Dispatch the \`logout\` action, render the \`CourseList\` component and verify that the courses array is \`reset\`\\r\\n\\r\\n\`Notifications\`:\\r\\n\\r\\n- Mock the \`fetchNotifications\` API call, render the \`Notifications\` component and verify that the notification items are displayed\\r\\n- Simulate \`closing\` the drawer and verify that the \`displayDrawer\` state is set to false\\r\\n- Simulate \`opening\` the drawer and verify that the \`displayDrawer\` state is set to true\\r\\n- Simulate \`marking\` a notification as read and verify that it is removed from the list\\r\\n\\r\\n\`CourseListRow\`:\\r\\n\\r\\n- Render the \`CourseListRow\` component as a \`header\` with one cell and verify that it spans two columns\\r\\n- Render the \`CourseListRow\` component as a \`header\` with two cells and verify both are displayed\\r\\n- Render the \`CourseListRow\` component as a \`regular\` row and verify both cells are displayed\\r\\n\\r\\n\`NotificationItem\`:\\r\\n\\r\\n- Render the \`NotificationItem\` component with \`default\` type and verify that it displays the notification text in \`blue\`\\r\\n- Render the \`NotificationItem\` component with \`urgent\` type and verify that it displays the notification text in \`red\`\\r\\n\\r\\n\`BodySection\`:\\r\\n\\r\\n- Render the \`BodySection\` component with a title and children, and verify that both are displayed\\r\\n\\r\\n\`BodySectionWithMarginBottom\`:\\r\\n\\r\\n- Render the \`BodySectionWithMarginBottom\` component with a title and children, verify that both are displayed\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirement:\*\*\\r\\n\\r\\nNo console warnings or errors\\r\\n\\r\\nNo lint errors in the code\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n!\[\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/1/fb21e0f72477ef3478c794da0a4e935c80005fbc.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260316%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260316T090940Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=0985aec5b84abfccce9533e761aa8d048cbd4abf5187c9eb405c21b6c4c9298f)"

In this task, you will update the `App` component to use Redux for managing its authentication state `isLoggedIn` and dispatching side effects (fetching notifications and courses)

The component will no longer rely on local state or a custom reducer (`appReducer`) but on Redux state instead

To achieve this, make sure that:

- Delete the `useReducer` hook and the `appReducer` logic (remove the appReducer file too)
- Remove all prop-based event handlers (`logIn`, `logOut`, `handleDisplayDrawer`, `handleHideDrawer`, `markNotificationAsRead`)
- Use the appropriate hook to access the `isLoggedIn` state from the `auth` slice
- Use side effect to dispatch:
  - `fetchNotifications` when the component mounts
  - `fetchCourses` only when the user is logged in
- Conditionally render the `Login` or `CourseList` components based on the isLoggedIn state
- remove the `appReducer` file, and its related unit tests file

Don't forget to wrap the App component with Redux `Provider` and pass the store

**Tests:**

Since Redux serves as a single source of truth for your application's state, you will need to write unit tests for each component in isolation

Set Up Test Environment

- Configure testing setup to include Redux store mocking and API request mocking
- Import necessary modules like render, screen, userEvent, configureStore, etc…

`App`:

- Create a mock store with `isLoggedIn` set to `false`, render App with the mock store and verify that the `Login` component is displayed
- Create a mock store with `isLoggedIn` set to `true`, render App with the mock store and verify that the `CourseList` component is displayed
- Mock the `fetchNotifications` API call, render App and check that the notification items are displayed on mount

`Login`:

- Render the `Login` component and verify that the login form is displayed with `email`, `password` fields, and `submit button`
- Simulate form submission with valid credentials and verify that `isLoggedIn` is set to `true`
- Simulate form submission with invalid credentials and verify that `isLoggedIn` remains `false`

`Footer`:

- Render the `Footer` component and verify that the `Copyright {current year} - Holberton School` text is displayed
- Create a mock store with `isLoggedIn` set to `true`, render the `Footer` component and verify that the "Contact us" link is displayed
- Create a mock store with `isLoggedIn` set to `false`, render the `Footer` and verify that the "Contact us" link is not displayed

`Header`:

- Create a mock store with `isLoggedIn` set to `true`, render the `Header` component, and verify that the `logout` link is displayed
- Create a mock store, dispatch the `login` action, render the `Header` component, and verify that a welcome message is displayed with the entered `email`
- Simulate a `logout` action and verify that `isLoggedIn` is set to `false`

`CourseList`:

- Mock the `fetchCourses` API call, render the `CourseList` and verify that the `courses` list is displayed
- Dispatch the `logout` action, render the `CourseList` component and verify that the courses array is `reset`

`Notifications`:

- Mock the `fetchNotifications` API call, render the `Notifications` component and verify that the notification items are displayed
- Simulate `closing` the drawer and verify that the `displayDrawer` state is set to false
- Simulate `opening` the drawer and verify that the `displayDrawer` state is set to true
- Simulate `marking` a notification as read and verify that it is removed from the list

`CourseListRow`:

- Render the `CourseListRow` component as a `header` with one cell and verify that it spans two columns
- Render the `CourseListRow` component as a `header` with two cells and verify both are displayed
- Render the `CourseListRow` component as a `regular` row and verify both cells are displayed

`NotificationItem`:

- Render the `NotificationItem` component with `default` type and verify that it displays the notification text in `blue`
- Render the `NotificationItem` component with `urgent` type and verify that it displays the notification text in `red`

`BodySection`:

- Render the `BodySection` component with a title and children, and verify that both are displayed

`BodySectionWithMarginBottom`:

- Render the `BodySectionWithMarginBottom` component with a title and children, verify that both are displayed

**Requirement:**

No console warnings or errors

No lint errors in the code

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/1/fb21e0f72477ef3478c794da0a4e935c80005fbc.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260316%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260316T090940Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=0985aec5b84abfccce9533e761aa8d048cbd4abf5187c9eb405c21b6c4c9298f)

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_redux-part1`
- **File:** `task_8/dashboard/src/App.jsx, task_8/dashboard/src/tests/App.spec.js task_8/dashboard/src/main.jsx, task_8/src/pages/Login/login.spec.js, task_8/src/pages/CourseList/CourseList.spec.js, task_8/src/pages/CourseList/CourseListRow/CourseListRow.spec.js, task_8/src/components/Notifications.spec.js, task_8/src/components/NotificationItem.spec.js, task_8/src/components/Header.spec.js, task_8/src/components/Footer.spec.js, task_8/src/components/BodySection.spec.js, task_8/src/components/BodySectionWithMarginBottom.spec.js`
