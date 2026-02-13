## Resources

**Read or watch**:

- [React Official Website](/rltoken/NnEOzFmxs6rCi8TP85Alzw)
- [Getting started with React](/rltoken/3G7LSXOhmUgUvjVzoYUYWg)
- [React overview](/rltoken/vlAy2fYJgLfsZ41tU8jf6A)
- [React Developer Tools](/rltoken/bvm7dcsO_-_w2eIWLtEdVA)
- [React Fragments](/rltoken/vGG_vxEqApdVkXttehS9lQ)
- [Conditional Rendering](/rltoken/pE3YTGLczGcnd_jWmgJ3ew)
- [Typechecking with PropTypes](/rltoken/1kuKKtKw765oq48N1dtgqw)
- [React Testing Library](/rltoken/wpIWXCBQUaLexk1L-fUSnQ)
- [Query within an element](/rltoken/g7Pqn6Hw28ZMj69cbybZIg)
- [Jest Matchers](/rltoken/ckFroRGNsZD0nMYfKmdLLQ)

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/9a804vuJud9hGYpq9ujIQg), **without the help of Google**:

- How to create basic React components using functions
- How to reuse components
- How to pass properties to components
- How to use Fragments
- When to use a key to improve a loop's performance

## Requirements

- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 10.x.x`
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the project’s folder and each task’s folder, is mandatory
- Install Jest globally: `npm install -g jest` version `29.7.0`

## Tasks

### 1.

"Start with your files from the last task of the \`React intro\` project\\r\\n\\r\\nInstead of creating new elements, we're going to create components to split the project. The \`App.jsx\` is going to become the main entry point, the shell, for every component in the app.\\r\\n\\r\\n#### Create a Header component\\r\\nCreate a new folder \`Header\`:\\r\\n\\r\\n- Create a functional component \`Header\` inside the \`Header.jsx\` where you move the code of the header from the \`App.jsx\`.\\r\\n- Move the CSS code, related to the header, from the \`App.css\` to a new file named \`Header.css\`.\\r\\n- Create an empty test file \`Header.spec.js\`.\\r\\n\\r\\n#### Create a Footer component\\r\\nCreate a new folder \`Footer\`:\\r\\n\\r\\n- Create a functional component \`Footer\` inside the \`Footer.jsx\` where you move the code of the footer from the \`App.jsx\`.\\r\\n- Move the CSS code, related to the footer, from the \`App.css\` to a new file named \`Footer.css\`\\r\\n- Create an empty test file \`Footer.spec.js\`.\\r\\n\\r\\n#### Create a Login component\\r\\nCreate a new folder \`Login\`:\\r\\n\\r\\n- Create a functional component \`Login\` inside the \`Login.jsx\` where you move the code of the login form from the \`App.jsx\`.\\r\\n- Move the CSS code, related to the login, from the \`App.css\` to a new file named \`Login.css\`\\r\\n- Create an empty test file \`Login.spec.js\`.\\r\\n\\r\\n#### Modify the shell\\r\\n\\r\\nIn the \`App.jsx\`:\\r\\n\\r\\n- Along with the Notifications component, import the Header, the Login, and the Footer components\\r\\n- Pass the components in the above order respectively\\r\\n- Wrap the above elements inside a react \`\\u003cFragment\\u003e\`\\r\\n\\r\\n\*\*Tests:\*\*\\r\\n\\r\\n\\r\\nIn the \`Header.spec.js\`, \`Login.spec.js\`, and \`Footer.spec.js\`:\\r\\n\\r\\n- Ensure that these components are rendered without crashing\\r\\n\\r\\n\\r\\nRequirements:\\r\\n\\r\\n- At this point, reloading the react app should display the exact same page layout\\r\\n- The console tab from your browser shouldn't show any errors or warnings\\r\\n"

Start with your files from the last task of the `React intro` project

Instead of creating new elements, we're going to create components to split the project. The `App.jsx` is going to become the main entry point, the shell, for every component in the app.

#### Create a Header component

Create a new folder `Header`:

- Create a functional component `Header` inside the `Header.jsx` where you move the code of the header from the `App.jsx`.
- Move the CSS code, related to the header, from the `App.css` to a new file named `Header.css`.
- Create an empty test file `Header.spec.js`.

#### Create a Footer component

Create a new folder `Footer`:

- Create a functional component `Footer` inside the `Footer.jsx` where you move the code of the footer from the `App.jsx`.
- Move the CSS code, related to the footer, from the `App.css` to a new file named `Footer.css`
- Create an empty test file `Footer.spec.js`.

#### Create a Login component

Create a new folder `Login`:

- Create a functional component `Login` inside the `Login.jsx` where you move the code of the login form from the `App.jsx`.
- Move the CSS code, related to the login, from the `App.css` to a new file named `Login.css`
- Create an empty test file `Login.spec.js`.

#### Modify the shell

In the `App.jsx`:

- Along with the Notifications component, import the Header, the Login, and the Footer components
- Pass the components in the above order respectively
- Wrap the above elements inside a react `<Fragment>`

**Tests:**

In the `Header.spec.js`, `Login.spec.js`, and `Footer.spec.js`:

- Ensure that these components are rendered without crashing

Requirements:

- At this point, reloading the react app should display the exact same page layout
- The console tab from your browser shouldn't show any errors or warnings

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_props`
- **File:** `task_0/dashboard/src/App/App.jsx, task_0/dashboard/src/Footer/Footer.css, task_0/dashboard/src/Footer/Footer.jsx, task_0/dashboard/src/Footer/Footer.spec.js, task_0/dashboard/src/Header/Header.css, task_0/dashboard/src/Header/Header.jsx, task_0/dashboard/src/Header/Header.spec.js, task_0/dashboard/src/Login/Login.css, task_0/dashboard/src/Login/Login.jsx, task_0/dashboard/src/Login/Login.spec.js`

