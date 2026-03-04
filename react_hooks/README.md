## Resources:

**Read or watch**:

- [Import React Simplified](/rltoken/5HsdAgWd0t1toIf-rdK4Og)
- [React Hooks Docs](/rltoken/tr36sehQOre_J9nfIkh27g)
- [Why react doesn't update state immediately](/rltoken/KvLuXR5zREN05S4LgaNQOg)
- [State mutation](/rltoken/y8xx3AxMBW3lqVkuDdtG0g)
- [Rules of Hooks](/rltoken/u9OHnGhiLm_ypM0Nyc0JuA)
- [React memo](/rltoken/89DxdOtLcCHUwWmYePqN8g)
- [useCallback-use case](/rltoken/H-9RxrGUsJIZe-kL18Hl7A)
- [use-effect](/rltoken/M5AT3yCT2nDItWlKLuVdwQ)
- [useReducer](/rltoken/EoDh5RUwY3w4c4TD1x7Tbg)
- [Testing userEvent actions](/rltoken/hJ9GFegTHy2tpGz0jRhJvg)
- [Mocking Axios](/rltoken/ALqCe2a1sqQw7pU-8dZ81g)
- [Mocking Axios - another example](/rltoken/Vd2PpViceUacwWJGfCv46Q)

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/2UXoDbSMXVo-iZLOKYzWKQ), **without the help of Google**:

- Understanding the transition from class to functional components and maintain same functionality while modernizing code
- Learning different React hooks (useState, useContext, useEffect…)
- Understanding component optimization
- Understanding and build custom React hooks
- Developing testing strategies for hooks
- Understanding reducer pattern before Redux

## Requirements

- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 10.x.x`
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- Import React only in the main.jsx file, and avoid importing it in individual component files.
- All your files should end with a new line
- A `README.md` file, at the root of the project’s folder and each task’s folder, is mandatory
- Install Jest globally: `npm install -g jest` version `29.7.0`

## Tasks

### 1.

"From now on, you’ll be using modern React with functional components and hooks, instead of ES6 classes and React lifecycle methods.\\r\\n\\r\\nRe-use the codebase from the \`react_state\` project for the previous task and let's begin modernizing the React code.\\r\\n\\r\\n\*\*Instructions\*\*:\\r\\n\\r\\n\* Transform the Header.jsx class component into a functional component.\\r\\n\* Implement context consumption using the appropriate hook (useContext).\\r\\n\* Ensure all existing functionalities are preserved.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\n\* You must use the appropriate hook for context consumption\\r\\n\* The exact same JSX structure should be maintained.\\r\\n\* Handle the context values properly with no errors or warnings.\\r\\n\* Once the user is logged in, a welcome message and a logout link should be displayed.\\r\\n\* The logout link must works as expected\\r\\n\* Ensure that there are no console errors or warnings.\\r\\n\* The code should have no lint errors\\r\\n"

From now on, you’ll be using modern React with functional components and hooks, instead of ES6 classes and React lifecycle methods.

Re-use the codebase from the `react_state` project for the previous task and let's begin modernizing the React code.

**Instructions**:

- Transform the Header.jsx class component into a functional component.
- Implement context consumption using the appropriate hook (useContext).
- Ensure all existing functionalities are preserved.

**Requirements:**

- You must use the appropriate hook for context consumption
- The exact same JSX structure should be maintained.
- Handle the context values properly with no errors or warnings.
- Once the user is logged in, a welcome message and a logout link should be displayed.
- The logout link must works as expected
- Ensure that there are no console errors or warnings.
- The code should have no lint errors

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_hooks`
- **File:** `task_0/dashboard/src/Header/Header.jsx, task_0/dashboard/src/Header/Header.spec.js`

### 2.

"Update the \`Footer.jsx\` component to use the appropriate React hook to enable context consumption properly.\\r\\n\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\n\* You must use the appropriate hook for context consumption.\\r\\n\* The exact same JSX structure should be maintained.\\r\\n\* Handle the context values properly with no errors or warnings.\\r\\n\* Once the user is logged in, a welcome message and a logout link should be displayed.\\r\\n\* The logout link must function as expected (e.g., logging out the user).\\r\\n\* Ensure there are no console errors or warnings.\\r\\n\* The code should have no lint errors.\\r\\n"

