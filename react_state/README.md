## Resources

**Read or watch**:

- [State and lifecycle](/rltoken/KjsyB0VDCdIjIcwfxlMjkA)
- [SetState and State callback](/rltoken/8hqADEwVqeScVFk2Feciig)
- [Passing Data Deeply with Context](/rltoken/HL2Gts_tzJ4g4GTfFJy4ZQ)
- [Context API on Class Component](/rltoken/R58KxO3kKbEodIl735TdAg)
- [Forms and Controlled components](/rltoken/Z73PFQzusWeMYw2ZuJQodA)
- [Lifting State Up](/rltoken/reT4FWME2sc9ZRcWTMqlBA)
- [React State hook](/rltoken/RXxk73_klwzRXclV8PbxzQ)

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/V1sVDcERW8UpFTe-M3ZEQg), **without the help of Google**:

- What the state of a component or a container is
- The lifecycle of a component
- How to modify a state and execute code in the right order
- What a controlled component is
- How to use Forms in React
- How to reuse smaller components, keep them pure, and lift its state to principal containers
- The use of a React Hook and how to create one
- How to pass data deeply using context

## Requirements

- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 10.x.x`
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the project’s folder and each task’s folder, is mandatory
- Install Jest globally: `npm install -g jest` version `29.7.0`

## Tasks

### 1.

"Using the previous project (\`React inline styling\`), we have modularized our React application without worrying about interactions and state, which is usually a recommended approach to development. Now, our application is in a good position to start adding logic and state.\\r\\n\\r\\n\*\*Modify the App component in \`task_0/dashboard/src/App/App.jsx\`:\*\*\\r\\n\\r\\nCreate a local state to store a \`displayDrawer\` element:\\r\\n\\r\\n- Define the default value for the state in the \`constructor\` of the Class\\r\\n- Create a function named \`handleDisplayDrawer\` that will set the value of \`displayDrawer\` to \`true\`\\r\\n- Create a function named \`handleHideDrawer\` that will set the value of \`displayDrawer\` to \`false\`\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Modify the \`Notifications\` import in \`App.jsx\`:\*\*\\r\\n\\r\\n- Pass the \`displayDrawer\` prop to the component using the local state\\r\\n- Pass the new functions \`handleDisplayDrawer\` and \`handleHideDrawer\` as props.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Modify the Notifications component in \`Notifications.jsx\`:\*\*\\r\\n\\r\\n- When clicking on \`Your notifications\`, call \`handleDisplayDrawer\`\\r\\n- When clicking on the close button, call \`handleHideDrawer\`\\r\\n\\r\\nAt this point, after reloading the React application you should be able to show or hide the notifications panel\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Modify the Notifications test suite in \`Notifications.spec.js\`:\*\*\\r\\n\\r\\n- Add a test to verify that clicking on the menu item calls \`handleDisplayDrawer\`\\r\\n- Add a test to verify that clicking on the close button calls \`handleHideDrawer\`\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Tips:\*\*\\r\\n\\r\\n- Remember that you implemented \`shouldComponentUpdate\`. You will need to modify its logic to allow the component to re-render when the \`displayDrawer\` prop changes\\r\\n- Remember to use spies to verify whether a function is being called. You can pass a spy as a property\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\n- When running the application, there should not be any errors in the console\\r\\n"

Using the previous project (`React inline styling`), we have modularized our React application without worrying about interactions and state, which is usually a recommended approach to development. Now, our application is in a good position to start adding logic and state.

**Modify the App component in `task_0/dashboard/src/App/App.jsx`:**

Create a local state to store a `displayDrawer` element:

- Define the default value for the state in the `constructor` of the Class
- Create a function named `handleDisplayDrawer` that will set the value of `displayDrawer` to `true`
- Create a function named `handleHideDrawer` that will set the value of `displayDrawer` to `false`

**Modify the `Notifications` import in `App.jsx`:**

- Pass the `displayDrawer` prop to the component using the local state
- Pass the new functions `handleDisplayDrawer` and `handleHideDrawer` as props.

**Modify the Notifications component in `Notifications.jsx`:**

- When clicking on `Your notifications`, call `handleDisplayDrawer`
- When clicking on the close button, call `handleHideDrawer`

At this point, after reloading the React application you should be able to show or hide the notifications panel

**Modify the Notifications test suite in `Notifications.spec.js`:**

- Add a test to verify that clicking on the menu item calls `handleDisplayDrawer`
- Add a test to verify that clicking on the close button calls `handleHideDrawer`

**Tips:**

- Remember that you implemented `shouldComponentUpdate`. You will need to modify its logic to allow the component to re-render when the `displayDrawer` prop changes
- Remember to use spies to verify whether a function is being called. You can pass a spy as a property

**Requirements:**

- When running the application, there should not be any errors in the console

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_state`
- **File:** `task_0/dashboard/src/App/App.jsx, task_0/dashboard/src/App/App.spec.js, task_0/dashboard/src/Notifications/Notifications.jsx, task_0/dashboard/src/Notifications/Notifications.spec.js`