### 2.

"Let's start improving the tests: \\r\\n\\r\\n\\r\\n\\r\\n#### Header.spec.js\\r\\n\\r\\nImport your new Header component within the test, and write two checks:\\r\\n\\r\\n- Check whether the \`Header\` component contains the Holberton logo.\\r\\n- Check whether the \`Header\` component contains the heading \`h1\` element with the correct text\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n#### Login.spec.js\\r\\n\\r\\nImport your new \`Login\` component within the test, and check:\\r\\n\\r\\n- Add a test to verify whether the \`Login\` includes 2 \`label\`, 2 \`inputs\`, and 1 \`button\` elements\\r\\n- Add a test to verify whether the \`inputs\` elements get focused whenever the related \`label\` is clicked\\r\\n\\r\\n\\u003cbr /\\u003e\\r\\n\\r\\n#### Footer.spec.js\\r\\n\\r\\nImport your new \`Footer\` component within the test, and check:\\r\\n\\r\\n- Check whether the \`p\` element renders the string \`Copyright {the current year} - Holberton School\`, whenever the \`getFooterCopy()\` \\"isIndex\\" argument is set to \`true\`\\r\\n\\r\\n\\u003cbr\\u003e\\u003cbr\\u003e\\r\\n\*\*Note:\*\*\\r\\n\\r\\n- The \`Notifications.spec.js\` unit tests will be evaluated, so make sure they work as expected"

Let's start improving the tests:

#### Header.spec.js

Import your new Header component within the test, and write two checks:

- Check whether the `Header` component contains the Holberton logo.
- Check whether the `Header` component contains the heading `h1` element with the correct text

#### Login.spec.js

Import your new `Login` component within the test, and check:

- Add a test to verify whether the `Login` includes 2 `label`, 2 `inputs`, and 1 `button` elements
- Add a test to verify whether the `inputs` elements get focused whenever the related `label` is clicked

#### Footer.spec.js

Import your new `Footer` component within the test, and check:

- Check whether the `p` element renders the string `Copyright {the current year} - Holberton School`, whenever the `getFooterCopy()` "isIndex" argument is set to `true`

**Note:**

- The `Notifications.spec.js` unit tests will be evaluated, so make sure they work as expected

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_props`
- **File:** `task_1/dashboard/src/Header/Header.spec.js, task_1/dashboard/src/Footer/Footer.spec.js, task_1/dashboard/src/Login/Login.spec.js, task_1/dashboard/src/App/App.spec.js`

### 3.

"#### Update the App component:\\r\\n\\r\\nInside the \`App\` component add a new empty array called \`notificationsList\` and fill it in with the notification items from the \`Notifications\` component, make sure each item has the following 3 keys \`id\`, \`type\`, and \`value\`:\\r\\n\\r\\n- \`id\`: a random unique number (1, 2, 3 required for checker validation)\\r\\n- \`type\`: whether it is default or urgent\\r\\n- \`value\`: notification text (the 3rd item should be \`html\`)\\r\\n\\r\\nThe new array should be passed as a prop (prop name \`notifications\`) to the \`Notifications\` component\\r\\n\\r\\n\\r\\n#### Create a NotificationItem.jsx\\r\\nInside the \`Notifications\` component, Since the \`li\` element is repeated more than once, create a new component that will be responsible for rendering these elements.\\r\\n\\r\\nWithin a new file \`NotificationItem.jsx\` create a new component named \`NotificationItem\`:\\r\\n\\r\\n- This component should render a \`li\` tag\\r\\n- The component should accept three properties (\`type\`, \`html\`, and \`value\`)\\r\\n- The \`data-notification-type\` attribute should take the \`type\` prop as its value\\r\\n- The \`dangerouslySetInnerHTML\` attribute should take the \`html\` prop as its value\\r\\n- The \`li\` tag should render the text from the prop's \`value\` .\\r\\n- Your JSX code should conditionally render the notification items based on the value of the \`type\` prop\\r\\n- Apply inline styling to add a text color to notification items (default notifications should appear in \`blue\`, urgent notifications in \`red\`) and remove these styles from \`Notifications.css\`\\r\\n\\r\\n\\u003cbr /\\u003e\\r\\n\\r\\n#### Create a NotificationItem.spec.js\\r\\nEvery component should be tested. Create a new file named \`NotificationItem.spec.js\` , and add the following tests:\\r\\n\\r\\n- Check whether the \`li\` element has the color \`blue\`, and the the attribute \`data-notification-type\` set to \`default\` whenever the component receives the prop's type as \\"default\\".\\r\\n- Check whether the \`li\` element has the color \`red\`, and the the attribute \`data-notification-type\` set to \`urgent\` whenever the component receives the props's type as \\"urgent\\".\\r\\n\\r\\n\\u003cbr /\\u003e\\r\\n\\r\\n#### Update Notifications.jsx\\r\\n\\r\\n- The \`Notifications\` component should accept the prop \`notifications\` which will be set to the value of \`notificationsList\` (By default it should be an empty array)\\r\\n- Import the new \`NotificationItem\` component and replace the \`\\u003cli\\u003e\` tags with \`NotificationItem\` components. (this is a common case where the \`map\` array method comes in handy)\\r\\n\\r\\n \\u003cbr /\\u003e\\r\\n\\r\\n#### The Notifications.spec.js\\r\\n\\r\\n- Ensure that the Notifications component still displays the 3 notification items, with the appropriate text through the \`notifications\` prop\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\n- At this point, reloading the \`Holberton dashboard\` React application should still render the same design.\\r\\n- The console in your browser should not show any errors or warnings\\r\\n- There should be no lint errors\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Remember: A well-designed component provides default prop values to gracefully handle cases where props aren't passed, rather than crashing\*\*\\r\\n\\r\\n"

#### Update the App component:

Inside the `App` component add a new empty array called `notificationsList` and fill it in with the notification items from the `Notifications` component, make sure each item has the following 3 keys `id`, `type`, and `value`:

- `id`: a random unique number (1, 2, 3 required for checker validation)
- `type`: whether it is default or urgent
- `value`: notification text (the 3rd item should be `html`)

The new array should be passed as a prop (prop name `notifications`) to the `Notifications` component

#### Create a NotificationItem.jsx

Inside the `Notifications` component, Since the `li` element is repeated more than once, create a new component that will be responsible for rendering these elements.

Within a new file `NotificationItem.jsx` create a new component named `NotificationItem`:

- This component should render a `li` tag
- The component should accept three properties (`type`, `html`, and `value`)
- The `data-notification-type` attribute should take the `type` prop as its value
- The `dangerouslySetInnerHTML` attribute should take the `html` prop as its value
- The `li` tag should render the text from the prop's `value` .
- Your JSX code should conditionally render the notification items based on the value of the `type` prop
- Apply inline styling to add a text color to notification items (default notifications should appear in `blue`, urgent notifications in `red`) and remove these styles from `Notifications.css`

#### Create a NotificationItem.spec.js

Every component should be tested. Create a new file named `NotificationItem.spec.js` , and add the following tests:

- Check whether the `li` element has the color `blue`, and the the attribute `data-notification-type` set to `default` whenever the component receives the prop's type as "default".
- Check whether the `li` element has the color `red`, and the the attribute `data-notification-type` set to `urgent` whenever the component receives the props's type as "urgent".

#### Update Notifications.jsx

- The `Notifications` component should accept the prop `notifications` which will be set to the value of `notificationsList` (By default it should be an empty array)
- Import the new `NotificationItem` component and replace the `<li>` tags with `NotificationItem` components. (this is a common case where the `map` array method comes in handy)

#### The Notifications.spec.js

- Ensure that the Notifications component still displays the 3 notification items, with the appropriate text through the `notifications` prop

**Requirements:**

- At this point, reloading the `Holberton dashboard` React application should still render the same design.
- The console in your browser should not show any errors or warnings
- There should be no lint errors

**Remember: A well-designed component provides default prop values to gracefully handle cases where props aren't passed, rather than crashingRepo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_props`
- **File:** `task_2/dashboard/src/Notifications/NotificationItem.js, task_2/dashboard/src/Notifications/NotificationItem.spec.js, task_2/dashboard/src/Notifications/Notifications.js, task_2/dashboard/src/Notifications/Notifications.spec.js`