Update the `Footer.jsx` component to use the appropriate React hook to enable context consumption properly.

**Requirements:**

- You must use the appropriate hook for context consumption.
- The exact same JSX structure should be maintained.
- Handle the context values properly with no errors or warnings.
- Once the user is logged in, a welcome message and a logout link should be displayed.
- The logout link must function as expected (e.g., logging out the user).
- Ensure there are no console errors or warnings.
- The code should have no lint errors.

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_hooks`
- **File:** `task_0/dashboard/src/Footer/Footer.jsx, task_0/dashboard/src/Footer/Footer.spec.js`

### 3.

"Copy the content of \`task_0\` into a new folder called\` task_1\`, and apply the following changes:\\r\\n\\r\\n\*\*Instructions\*\*:\\r\\n\\r\\n\* Convert the Login class component to a functional component.\\r\\n\\r\\nInitialize state using React hooks:\\r\\n\\r\\n\* Create a state variable \`enableSubmit\` and its setter function \`setEnableSubmit\` with an initial value of false.\\r\\n\* Create a state variable \`formData\` and its setter function\` setFormData\` with an initial value of\` { email: '', password: '' }\`.\\r\\n\\r\\nUpdate the class methods \`handleChangeEmail\` and \`handleChangePassword\` to functions:\\r\\n\\r\\n\* Extract the email and password from the event target.\\r\\n\* Use \`setFormData\` to update the\` formData\` state, keeping the existing email and password.\\r\\n\* Update the \`enableSubmit\` state based on email and password validation rules, and the password length.\\r\\n\\r\\nUpdate the class method\` handleLoginSubmit\` to a function:\\r\\n\\r\\n\* Always prevent the default behavior of the form submission.\\r\\n\* Call the login prop method with the current email and password.\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\n\* Keep the same structure of the component and update the state and methods.\\r\\n\* Preserve the existing validation logic for email, password, and the submit button enabling/disabling.\\r\\n\* Keep the \`WithLogging\` HOC wrapper class usage as it is.\\r\\n\* Ensure that there are no console errors or warnings.\\r\\n\* The code should have no lint errors."

Copy the content of `task_0` into a new folder called`task_1`, and apply the following changes:

**Instructions**:

- Convert the Login class component to a functional component.

Initialize state using React hooks:

- Create a state variable `enableSubmit` and its setter function `setEnableSubmit` with an initial value of false.
- Create a state variable `formData` and its setter function`setFormData` with an initial value of`{ email: '', password: '' }`.

Update the class methods `handleChangeEmail` and `handleChangePassword` to functions:

- Extract the email and password from the event target.
- Use `setFormData` to update the`formData` state, keeping the existing email and password.
- Update the `enableSubmit` state based on email and password validation rules, and the password length.

Update the class method`handleLoginSubmit` to a function:

- Always prevent the default behavior of the form submission.
- Call the login prop method with the current email and password.

**Requirements:**

- Keep the same structure of the component and update the state and methods.
- Preserve the existing validation logic for email, password, and the submit button enabling/disabling.
- Keep the `WithLogging` HOC wrapper class usage as it is.
- Ensure that there are no console errors or warnings.
- The code should have no lint errors.

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_hooks`
- **File:** `task_1/dashboard/src/Login/Login.jsx, task_1/dashboard/src/Login/Login.spec.js`

### 4.

"Memoization has been part of React’s optimization tools since the introduction of PureComponent in 2016 and has evolved to support functional components.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\nIn this task and the one that follows, you'll transform the notification system from a class-based implementation to modern functional components while maintaining performance optimizations.\\r\\n\\r\\n\*\*Instructions:\*\*\\r\\n\\r\\n\* Convert the \`NotificationItem\` component from class syntax to function syntax.\\r\\n\\t- Consider replacing the functionality of PureComponent with React's memo for memoization.\\r\\n\* Maintain existing prop structures as they are.\\r\\n\* Preserve current rendering behavior:\\r\\n\* Ensure the component only re-renders when notification items update.\\r\\n\* Maintain existing click handlers by keeping the notification \\"mark as read\\" functionality intact.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Hint:\*\*\\r\\nWhen converting class components to functional components, you'll need to update your tests accordingly\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\n\* Maintain performance characteristics of the original implementation.\\r\\n\* All existing tests should PASS.\\r\\n\* Ensure there are no console errors or warnings.\\r\\n\* The code should have no lint errors.\\r\\n"