### 2.

"\*\*Create a form within the Login component \\u0026 handle login submission in \`task_1/dashboard/src/Login/Login.jsx\`:\*\*\\r\\n\\r\\nTo solve this task, convert you should the functional \`Login\` component to a \`class\` component:\\r\\n\\r\\n- Create a local state with the value \`isLoggedIn\` set to \`false\`\\r\\n- Create a function named \`handleLoginSubmit\` that updates the local state by setting \`isLoggedIn\` to \`true\`\\r\\n- Wrap the input fields within a \`form\` element\\r\\n- Replace the button with an \`input\` element of type \`submit\`\\r\\n- When the form is submitted, call the newly created login submission handling function\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Create controlled component:\*\*\\r\\n\\r\\n- Modify the local state to add two new values: \`email\` and \`password\`. By default, both should be empty strings.\\r\\n- Set the email and the password input values to the local state\\r\\n- Create two methods, \`handleChangeEmail\` and \`handleChangePassword\`:\\r\\n\\t- Each method should handle changes to its respective input field (Email or Password):\\r\\n\\t\\t- When the user types into the email input, \`handleChangeEmail\` should be called\\r\\n\\t\\t- When the user types into the password input, \`handleChangePassword\` should be called\\r\\n- Ensure the local component state updates in real time as the user types:\\r\\n\\t- The email input field should update the email state\\r\\n\\t- The password input field should update the password state accordingly.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Modify state callback:\*\*\\r\\n\\r\\n- Modify the local state to add a new value \`enableSubmit\`, set to \`false\` by default.\\r\\n- Modify the Submit button so that it is only enabled when the \`enableSubmit\` value is \`true\`\\r\\n- Enable the Submit button whenever:\\r\\n\\t- Both fields are not empty.\\r\\n\\t- The email input contains a valid email address.\\r\\n - The password input contains at least 8 characters.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Add tests:\*\*\\r\\n\\r\\n- Add a test to verify that the submit button is disabled by default.\\r\\n- Add a test to verify that the button becomes enabled only after both the Email and Password inputs meet the required criteria.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\n- The state should have all the default values set in the \`constructor\`\\r\\n- Submitting the form should not reload the page.\\r\\n- The \`email\` input must be valid email address, and the \`password\` must have at least 8 characters.\\r\\n- The submit input should be enabled when the above conditions are met\\r\\n- There should not be any linting errors in the console when running the application.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Tips:\*\*\\r\\n\\r\\n- Use a regular expression (Regex) to validate the email input.\\r\\n- At this stage, clicking the enabled Submit input does not render the CourseList component. This functionality will be addressed in the next task."

**Create a form within the Login component & handle login submission in `task_1/dashboard/src/Login/Login.jsx`:**

To solve this task, convert you should the functional `Login` component to a `class` component:

- Create a local state with the value `isLoggedIn` set to `false`
- Create a function named `handleLoginSubmit` that updates the local state by setting `isLoggedIn` to `true`
- Wrap the input fields within a `form` element
- Replace the button with an `input` element of type `submit`
- When the form is submitted, call the newly created login submission handling function

**Create controlled component:**

- Modify the local state to add two new values: `email` and `password`. By default, both should be empty strings.
- Set the email and the password input values to the local state
- Create two methods, `handleChangeEmail` and `handleChangePassword`:
  - Each method should handle changes to its respective input field (Email or Password):
    - When the user types into the email input, `handleChangeEmail` should be called
    - When the user types into the password input, `handleChangePassword` should be called
- Ensure the local component state updates in real time as the user types:
  - The email input field should update the email state
  - The password input field should update the password state accordingly.