### 4.

"Using the React extension in Chrome:\\r\\n\\r\\n- Modify the type of the first NotificationItem to change from \\"default\\" to \\"urgent\\". The first notification should change color to red and vice versa, take a screenshot\\r\\n- Profile the load of the application and note which component is the longest to render after \`App\` component, take a screenshot\\r\\n\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\n- You have to push all your code boilerplate with the screenshots from your browser react devtools result\\r\\n"

Using the React extension in Chrome:

- Modify the type of the first NotificationItem to change from "default" to "urgent". The first notification should change color to red and vice versa, take a screenshot
- Profile the load of the application and note which component is the longest to render after `App` component, take a screenshot

**Requirements:**

- You have to push all your code boilerplate with the screenshots from your browser react devtools result

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_props`
- **File:** `task_3/dashboard, task_3/change_property.png, task_3/profiler.png`

### 5.

"#### Create a CourseListRow component\\r\\nCreate a new folder \`CourseList\` and a new component with the name \`CourseListRow\`. The component accepts 3 props:\\r\\n\\r\\n- \`isHeader\` (default value: \`false\`)\\r\\n- \`textFirstCell\` (default value: empty string)\\r\\n- \`textSecondCell\` (default value: null)\\r\\n\\r\\n\\r\\nThe component returns a \`tr\` element, and within that element:\\r\\n\\r\\n- If \`isHeader\` is \`true\`:\\r\\n\\t- If \`textSecondCell\` is \`null\`, it returns a \`th\` element containing \`textFirstCell\` with a \`colSpan = 2\`\\r\\n\\t- If \`textSecondCell\` is not null, it returns two \`th\` elements containing \`textFirstCell\` and \`textSecondCell\`\\r\\n- If \`isHeader\` is \`false\`\\r\\n\\t- It returns two \`td\` elements containing \`textFirstCell\` and \`textSecondCell\`\\r\\n\\r\\n\\r\\n\*\*Create a \`CourseListRow.spec.js\` file, and add the following tests:\*\*\\r\\n\\r\\n- When \`isHeader\` is \`true\`:\\r\\n\\t- When \`textSecondCell\` is null, check whether the component renders one \`columnheader\` that has the attribute\`colspan = 2\`\\r\\n\\t- When \`textSecondCell\` is not null, check whether the component renders 2 \`\\u003cth\\u003e\` cells .\\r\\n- When \`isHeader\` is \`false\`:\\r\\n\\t- Add a check to test the component renders correctly two \`td\` elements within a \`tr\` element\\r\\n\\r\\n\\u003cbr /\\u003e\\r\\n\\r\\n#### Create a CourseList component\\r\\n\\r\\nIn the folder \`CourseList\`, create a new component named \`CourseList\` where it's:\\r\\n\\r\\n- A child of the \`App\` component\\r\\n- Receive \`courses\` prop (by default it's an empty array)\\r\\n\\r\\n- It returns a \`table\` element with an id \`CourseList\`\\r\\n- It contains a \`thead\` element\\r\\n- It includes a \`CourseListRow\` with the props \`textFirstCell=\\"Available courses\\"\` and \`isHeader=true\`\\r\\n- It includes a \`CourseListRow\` with the props \`textFirstCell=\\"Course name\\"\`, \`textSecondCell=\\"Credit\\"\`, and \`isHeader=true\`\\r\\n- It contains a \`tbody\` element:\\r\\n\\t- It includes a \`CourseListRow\` component that will take course data with every iteration\\r\\n\\t- When the \`courses\` prop is empty the \`CourseListRow\` component should render a \`thead\` row with text \`No course available yet\`\\r\\n\\r\\n\\u003cbr /\\u003e\\r\\n\\r\\n\*\*Create a \`CourseList.spec.js\` with two checks:\*\*\\r\\n\\r\\n- Check that it renders 5 different rows when it receive an array of courses objects\\r\\n- Check that it renders 1 row whenever it receive an empty array\\r\\n\\r\\n\\u003cbr /\\u003e\\r\\n\\r\\n\*\*Create a CourseList.css:\*\*\\r\\n\\r\\n- Create and import a file \`CourseList.css\` where you will be able to add the below styling for the component\\r\\n\\r\\n\\u003cbr /\\u003e\\r\\n\\r\\n#### Modify the App component\\r\\n\\r\\n- Add an array of courses objects \`coursesList\`, where each object has the following key-value pairs\\r\\n\\t- \`id\`: unique number\\r\\n\\t- \`name\`: ES6, Webpack, React\\r\\n\\t- \`credit\`: 60, 20, 40\\r\\n\\r\\n- Modify the \`App\` component to display either the \`Login\`, or the \`CourseList\` component:\\r\\n\\r\\n- Create a property \`isLoggedIn\`. It should be \`false\` by default\\r\\n- When \`isLoggedIn\` is \`false\`, display the \`Login\` component\\r\\n- Otherwise display the \`CourseList\` component\\r\\n\\r\\n\\u003cbr /\\u003e\\r\\n\\r\\n\*\*Modify the \`App.spec.js\` test files and add the following tests:\*\*\\r\\n\\r\\n- When the \`isLoggedIn\` is set to \`false\`:\\r\\n\\t- Check that the \`App\` component should render the \`Login\` form\\r\\n\\r\\n- When the \`isLoggedIn\` is set to \`true\`:\\r\\n\\t- Check that the \`App\` component should render a \`CourseList\` table\\r\\n\\r\\n\\r\\n\\u003cbr /\\u003e\\r\\n\\r\\n#### Update the UI:\\r\\n\\r\\n\`App\`:\\r\\n\\r\\n- Modify the CSS to make the UI looks like the image below when \`isLoggedIn\` is \`false\`\\r\\n\\r\\n!\[isLoggedInfalse.png\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/1c9259a842b824ce6f749b6db12ae1807742bae0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260210%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260210T094851Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=4a795d6034a731b7deaedfe81a13e5bfd8e672b45eb76e5b9cb43b13c6b0e722)\\r\\n\\r\\n- Modify the CSS to make the UI looks like the image below when \`isLoggedIn\` is \`true\`\\r\\n\\r\\n!\[isLoggedInTrue.png\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/898b52472179db2a357a1da83dcac7f7e58522e8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260210%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260210T094851Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=b12850c57df997c8e2ef0f5b791202d0e3f851dc6416ad07ef5deef0e4a3af03)\\r\\n\\r\\n- Modify the CSS to make the UI looks like the image below when \`isLoggedIn\` is \`true\` and the courses prop is an empty array\\r\\n\\r\\n!\[no-courses-available.png\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/ab09dbfdee0eacfef0782cdd0ed57cb6f56d8958.png?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260210%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260210T094851Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=89e38968154e7152031bd0a92390284b6585434a9421828d8f4d8e1877c6d867)\\r\\n\\r\\nRequirements:\\r\\n\\r\\n- The console in your browser should not show any error or warning\\r\\n- All unit tests PASS\\r\\n- No lint errors\\r"

#### Create a CourseListRow component

Create a new folder `CourseList` and a new component with the name `CourseListRow`. The component accepts 3 props:

- `isHeader` (default value: `false`)
- `textFirstCell` (default value: empty string)
- `textSecondCell` (default value: null)

The component returns a `tr` element, and within that element:

- If `isHeader` is `true`:
  - If `textSecondCell` is `null`, it returns a `th` element containing `textFirstCell` with a `colSpan = 2`
  - If `textSecondCell` is not null, it returns two `th` elements containing `textFirstCell` and `textSecondCell`
- If `isHeader` is `false`
  - It returns two `td` elements containing `textFirstCell` and `textSecondCell`

**Create a `CourseListRow.spec.js` file, and add the following tests:**

- When `isHeader` is `true`:
  - When `textSecondCell` is null, check whether the component renders one `columnheader` that has the attribute`colspan = 2`
  - When `textSecondCell` is not null, check whether the component renders 2 `<th>` cells .
- When `isHeader` is `false`:
  - Add a check to test the component renders correctly two `td` elements within a `tr` element

#### Create a CourseList component

In the folder `CourseList`, create a new component named `CourseList` where it's:

- A child of the `App` component
- Receive `courses` prop (by default it's an empty array)
- It returns a `table` element with an id `CourseList`
- It contains a `thead` element
- It includes a `CourseListRow` with the props `textFirstCell="Available courses"` and `isHeader=true`
- It includes a `CourseListRow` with the props `textFirstCell="Course name"`, `textSecondCell="Credit"`, and `isHeader=true`
- It contains a `tbody` element:
  - It includes a `CourseListRow` component that will take course data with every iteration
  - When the `courses` prop is empty the `CourseListRow` component should render a `thead` row with text `No course available yet`

**Create a `CourseList.spec.js` with two checks:**

- Check that it renders 5 different rows when it receive an array of courses objects
- Check that it renders 1 row whenever it receive an empty array

**Create a CourseList.css:**

- Create and import a file `CourseList.css` where you will be able to add the below styling for the component

#### Modify the App component

- Add an array of courses objects `coursesList`, where each object has the following key-value pairs
  - `id`: unique number
  - `name`: ES6, Webpack, React
  - `credit`: 60, 20, 40

- Modify the `App` component to display either the `Login`, or the `CourseList` component:
- Create a property `isLoggedIn`. It should be `false` by default
- When `isLoggedIn` is `false`, display the `Login` component
- Otherwise display the `CourseList` component

**Modify the `App.spec.js` test files and add the following tests:**

- When the `isLoggedIn` is set to `false`:
  - Check that the `App` component should render the `Login` form

- When the `isLoggedIn` is set to `true`:
  - Check that the `App` component should render a `CourseList` table

#### Update the UI:

`App`:

- Modify the CSS to make the UI looks like the image below when `isLoggedIn` is `false`

![isLoggedInfalse.png](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/1c9259a842b824ce6f749b6db12ae1807742bae0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260210%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260210T094851Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=4a795d6034a731b7deaedfe81a13e5bfd8e672b45eb76e5b9cb43b13c6b0e722)

- Modify the CSS to make the UI looks like the image below when `isLoggedIn` is `true`

![isLoggedInTrue.png](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/898b52472179db2a357a1da83dcac7f7e58522e8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260210%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260210T094851Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=b12850c57df997c8e2ef0f5b791202d0e3f851dc6416ad07ef5deef0e4a3af03)

- Modify the CSS to make the UI looks like the image below when `isLoggedIn` is `true` and the courses prop is an empty array

![no-courses-available.png](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/ab09dbfdee0eacfef0782cdd0ed57cb6f56d8958.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260210%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260210T094851Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=89e38968154e7152031bd0a92390284b6585434a9421828d8f4d8e1877c6d867)

Requirements:

- The console in your browser should not show any error or warning
- All unit tests PASS
- No lint errors

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_props`
- **File:** `task_4/dashboard/src/CourseList/CourseListRow.jsx, task_4/dashboard/src/CourseList/CourseListRow.spec.js, task_4/dashboard/src/CourseList/CourseList.jsx, task_4/dashboard/src/CourseList/CourseList.css, /src/CourseList.spec.js, task_4/dashboard/src/App/App.jsx, task_4/dashboard/src/App/App.spec.js, task_4/dashboard/src/App/App.css`