Memoization has been part of React’s optimization tools since the introduction of PureComponent in 2016 and has evolved to support functional components.

In this task and the one that follows, you'll transform the notification system from a class-based implementation to modern functional components while maintaining performance optimizations.

**Instructions:**

- Convert the `NotificationItem` component from class syntax to function syntax.
  - Consider replacing the functionality of PureComponent with React's memo for memoization.
- Maintain existing prop structures as they are.
- Preserve current rendering behavior:
- Ensure the component only re-renders when notification items update.
- Maintain existing click handlers by keeping the notification "mark as read" functionality intact.

**Hint:** When converting class components to functional components, you'll need to update your tests accordingly

**Requirements:**

- Maintain performance characteristics of the original implementation.
- All existing tests should PASS.
- Ensure there are no console errors or warnings.
- The code should have no lint errors.

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_hooks`
- **File:** `task_2/dashboard/src/Notifications/NotificationItem.jsx, task_2/dashboard/src/Notifications/NotificationItem.spec.js`

### 5.

"In this task, you'll continue working on updating the notification system by modifying the \`Notifications.jsx\` file.\\r\\n\\r\\n\*\*Instructions:\*\*\\r\\n\\r\\n\* Apply the same steps from the previous task to update the \`Notifications.jsx\` component from a class-based to a functional component.\\r\\n\\t- Use React.memo for memoization to prevent unnecessary re-renders.\\r\\n\* Ensure that the component triggers a re-render only if the comparison inside memo returns false.\\r\\n\* All functionalities created previously within the \`Notifications\` and \`NotificationItem\` components should continue to work as expected.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Hint:\*\* When converting class components to functional components, you’ll need to update your tests accordingly\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\n\* Your Notifications system should trigger a re-render only if the comparison in memo returns false.\\r\\n\* Ensure all previously implemented functionalities within both the \`Notifications\` and \`NotificationItem\` components remain functional.\\r\\n\* All existing tests must pass.\\r\\n\* Ensure there are no console errors or warnings.\\r\\n\* The code should have no lint errors.\\r\\n\\r\\n"

In this task, you'll continue working on updating the notification system by modifying the `Notifications.jsx` file.

**Instructions:**

- Apply the same steps from the previous task to update the `Notifications.jsx` component from a class-based to a functional component.
  - Use React.memo for memoization to prevent unnecessary re-renders.
- Ensure that the component triggers a re-render only if the comparison inside memo returns false.
- All functionalities created previously within the `Notifications` and `NotificationItem` components should continue to work as expected.

**Hint:** When converting class components to functional components, you’ll need to update your tests accordingly

**Requirements:**

- Your Notifications system should trigger a re-render only if the comparison in memo returns false.
- Ensure all previously implemented functionalities within both the `Notifications` and `NotificationItem` components remain functional.
- All existing tests must pass.
- Ensure there are no console errors or warnings.
- The code should have no lint errors.

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_hooks`
- **File:** `task_3/dashboard/src/Notifications/Notifications.jsx, task_3/dashboard/src/Notifications/Notifications.spec.js`

### 6.