**Modify state callback:**

- Modify the local state to add a new value `enableSubmit`, set to `false` by default.
- Modify the Submit button so that it is only enabled when the `enableSubmit` value is `true`
- Enable the Submit button whenever:
  - Both fields are not empty.
  - The email input contains a valid email address.
- The password input contains at least 8 characters.

**Add tests:**

- Add a test to verify that the submit button is disabled by default.
- Add a test to verify that the button becomes enabled only after both the Email and Password inputs meet the required criteria.

**Requirements:**

- The state should have all the default values set in the `constructor`
- Submitting the form should not reload the page.
- The `email` input must be valid email address, and the `password` must have at least 8 characters.
- The submit input should be enabled when the above conditions are met
- There should not be any linting errors in the console when running the application.

**Tips:**

- Use a regular expression (Regex) to validate the email input.
- At this stage, clicking the enabled Submit input does not render the CourseList component. This functionality will be addressed in the next task.

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_state`
- **File:** `task_1/dashboard/src/Login/Login.jsx, task_1/dashboard/src/Login/Login.spec.js`

### 3.

"\*\*Create a simple React Context in \`task_2/dashboard/src/Context/context.js\`:\*\*\\r\\n\\r\\n\\r\\n- Define a default user object with the following properties:\\r\\n\\t- \`email\`: set to an empty string\\r\\n\\t- \`password\`: set to an empty string\\r\\n\\t- \`isLoggedIn\`: set to false\\r\\n\\r\\n\\r\\n- Define a default \`logOut\` function as an empty function\\r\\n\\r\\n\\r\\nCreate and export (\*\*with export default only\*\*) a \`newContext\` variable that initializes a new React context. This context should include the user object and the logOut function as its default values.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Create the local state for the App in \`App.jsx\`:\*\*\\r\\n\\r\\n- Update the local state of the \`App\` component by:\\r\\n\\t- Adding a user object that mirrors the context's user object\\r\\n\\t- Adding a logout property that references the logOut function from the context\\r\\n\\r\\n- Create a \`logIn\` method that takes \`email\` and \`password\` as parameters. When the method is called:\\r\\n\\t- Update the user object in the local state\\r\\n\\t- Set the \`email\` and \`password\` to the values entered.\\r\\n\\t- Set the \`isLoggedIn\` value to \`true\`\\r\\n\\r\\n- Create a \`logOut\` method that resets the value of the \`user\` object in the local state\\r\\n\\r\\n- Remove the \`isLoggedIn\` and \`logOut\` props from the \`App\`. These will now be accessed through the state.\\r\\n- In the \`render()\` method, refactor the code to use the state to display either the \`CourseList\` or the \`Login\` components.\\r\\n- Pass the new \`logIn\` method,along with the user’s email and password, to the \`Login\` component as props.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*in \`Login.jsx\`:\*\*\\r\\n\\r\\n- Update the local state:\\r\\n\\t- Remove the \`isLoggedIn\` property, as it is no longer used.\\r\\n\\t- Retrieve email and password from the props object (ensure they have default values).\\r\\n- Modify the \`handleLoginSubmit\` to call the newly created \`logIn\` method from the props.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Checkpoint\*\*\\r\\n\\r\\nTest your application. At this point, you should be able to log in to your React app:\\r\\n\\r\\n- By entering a valid email and a password with 8 or more characters:\\r\\n\\r\\n\\t- The submit button should become clickable.\\r\\n\\t-The \`CourseList\` component should render.\\r\\n\\t- The \`Login\` component should unmount.\\r\\n\\t\\r\\n- Verify that the Notifications panel continues to work correctly. You should be able to show/hide the panel by clicking the top-right text and the close button.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Setting the context in \`App.jsx\`:\*\*\\r\\n\\r\\n- In the App component, wrap the entire app with the context provider element created earlier.\\r\\n- Set the value of the provider to the context’s user object and logOut function using the local state.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Add tests on the \`Login.spec.js\`:\*\*\\r\\n\\r\\n- Verify that the logIn method prop is correctly called with the user's email and password when the login form is submitted\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Tip:\*\*\\r\\n\\r\\n- As we're carrying forward tests from task_1, note that the App component's architecture changed in task_2. It no longer accepts \`isLoggedIn\` as a prop - it uses Context-based state instead. You may need to adjust related tests accordingly\\r\\n\\r\\n\\u003cbr\\u003e \\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\n- Be aware that React Context uses reference identity to determine when to re-render. Avoid directly creating objects within the provider’s value prop.\\r\\n- The submit button should only be enabled if the email is valid and the password is at least 8 characters long."

**Create a simple React Context in `task_2/dashboard/src/Context/context.js`:**

- Define a default user object with the following properties:
  - `email`: set to an empty string
  - `password`: set to an empty string
  - `isLoggedIn`: set to false

- Define a default `logOut` function as an empty function

Create and export (**with export default only**) a `newContext` variable that initializes a new React context. This context should include the user object and the logOut function as its default values.

**Create the local state for the App in `App.jsx`:**

- Update the local state of the `App` component by:
  - Adding a user object that mirrors the context's user object
  - Adding a logout property that references the logOut function from the context

- Create a `logIn` method that takes `email` and `password` as parameters. When the method is called:
  - Update the user object in the local state
  - Set the `email` and `password` to the values entered.
  - Set the `isLoggedIn` value to `true`

- Create a `logOut` method that resets the value of the `user` object in the local state
- Remove the `isLoggedIn` and `logOut` props from the `App`. These will now be accessed through the state.
- In the `render()` method, refactor the code to use the state to display either the `CourseList` or the `Login` components.
- Pass the new `logIn` method,along with the user’s email and password, to the `Login` component as props.

**in `Login.jsx`:**

- Update the local state:
  - Remove the `isLoggedIn` property, as it is no longer used.
  - Retrieve email and password from the props object (ensure they have default values).
- Modify the `handleLoginSubmit` to call the newly created `logIn` method from the props.

**Checkpoint**

Test your application. At this point, you should be able to log in to your React app:

- By entering a valid email and a password with 8 or more characters:
  - The submit button should become clickable. -The `CourseList` component should render.
  - The `Login` component should unmount.

- Verify that the Notifications panel continues to work correctly. You should be able to show/hide the panel by clicking the top-right text and the close button.

**Setting the context in `App.jsx`:**

- In the App component, wrap the entire app with the context provider element created earlier.
- Set the value of the provider to the context’s user object and logOut function using the local state.

**Add tests on the `Login.spec.js`:**

- Verify that the logIn method prop is correctly called with the user's email and password when the login form is submitted

**Tip:**

- As we're carrying forward tests from task_1, note that the App component's architecture changed in task_2\. It no longer accepts `isLoggedIn` as a prop - it uses Context-based state instead. You may need to adjust related tests accordingly

**Requirements:**

- Be aware that React Context uses reference identity to determine when to re-render. Avoid directly creating objects within the provider’s value prop.
- The submit button should only be enabled if the email is valid and the password is at least 8 characters long.

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_state`
- **File:** `task_2/dashboard/src/Context/context.js, task_2/dashboard/src/App/App.jsx, task_2/dashboard/src/App/App.spec.js, task_2/dashboard/src/Login/Login.jsx, task_2/dashboard/src/Login/Login.spec.js`