### 6.

"#### Modify the Notifications component\\r\\nAdd a new \`div\` element with the class \`notification-title\`:\\r\\n\\r\\n- It contains a text \`Your notifications\`\\r\\n- It should be displayed right before \`div.notification-items\` container element\\r\\n\\r\\nAdd a prop to the \`Notifications\` component named \`displayDrawer\`:\\r\\n\\r\\n- By default it should be \`false\`\\r\\n\\t- In this case the notification items, the text \\"Here is the list of notifications\\", and the button should not be displayed\\r\\n\\t\\r\\n\\t\\r\\n- Otherwise:\\r\\n\\t- the notification items, the text \\"Here is the list of notifications\\", and the button should be displayed\\r\\n\\r\\n\\r\\n- When the \`notifications\` prop receives an empty array the \`Notifications\` component should display the text \`No new notification for now\`\\r\\n\\r\\n\\r\\n- In All cases, the text \\"Your Notifications\\" should always be displayed.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n#### Update the \`Notifications.spec.js\`:\\r\\n\\r\\n- Add new tests to check the behavior of the UI whenever the prop \`displayDrawer\` set to \`false\`:\\r\\n\\t- Check that the \`Notifications\` component doesn't displays the close button, the \`p\` element (Here's the list...), or the notification items\\r\\n\\r\\n- Add new tests to check the behavior of the UI whenever the the prop \`displayDrawer\` set to \`true\`:\\r\\n\\t- Check that the \`Notifications\` component displays the close button, the \`p\` element (Here's the list...), and the notification items\\r\\n\\r\\n- Add new tests to check the behavior of the UI whenever the prop \`displayDrawer\` set to \`true\` and \`notifications\` prop is empty:\\r\\n\\t- Check that the \`Notifications\` component displays the text \`No new notification for now\`\\r\\n\\r\\n- In all cases, the \\"Your Notifications\\" text check should PASS.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\n- All tests should PASS\\r\\n\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\`Notifications\` rendering cases:\\r\\n\\r\\n- Modify the CSS to make the UI looks like the image below when \`displayDrawer\` is \`true\`\\r\\n\\r\\n!\[displayDrawerTrue.png\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/180c2987bffff1e96178dcdfd939ff1ea70938e5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260210%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260210T094851Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=c04ef6720cd16b5d881ed32d01ffc8ad3c3e274424ef3e2255ca341503209ff0)\\r\\n\\r\\n- Modify the CSS to make the UI looks like the image below when \`displayDrawer\` is \`true\` \\u0026 \`notifications\` prop empty:\\r\\n\\r\\n!\[empty-notifications.png\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/c4399c726941b491d3cfede0ad6ace9d5275a539.png?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260210%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260210T094851Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=938fc7616751e12c9957c55ce379202fb9be723a1f804a7b7af5328c2f7031a6)\\r\\n\\r\\n- Modify the CSS to make the UI looks like the image below when \`displayDrawer\` is \`false\`\\r\\n\\r\\n!\[displayDrawerFalse.png\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/4c208e54072410a89c7a5da30bb4da50cc131b40.png?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260210%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260210T094851Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=a673db36c3179a9d00f97228b669100e81d2591305cc55328b777bcb33938962)"