"In this task, you’ll continue modernizing the project components by updating the \`App.jsx\` file\\r\\n\\r\\n\*\*Instructions:\*\*\\r\\n\\r\\n\* Apply the same class-to-function component conversion pattern, focusing on state management in functional components.\\r\\n\\r\\nMigrate the state management from class-based to functional components by:\\r\\n\\r\\n - Converting the class state object into individual hooks using the appropriate React hooks:\\r\\n - Initialize a state variable \`displayDrawer\` and its setter function\` setDisplayDrawer\` with an initial value of \`true\`.\\r\\n - Initialize a state variable \`user\` and its setter function\` setUser\` with an initial value of the\` context user object\`.\\r\\n - Initialize a state variable \`notifications\` and its setter function \`setNotifications\` with an initial value of the\` notificationsList array\`.\\r\\n\\r\\n- Update the rest of the code to reflect the changes mentioned above.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\* Remove the \`handleKeydown\` function and its associated lifecycle methods.\\r\\n\* Update the handler functions (\`logIn\`,\` logOut\`, and \`markNotificationAsRead\`) to follow the functional component patterns:\\r\\n - Ensure all functionality remains identical to the previous implementation.\\r\\n - Follow React’s immutability principles for state updates.\\r\\n\\r\\n\*\*Tip:\*\*\\r\\n\\r\\n- Memoize callback functions to maintain reference stability and prevent unnecessary re-renders\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\*\*Tests:\*\*\\r\\n\\r\\n\* Test the functionality of \`handleDisplayDrawer\` and \`handleHideDrawer\`.\\r\\n\* Test user state mutations in logIn function (verify email, password, and isLoggedIn are updated).\\r\\n\* Test user state mutations in logOut function (verify isLoggedIn is set to false, email and password are cleared)\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\n\* Ensure all the application’s features work as expected and function correctly.\\r\\n\* All unit tests must be updated/refactored to reliably test the transition from class-based to functional components.\\r\\n\* Ensure there are no console errors or warnings.\\r\\n\* The code should have no lint errors.\\r\\n\\r\\n\\r\\n\\u003cbr\\u003e\\u003cbr\\u003e\\u003cbr\\u003e\\r\\n\\r\\n!\[new-video(1).gif\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/12/a4f2decb045fe60d285da0ef655d7accbf5fcd6d.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260304%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260304T090609Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=7ce91327a28c56109eb98a84a0251480a446abd1af86c4c2c32e9b094e1ff6dc)"

In this task, you’ll continue modernizing the project components by updating the `App.jsx` file

**Instructions:**

- Apply the same class-to-function component conversion pattern, focusing on state management in functional components.

Migrate the state management from class-based to functional components by:

- Converting the class state object into individual hooks using the appropriate React hooks:
  - Initialize a state variable `displayDrawer` and its setter function`setDisplayDrawer` with an initial value of `true`.
  - Initialize a state variable `user` and its setter function`setUser` with an initial value of the`context user object`.
  - Initialize a state variable `notifications` and its setter function `setNotifications` with an initial value of the`notificationsList array`.

- Update the rest of the code to reflect the changes mentioned above.

- Remove the `handleKeydown` function and its associated lifecycle methods.
- Update the handler functions (`logIn`,`logOut`, and `markNotificationAsRead`) to follow the functional component patterns:
- Ensure all functionality remains identical to the previous implementation.
- Follow React’s immutability principles for state updates.

**Tip:**

- Memoize callback functions to maintain reference stability and prevent unnecessary re-renders

**Tests:**

- Test the functionality of `handleDisplayDrawer` and `handleHideDrawer`.
- Test user state mutations in logIn function (verify email, password, and isLoggedIn are updated).
- Test user state mutations in logOut function (verify isLoggedIn is set to false, email and password are cleared)

**Requirements:**

- Ensure all the application’s features work as expected and function correctly.
- All unit tests must be updated/refactored to reliably test the transition from class-based to functional components.
- Ensure there are no console errors or warnings.
- The code should have no lint errors.