### 4.

"\*\*Modify the \`Header\` component in \`task_3/dashboard/src/Header/Header.jsx\`:\*\*\\r\\n\\r\\n- Use the \`ContextType\` API to allow the \`Header\` component to inherit the context.\\r\\n- Add a new section under the header that is only displayed when the \`isLoggedIn\` property in the \`user\` object within the context is \`true\`:\\r\\n\\t- This section should display \\"Welcome \*\*email\*\* (\_logout\_)\\"\\r\\n\\t- Add the id attribute \`logoutSection\` to this section.\\r\\n\\t- When clicking on the \`logout\` link, should call the \`logOut\` function from the context.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\nAt this point, your Holberton Dashboard React application should allow users to log in and log out successfully.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Create the tests!\*\*\\r\\n\\r\\n\*\*In \`Header.spec.js\`\*\*\\r\\n\\r\\n- Ensure all current tests pass without errors.\\r\\n- When the \`Header\` component uses a default context value, verify that the \`logoutSection\` is not rendered.\\r\\n- When the \`Header\` component is provided with a user context where \`isLoggedIn\` is \`true\`, and email and password are set, verify that the\`logoutSection\` is rendered.\\r\\n- When the \`Header\` component is provided with a user context where \`isLoggedIn\` is \`true\`, and email and password are set, link the \`logOut\` function to a spy. Verify that clicking on the \\"logout\\" link calls the spy.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*In \`App.spec.js\`\*\*\\r\\n\\r\\n- Refactor the previous tests to rely on the application’s state instead of props.\\r\\n- Refactor the tests to verify that the user interface updates correctly whenever the state changes.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\n- Your React application should fully support both login and logout functionality.\\r\\n- The logout functionality must be triggered from the Header component.\\r\\n- After refactoring, ensure that any unused state and props are cleaned up."