#### Modify the Notifications component

Add a new `div` element with the class `notification-title`:

- It contains a text `Your notifications`
- It should be displayed right before `div.notification-items` container element

Add a prop to the `Notifications` component named `displayDrawer`:

- By default it should be `false`
  - In this case the notification items, the text "Here is the list of notifications", and the button should not be displayed

- Otherwise:
  - the notification items, the text "Here is the list of notifications", and the button should be displayed

- When the `notifications` prop receives an empty array the `Notifications` component should display the text `No new notification for now`
- In All cases, the text "Your Notifications" should always be displayed.

#### Update the `Notifications.spec.js`:

- Add new tests to check the behavior of the UI whenever the prop `displayDrawer` set to `false`:
  - Check that the `Notifications` component doesn't displays the close button, the `p` element (Here's the list…), or the notification items

- Add new tests to check the behavior of the UI whenever the the prop `displayDrawer` set to `true`:
  - Check that the `Notifications` component displays the close button, the `p` element (Here's the list…), and the notification items

- Add new tests to check the behavior of the UI whenever the prop `displayDrawer` set to `true` and `notifications` prop is empty:
  - Check that the `Notifications` component displays the text `No new notification for now`

- In all cases, the "Your Notifications" text check should PASS.

**Requirements:**

- All tests should PASS

`Notifications` rendering cases:

- Modify the CSS to make the UI looks like the image below when `displayDrawer` is `true`

![displayDrawerTrue.png](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/180c2987bffff1e96178dcdfd939ff1ea70938e5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260210%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260210T094851Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=c04ef6720cd16b5d881ed32d01ffc8ad3c3e274424ef3e2255ca341503209ff0)

- Modify the CSS to make the UI looks like the image below when `displayDrawer` is `true` & `notifications` prop empty:

![empty-notifications.png](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/c4399c726941b491d3cfede0ad6ace9d5275a539.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260210%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260210T094851Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=938fc7616751e12c9957c55ce379202fb9be723a1f804a7b7af5328c2f7031a6)

- Modify the CSS to make the UI looks like the image below when `displayDrawer` is `false`

![displayDrawerFalse.png](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2024/9/4c208e54072410a89c7a5da30bb4da50cc131b40.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260210%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260210T094851Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=a673db36c3179a9d00f97228b669100e81d2591305cc55328b777bcb33938962)

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_props`
- **File:** `task_5/dashboard, task_5/dashboard/src/Notifications/Notifications.jsx, task_5/dashboard/src/Notifications/Notifications.spec.js`