![new-video(1).gif](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/12/a4f2decb045fe60d285da0ef655d7accbf5fcd6d.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260304%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260304T090609Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=7ce91327a28c56109eb98a84a0251480a446abd1af86c4c2c32e9b094e1ff6dc)

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_hooks`
- **File:** `task_4/dashboard/src/App/App.jsx, task_4/dashboard/src/App/App.spec.js, task_4/dashboard/src/Header/Header.spec.js, task_4/dashboard/src/Login/Login.spec.js, task_4/dashboard/src/Footer/Footer.spec.js, task_4/dashboard/src/Notifications/Notifications.spec.js, task_4/dashboard/src/Notifications/NotificationItem.spec.js`

### 7.

"In this task, you’ll modify the App component to fetch data dynamically instead of relying on hardcoded data. You’ll learn how to implement data fetching as a side effect in React functional components while maintaining the existing component behavior.\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Required packages:\*\*\\r\\n\\r\\n\`\`\`\\r\\nnpm i axios\\r\\nnpm i jest-mock-axios\\r\\n\`\`\`\\r\\n\\r\\n\\u003c/br\\u003e\\r\\n\*\*Instructions:\*\*\\r\\n\\r\\n\* Create JSON Files:\\r\\n - Add two JSON files in your project’s \`public\` folder:\\r\\n - \`notifications.json\`: Contains the notifications array with the same structure as the current \`notificationsList\`.\\r\\n - \`courses.json\`: Contains the courses array with the same structure as the current\` coursesList\`.\\r\\n\\r\\n\\r\\n\* Remove Hardcoded Data:\\r\\n - Remove the hardcoded notificationsList and coursesList arrays from the component.\\r\\n\\r\\n\\r\\n\* State Management for Data:\\r\\n - Initialize a state variable courses and its setter function setCourses using the appropriate React hook with an initial value of an empty array.\\r\\n\\r\\n\\r\\n\* Implement Data Fetching: \\r\\n - Use the appropriate React hook to fetch data dynamically:\\r\\n - \`Notifications\`: Fetch notifications data when the component initially renders.\\r\\n - \`Courses\`: Fetch courses data whenever the user’s state changes (responding to authentication changes).\\r\\n - Ensure proper cleanup of any side effects (if applicable).\\r\\n\\r\\n\\r\\n\* Fetching Logic:\\r\\n - Use \`Axios \`to fetch data from the \`notifications.json\` and \`courses.json\` files.\\r\\n - Maintain the special handling of the latest notification using \`getLatestNotification()\`.\\r\\n\\r\\n\\r\\n\* Error Handling:\\r\\n - Use try/catch blocks to handle potential errors during data fetching.\\r\\n - Log errors to the console in development mode.\\r\\n\\r\\n\\r\\n\*\*Unit Tests:\*\*\\r\\n\\r\\n\* Verify Data Fetching Logic:\\r\\n - Use the \`jest-mock-axios\` package to simulate API responses for the HTTP requests\\r\\n\\t- Add axios to the \`moduleNameMapper\` to map it to jest-mock-axios:\\r\\n\\t\\u003cpre\\u003e\\u003ccode\\u003e\\r\\n\\t\\"jest\\": {\\r\\n\\t\\t\\"testEnvironment\\": \\"jsdom\\",\\r\\n\\t\\t\\"moduleNameMapper\\": {\\r\\n\\t\\t\\t\\"^axios$\\": \\"jest-mock-axios\\",\\r\\n\\t\\t\\t...\\r\\n\\t\\u003c/code\\u003e\\u003c/pre\\u003e\\r\\n\* Test Cases:\\r\\n - Verify that notifications data is successfully retrieved when the App component loads initially.\\r\\n - Verify that courses data is successfully retrieved whenever the user’s state changes.\\r\\n\* Ensure all current features of the component work properly after implementing dynamic data fetching.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Tips:\*\*\\r\\n\\r\\n\* Efficiency: API calls consume system resources and time. Implement them efficiently by tying them to appropriate state changes and avoiding unnecessary requests.\\r\\n\* Trigger-Driven Fetching: Think carefully about the relationship between when data needs to be fetched and what triggers that need:\\r\\n - Notifications are needed immediately when the app loads.\\r\\n - Courses data depends on user authentication changes.\\r\\n\* Consistency: Keep the data structure consistent with the original implementation to minimize changes to existing logic.\\r\\n\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\n\* Properly update or refactor failed unit tests related to notifications and courses data.\\r\\n\* Ensure no console errors or warnings.\\r\\n\* Ensure no lint errors.\\r\\n\* All application features must continue to work as expected.\\r\\n"

In this task, you’ll modify the App component to fetch data dynamically instead of relying on hardcoded data. You’ll learn how to implement data fetching as a side effect in React functional components while maintaining the existing component behavior.

**Required packages:**

npm i axios
npm i jest-mock-axios

**Instructions:**

- Create JSON Files:
- Add two JSON files in your project’s `public` folder:
  - `notifications.json`: Contains the notifications array with the same structure as the current `notificationsList`.
  - `courses.json`: Contains the courses array with the same structure as the current`coursesList`.

- Remove Hardcoded Data:
- Remove the hardcoded notificationsList and coursesList arrays from the component.
- State Management for Data:
- Initialize a state variable courses and its setter function setCourses using the appropriate React hook with an initial value of an empty array.
- Implement Data Fetching:
- Use the appropriate React hook to fetch data dynamically:
  - `Notifications`: Fetch notifications data when the component initially renders.
  - `Courses`: Fetch courses data whenever the user’s state changes (responding to authentication changes).

- Ensure proper cleanup of any side effects (if applicable).
- Fetching Logic:
- Use `Axios`to fetch data from the `notifications.json` and `courses.json` files.
- Maintain the special handling of the latest notification using `getLatestNotification()`.
- Error Handling:
- Use try/catch blocks to handle potential errors during data fetching.
- Log errors to the console in development mode.

**Unit Tests:**

- Verify Data Fetching Logic:
- Use the `jest-mock-axios` package to simulate API responses for the HTTP requests
  - Add axios to the `moduleNameMapper` to map it to jest-mock-axios:
    "jest": {
    "testEnvironment": "jsdom",
    "moduleNameMapper": {
    "^axios$": "jest-mock-axios",
    ...
- Test Cases:
- Verify that notifications data is successfully retrieved when the App component loads initially.
- Verify that courses data is successfully retrieved whenever the user’s state changes.
- Ensure all current features of the component work properly after implementing dynamic data fetching.

**Tips:**

- Efficiency: API calls consume system resources and time. Implement them efficiently by tying them to appropriate state changes and avoiding unnecessary requests.
- Trigger-Driven Fetching: Think carefully about the relationship between when data needs to be fetched and what triggers that need:
- Notifications are needed immediately when the app loads.
- Courses data depends on user authentication changes.
- Consistency: Keep the data structure consistent with the original implementation to minimize changes to existing logic.

**Requirements:**

- Properly update or refactor failed unit tests related to notifications and courses data.
- Ensure no console errors or warnings.
- Ensure no lint errors.
- All application features must continue to work as expected.

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_hooks`
- **File:** `task_4/dashboard/src/App/App.jsx, task_4/dashboard/src/App/App.spec.js`