**Modify the `Header` component in `task_3/dashboard/src/Header/Header.jsx`:**

- Use the `ContextType` API to allow the `Header` component to inherit the context.
- Add a new section under the header that is only displayed when the `isLoggedIn` property in the `user` object within the context is `true`:
  - This section should display "Welcome **email** (_logout_)"
  - Add the id attribute `logoutSection` to this section.
  - When clicking on the `logout` link, should call the `logOut` function from the context.

At this point, your Holberton Dashboard React application should allow users to log in and log out successfully.

**Create the tests!In `Header.spec.js`**

- Ensure all current tests pass without errors.
- When the `Header` component uses a default context value, verify that the `logoutSection` is not rendered.
- When the `Header` component is provided with a user context where `isLoggedIn` is `true`, and email and password are set, verify that the`logoutSection` is rendered.
- When the `Header` component is provided with a user context where `isLoggedIn` is `true`, and email and password are set, link the `logOut` function to a spy. Verify that clicking on the "logout" link calls the spy.

**In `App.spec.js`**

- Refactor the previous tests to rely on the application’s state instead of props.
- Refactor the tests to verify that the user interface updates correctly whenever the state changes.

**Requirements:**

- Your React application should fully support both login and logout functionality.
- The logout functionality must be triggered from the Header component.
- After refactoring, ensure that any unused state and props are cleaned up.

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_state`
- **File:** `task_3/dashboard/src/App/App.jsx, task_3/dashboard/src/App/App.spec.js, task_3/dashboard/src/Header/Header.jsx, task_3/dashboard/src/Header/Header.spec.js`

### 5.

"\*\*Context consumer: modify the Footer component in \`task_4/dashboard/src/Footer/Footer.jsx\`\*\*\\r\\n\\r\\n- Without converting the component into a class, subscribe the Footer component to context changes.\\r\\n- When a user exists and is logged in, display a new paragraph containing a link with the text: \`Contact us\`.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Modify the test suite in \`Footer.spec.js\`:\*\*\\r\\n\\r\\n- Refactor the tests to work correctly with the updated \`Footer\` component.\\r\\n- Add a test to verify that the \\"Contact us\\" link is not displayed when the user is logged out in the context.\\r\\n- Add a test to verify that the \\"Contact us\\" link is displayed when the user is logged in within the context.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Advanced state: Modify the \`App\` container in \`App.jsx\`:\*\*\\r\\n\\r\\nUpdate the state of the \`App\` component to include two properties:\\r\\n\\r\\n- notifications: Holds the values from \`notificationsList\`.\\r\\n- courses: Holds the values from \`coursesList\`.\\r\\n- Create a method \`markNotificationAsRead\`:\\r\\n\\r\\n\\t- It accepts an \`id\` (number) as a parameter\\r\\n\\t- Logs the string: \`Notification {id} has been marked as read\` to the console.\\r\\n\\t- Removes the notification with the given id from the notifications list within the state.\\r\\n\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\nPass the new method as a prop to the \`Notifications\` component.\\r\\n\\r\\nPass the list of notifications to the \`Notifications\` component using the state.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Modify the \`Notifications\` container in \`Notifications.jsx\`:\*\*\\r\\n\\r\\n- Replace the \`shouldComponentUpdate\` method by converting the component to a \`PureComponent\`. This will enable automatic comparison of props and state.\\r\\n- Replace the existing \`markAsRead\` method with the new \`markNotificationAsRead\` method received as a prop.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\\r\\n\*\*Modify the test suite in \`App.spec.js\`:\*\*\\r\\n\\r\\n- Add a test to verify that:\\r\\n\\r\\n - Clicking on a notification item removes it from the notification list.\\r\\n - Logs the expected string with the corresponding notification ID to the console.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\\r\\n\*\*Modify the test suite in \`Notifications.spec.js\`:\*\*\\r\\n\\r\\n- Refactor the tests to match the updated structure of the \`Notifications\` component.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Checkpoint\*\*\\r\\n\\r\\nTest your application to ensure the following functionality:\\r\\n\\r\\n- When logged in:\\r\\n\\r\\n - A new paragraph with a \\"Contact us\\" link should appear in the \`Footer\`.\\r\\n \\r\\n- When viewing the notification panel:\\r\\n\\r\\n - Clicking on any notification item should remove it and log the corresponding string to the console.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\n- By clicking on any notification item, you should be able to remove it from the notification list and log the appropriate string with the corresponding notification ID to the console.\\r\\n- The\` markNotificationAsRead\` method should handle both the removal and the logging.\\r\\n- A valid email address and 8+ character password are required to activate the submit button.\\r\\n- A logged in user should see a \`logout\` link in the \`Header\` component and a \`Contact us\` link in the \`Footer\` component\\r\\n- No console errors should be raised\\r\\n- No linting errors\\r\\n\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n!\[markNotificationAsRead.gif\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/10/ba57fd6b23228eba70ceed550633523485d54d1e.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260302%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260302T084019Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=6e09b744b40f11a61dac6f363cfbeb180eabd039a33ba8d3ee74e84750ccf5a3)"

**Context consumer: modify the Footer component in `task_4/dashboard/src/Footer/Footer.jsx`**

- Without converting the component into a class, subscribe the Footer component to context changes.
- When a user exists and is logged in, display a new paragraph containing a link with the text: `Contact us`.

**Modify the test suite in `Footer.spec.js`:**

- Refactor the tests to work correctly with the updated `Footer` component.
- Add a test to verify that the "Contact us" link is not displayed when the user is logged out in the context.
- Add a test to verify that the "Contact us" link is displayed when the user is logged in within the context.

**Advanced state: Modify the `App` container in `App.jsx`:**

Update the state of the `App` component to include two properties:

- notifications: Holds the values from `notificationsList`.
- courses: Holds the values from `coursesList`.
- Create a method `markNotificationAsRead`:
  - It accepts an `id` (number) as a parameter
  - Logs the string: `Notification {id} has been marked as read` to the console.
  - Removes the notification with the given id from the notifications list within the state.

Pass the new method as a prop to the `Notifications` component.

Pass the list of notifications to the `Notifications` component using the state.

**Modify the `Notifications` container in `Notifications.jsx`:**

- Replace the `shouldComponentUpdate` method by converting the component to a `PureComponent`. This will enable automatic comparison of props and state.
- Replace the existing `markAsRead` method with the new `markNotificationAsRead` method received as a prop.

**Modify the test suite in `App.spec.js`:**

- Add a test to verify that:
- Clicking on a notification item removes it from the notification list.
- Logs the expected string with the corresponding notification ID to the console.

**Modify the test suite in `Notifications.spec.js`:**

- Refactor the tests to match the updated structure of the `Notifications` component.

**Checkpoint**

Test your application to ensure the following functionality:

- When logged in:
- A new paragraph with a "Contact us" link should appear in the `Footer`.
- When viewing the notification panel:
- Clicking on any notification item should remove it and log the corresponding string to the console.

**Requirements:**

- By clicking on any notification item, you should be able to remove it from the notification list and log the appropriate string with the corresponding notification ID to the console.
- The`markNotificationAsRead` method should handle both the removal and the logging.
- A valid email address and 8+ character password are required to activate the submit button.
- A logged in user should see a `logout` link in the `Header` component and a `Contact us` link in the `Footer` component
- No console errors should be raised
- No linting errors

![markNotificationAsRead.gif](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/10/ba57fd6b23228eba70ceed550633523485d54d1e.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260302%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260302T084019Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=6e09b744b40f11a61dac6f363cfbeb180eabd039a33ba8d3ee74e84750ccf5a3)

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_state`
- **File:** `task_4/dashboard/src/Footer/Footer.jsx, task_4/dashboard/src/Footer/Footer.spec.js, task_4/dashboard/src/App/App.jsx, task_4/dashboard/src/App/App.spec.js, task_4/dashboard/src/Notifications/Notifications.jsx, task_4/dashboard/src/Notifications/Notifications.spec.js`