### 8.

"In this task, you’ll refactor the existing Login component to improve code reusability and maintainability by leveraging a custom React hook for managing form state and submission logic.\\r\\n\\r\\n\* Craft the React custom hook:\\r\\n - Create a new file: \`src/hooks/useLogin.jsx\`.\\r\\n - The hook should accept a callback function \`onLogin\` as a parameter and use React hooks to manage the form state.\\r\\n - Move the current validation and submission logic from the\` Login\` component into the custom hook:\\r\\n - Validate the \`email\` input format.\\r\\n - Ensure the\` password\` has a minimum length of 8 characters.\\r\\n - Handle form submission logic.\\r\\n- Return an object from the hook that includes:\\r\\n - State values: \`email\`, \`password\`, and \`enableSubmit\` (boolean).\\r\\n - Handlers for managing input changes and form submission.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\* Refactor the Login Component:\\r\\n - Remove all state and handler logic from the Login component.\\r\\n - Use the useLogin hook to manage form inputs and submission.\\r\\n - Pass the login prop as the onLogin callback to the custom hook.\\r\\n - Replace the existing logic with the returned values and handlers from useLogin to:\\r\\n - Validate the inputs.\\r\\n - Enable or disable the submit button based on validation results.\\r\\n - Handle form submission.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirments:\*\*\\r\\n\\r\\n\* Users must only be able to log in when:\\r\\n - They provide a valid email address.\\r\\n - The password has a minimum length of 8 characters.\\r\\n\* The submit button (labeled “OK”) must:\\r\\n - Start in a disabled state.\\r\\n - Become enabled when the email and password pass validation.\\r\\n\* All existing tests must pass as the functionality remains unchanged.\\r\\n\* Ensure the refactored component has:\\r\\n - No console errors or warnings.\\r\\n - No lint errors.\\r\\n\\r\\n\\r\\n"

In this task, you’ll refactor the existing Login component to improve code reusability and maintainability by leveraging a custom React hook for managing form state and submission logic.

- Craft the React custom hook:
- Create a new file: `src/hooks/useLogin.jsx`.
- The hook should accept a callback function `onLogin` as a parameter and use React hooks to manage the form state.
- Move the current validation and submission logic from the`Login` component into the custom hook:
  - Validate the `email` input format.
  - Ensure the`password` has a minimum length of 8 characters.
  - Handle form submission logic.
- Return an object from the hook that includes:
  - State values: `email`, `password`, and `enableSubmit` (boolean).
  - Handlers for managing input changes and form submission.

- Refactor the Login Component:
- Remove all state and handler logic from the Login component.
- Use the useLogin hook to manage form inputs and submission.
- Pass the login prop as the onLogin callback to the custom hook.
- Replace the existing logic with the returned values and handlers from useLogin to:
  - Validate the inputs.
  - Enable or disable the submit button based on validation results.
  - Handle form submission.

**Requirments:**

- Users must only be able to log in when:
- They provide a valid email address.
- The password has a minimum length of 8 characters.
- The submit button (labeled “OK”) must:
- Start in a disabled state.
- Become enabled when the email and password pass validation.
- All existing tests must pass as the functionality remains unchanged.
- Ensure the refactored component has:
- No console errors or warnings.
- No lint errors.

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_hooks`
- **File:** `task_5/dashboard/src/Login/Login.jsx, task_5/dashboard/src/Login/Login.spec.js, task_5/dashboard/src/hooks/useLogin.jsx`

### 9.

"In this task, You will refactor your React School Dashboard application to replace the Context API with the \`useReducer\` hook for scalable and centralized state management.\\r\\n\\r\\n\\r\\n\* Create a new file \`App/appReducer.js\` :\\r\\n - Actions Object (\`APP_ACTIONS\`)\\r\\n \\u003c/br\\u003e\\r\\nDefine and export an object containing these action types: \\r\\n\\t - \`LOGIN\` : Handles user authentication.\\r\\n - \`LOGOUT\`: Manages user logout.\\r\\n - \`TOGGLE_DRAWER\`: Controls notification visibility.\\r\\n - \`MARK_NOTIFICATION_READ\`: Updates the notification status.\\r\\n - \`SET_NOTIFICATIONS\`: Updates the notifications list.\\r\\n - \`SET_COURSES\`: Updates the courses list.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n- Initial State (\`initialState\`)\\r\\n\\u003c/br\\u003e\\r\\nExport an object initialized as:\\r\\n\\t- \`displayDrawer\`: true\\r\\n - \`user\`: Object with \`email\`, \`password\`, and \`isLoggedIn\` properties (same structure as task 5)\\r\\n - \`notifications\`: An empty array.\\r\\n - \`courses\`: An empty array.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\* Reducer Function (\`appReducer\`)\\r\\n\\u003c/br\\u003e\\r\\nExport a function with two parameters:\` state\` (defaulting to \`initialState)\` and\` action\`.\\r\\n - Use a \`switch\` statement (or alternatives like \`Map\` or \`function chains\`) to handle the defined action types.\\r\\n - Ensure each case updates the state immutably.\\r\\n - Return the current state for unrecognized actions.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\nNow that you've created your appReducer, let's implement it in your components\\r\\n\\r\\n\* Update the \`App\` Component:\\r\\n\\r\\n - Replace \`useState\` calls with a single \`useReducer\` hook initialized with \`appReducer\` and\` initialState\`.\\r\\n - Dispatch actions for:\\r\\n - Toggling the notification drawer.\\r\\n - Logging in or out users.\\r\\n - Marking notifications as read.\\r\\n - Fetching and updating \`notifications\` and \`courses\` data.\\r\\n - Remove the Context Provider wrapping and imports.\\r\\n - Pass state and dispatch functions as props to child components.\\r\\n \\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\* Update the \`Header\` Component:\\r\\n - Replace Context-related logic with props.\\r\\n - Maintain all functionality, including displaying the welcome message and handling the logout feature.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\* Update the \`Footer\` Component:\\r\\n - Replace Context-related logic with props.\\r\\n - Preserve the conditional rendering behavior.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\* Adapt Data Fetching Logic:\\r\\n - Use \`dispatch\` to update state with fetched notifications and courses.\\r\\n - Refactor data fetching to maintain side-effect isolation and immutability.\\r\\n\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Tests:\*\*\\r\\n\\r\\n\* Refactor your existing test suite to validate the transition from Context API to useReducer.\\r\\n - \*\*Update component tests\*\* (Header.spec.js, Footer.spec.js) to pass props instead of using Context\\r\\n - \*\*Update App.spec.js\*\* to test reducer behavior through UI interactions (no separate reducer test file needed)\\r\\n - Check that state changes correctly when users interact with the \`UI\` (login \\u0026 logout, toggle drawer, mark notifications as read)\\r\\n - Verify that dispatched actions update the component state and \`UI\` correctly\\r\\n \\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\n - Ensure state updates are immutable.\\r\\n - All React Dashboard application features must function as expected.\\r\\n - State changes should align with UI interactions, as demonstrated in task 5’s GIF.\\r\\n - All unit tests must pass.\\r\\n - No console errors, warnings, or lint issues.\\r\\n"

In this task, You will refactor your React School Dashboard application to replace the Context API with the `useReducer` hook for scalable and centralized state management.

- Create a new file `App/appReducer.js` :
- Actions Object (`APP_ACTIONS`)  
  Define and export an object containing these action types: - `LOGIN` : Handles user authentication.
  - `LOGOUT`: Manages user logout.
  - `TOGGLE_DRAWER`: Controls notification visibility.
  - `MARK_NOTIFICATION_READ`: Updates the notification status.
  - `SET_NOTIFICATIONS`: Updates the notifications list.
  - `SET_COURSES`: Updates the courses list.

- Initial State (`initialState`)  
  Export an object initialized as:
  - `displayDrawer`: true
- `user`: Object with `email`, `password`, and `isLoggedIn` properties (same structure as task 5)
- `notifications`: An empty array.
- `courses`: An empty array.

- Reducer Function (`appReducer`)  
  Export a function with two parameters:`state` (defaulting to `initialState)` and`action`.
- Use a `switch` statement (or alternatives like `Map` or `function chains`) to handle the defined action types.
- Ensure each case updates the state immutably.
- Return the current state for unrecognized actions.

Now that you've created your appReducer, let's implement it in your components

- Update the `App` Component:
- Replace `useState` calls with a single `useReducer` hook initialized with `appReducer` and`initialState`.
- Dispatch actions for:
  - Toggling the notification drawer.
  - Logging in or out users.
  - Marking notifications as read.
  - Fetching and updating `notifications` and `courses` data.

- Remove the Context Provider wrapping and imports.
- Pass state and dispatch functions as props to child components.

- Update the `Header` Component:
- Replace Context-related logic with props.
- Maintain all functionality, including displaying the welcome message and handling the logout feature.

- Update the `Footer` Component:
- Replace Context-related logic with props.
- Preserve the conditional rendering behavior.

- Adapt Data Fetching Logic:
- Use `dispatch` to update state with fetched notifications and courses.
- Refactor data fetching to maintain side-effect isolation and immutability.

**Tests:**

- Refactor your existing test suite to validate the transition from Context API to useReducer.
- **Update component tests** (Header.spec.js, Footer.spec.js) to pass props instead of using Context
- **Update App.spec.js** to test reducer behavior through UI interactions (no separate reducer test file needed)
- Check that state changes correctly when users interact with the `UI` (login & logout, toggle drawer, mark notifications as read)
- Verify that dispatched actions update the component state and `UI` correctly

**Requirements:**

- Ensure state updates are immutable.
- All React Dashboard application features must function as expected.
- State changes should align with UI interactions, as demonstrated in task 5’s GIF.
- All unit tests must pass.
- No console errors, warnings, or lint issues.

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_hooks`
- **File:** `task_6/dashboard/src/App/App.js, task_6/dashboard/src/App/App.spec.js, task_6/dashboard/src/App/appReducer.js, task_6/dashboard/src/Header/Header.jsx, task_6/dashboard/src/Footer/Footer.jsx, task_6/dashboard/src/Header/Header.spec.js, task_6/dashboard/src/Footer/Footer.spec.js`
