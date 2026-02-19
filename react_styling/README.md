## Resources

**Read or watch**:

- [Tailwindcss](/rltoken/OMVfd46TTawn9P9QomTaAQ)
- [Integrate Tailwindcss to an existing React project](/rltoken/0gfH3pJHug6K906PDqF7Iw)
- [Tailwindcss configuration](/rltoken/QLwpTC3kYPobgoDdXa82IA)
- [Tailwindcss v4 upgrade guide](/rltoken/i8c_GQMShf2b_8mzBdjzCQ)
- [Tailwind Layer Directive](/rltoken/juvaSRuU7jmMfynY-NTkBg)
- [Tailwind Border color](/rltoken/YhcjTqyQ4jGDYSYA1eA9yw)
- [Default spacing scale in Tailwind](/rltoken/F_l8lU3DE793cayjuXXGxA)
- [Tailwind responsive design](/rltoken/BcPpW1KDOx_ZOUNDgAFj8w)
- [Tailwind animation](/rltoken/5LSbtz5wfGBZ8gFhZn7uGA)

## Learning Objectives

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/DLa37LAaskepP3X9R50YAg), **without the help of Google**:

- How to integrate and utilize TailwindCSS v4 within an existing React application without configuration files
- How to declare and use CSS custom properties for consistent theming and color management
- How to apply conditional styling based on component props
- How to implement responsive design using Tailwind's breakpoint syntax for adapting UI across different screen sizes
- How to create and apply animations using Tailwind's utility classes

## Requirements

- All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 10.x.x`
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- A `README.md` file, at the root of the project’s folder and each task’s folder, is mandatory
- Install Jest globally: `npm install -g jest` version `29.7.0`
- Install TailwindCSS version 4._._
- All your tasks will be tested on a headless chrome browser

## Tasks

### 1.

"Copy over the \`task_5\` directory from the \`React components\` project and rename it \`task_0\`\\r\\n\\r\\n\*\*In order to add \`TailwindCSS\` to the project, you have to install the following npm package:\*\*\\r\\n\\r\\n- \`@tailwindcss/vite\` and follow the docs to integrate successfully \`TailwindCSS v4\`\\r\\n\\r\\n\\r\\n\*\*In the src/main.css file:\*\*\\r\\n\\r\\n- Add a theme configuration that defines the \`Roboto font family\`\\r\\n- Use Tailwind's layer system to set Roboto as the default font for the entire application\\r\\n- You'll need to install this package \`@fontsource/roboto\`\\r\\n\\r\\n\*\*In the src/main.jsx file:\*\*\\r\\n\\r\\n- add appropriate import statements to include three different weights of the Roboto font:\\r\\n\\t- Regular weight (\`400\`) for normal body text\\r\\n\\t- Medium weight (\`500\`) for semi-emphasized text\\r\\n\\t- Bold weight (\`700\`) for headings and strong emphasis\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirement:\*\*\\r\\n\\r\\nYou're not allowed to create any TailwindCSS configuration file\\r\\n\\r\\nAs the tailwind integration won't affects the app logic all your existing RTL unit tests should PASS\\r\\n\\r\\n"

Copy over the `task_5` directory from the `React components` project and rename it `task_0`

**In order to add `TailwindCSS` to the project, you have to install the following npm package:**

- `@tailwindcss/vite` and follow the docs to integrate successfully `TailwindCSS v4`

**In the src/main.css file:**

- Add a theme configuration that defines the `Roboto font family`
- Use Tailwind's layer system to set Roboto as the default font for the entire application
- You'll need to install this package `@fontsource/roboto`

**In the src/main.jsx file:**

- add appropriate import statements to include three different weights of the Roboto font:
  - Regular weight (`400`) for normal body text
  - Medium weight (`500`) for semi-emphasized text
  - Bold weight (`700`) for headings and strong emphasis

**Requirement:**

You're not allowed to create any TailwindCSS configuration file

As the tailwind integration won't affects the app logic all your existing RTL unit tests should PASS

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_styling`
- **File:** `task_0/dashboard/src/main.css, task_0/dashboard/src/main.jsx`

### 2.

"Create a new folder \`task_1\` and paste the \`task_0/dashboard\` folder into it\\r\\n\\r\\nCreate a new file \`main.css\` and make sure:\\r\\n\\r\\n- Add 2 background color variables:\\r\\n\\r\\n\\t- \`--color-table-header\`: \`#deb5b5\`\\r\\n\\t- \`--color-table-rows\`: \`#CDCDCD\`\\r\\n\\r\\n\\r\\n\*\*In the \`CourseListRow.jsx\`:\*\*\\r\\n\\r\\n- Add the bg colors declared above conditionally whenever the table row is a header or a simple one\\r\\n- Add the opacity of \`66%\` for the header rows and \`45%\` otherwise\\r\\n- Add a border around the table's cells with with the \`gray\` color and shade of \`400\`\\r\\n- Add a padding left of \`8px\` for the \`td\` elements (you should use the appropriate tailwindcss class)\\r\\n\\r\\n\*\*In the \`CourseList.jsx\`:\*\*\\r\\n\\r\\n- The responsive container that wrapped your table should occupies \`80%\` of the page width\\r\\n- The table should expand to fill its container completely\\r\\n- Center the container on the page with appropriate spacing\\r\\n\\r\\n\\r\\nThe courses table should look consistent whether it contains data or is empty\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Reminder\*\*\\r\\n\* When the \`isLoggedIn\` is set to \`false\`: the \`Login\` form is displayed.\\r\\n\* When the \`isLoggedIn\` is set to \`true\`: the \`CourseList\` table is displayed.\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirement:\*\*\\r\\n\\r\\nYour final UI must match provided screenshots\\r\\n\\r\\nDon’t remove any existing classes or ids\\r\\n\\r\\nYou’re not allowed to create any TailwindCSS configuration file\\r\\n\\r\\nAs the tailwind integration won’t affects the app logic all your existing RTL unit tests should PASS\\r\\n\\r\\nNo CSS file import statement in both components\\r\\n\\r\\nNo \`src/CourseList/\*.css\` files allowed\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n!\[courses-table1.png\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/4/01d458cb9206d20ff0a662867a70e73c2b944be2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260219T130228Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=286e142e88ffa88da7136a13d5e7144bc764fc01727199f654d02f1454a65fe8)\\r\\n!\[courses-table2.png\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/4/5fc94c127e110633fbc9c9f3c89b3cd3ca1a2d86.png?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260219T130228Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=3eccf1d1516576ccc1d268b2bc3675c1ea725821e978dea4ce66c68fabd365b1)"

Create a new folder `task_1` and paste the `task_0/dashboard` folder into it

Create a new file `main.css` and make sure:

- Add 2 background color variables:
  - `--color-table-header`: `#deb5b5`
  - `--color-table-rows`: `#CDCDCD`

**In the `CourseListRow.jsx`:**

- Add the bg colors declared above conditionally whenever the table row is a header or a simple one
- Add the opacity of `66%` for the header rows and `45%` otherwise
- Add a border around the table's cells with with the `gray` color and shade of `400`
- Add a padding left of `8px` for the `td` elements (you should use the appropriate tailwindcss class)

**In the `CourseList.jsx`:**

- The responsive container that wrapped your table should occupies `80%` of the page width
- The table should expand to fill its container completely
- Center the container on the page with appropriate spacing

The courses table should look consistent whether it contains data or is empty

**Reminder**

- When the `isLoggedIn` is set to `false`: the `Login` form is displayed.
- When the `isLoggedIn` is set to `true`: the `CourseList` table is displayed.

**Requirement:**

Your final UI must match provided screenshots

Don’t remove any existing classes or ids

You’re not allowed to create any TailwindCSS configuration file

As the tailwind integration won’t affects the app logic all your existing RTL unit tests should PASS

No CSS file import statement in both components

No `src/CourseList/*.css` files allowed

![courses-table1.png](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/4/01d458cb9206d20ff0a662867a70e73c2b944be2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260219T130228Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=286e142e88ffa88da7136a13d5e7144bc764fc01727199f654d02f1454a65fe8) ![courses-table2.png](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/4/5fc94c127e110633fbc9c9f3c89b3cd3ca1a2d86.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260219T130228Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=3eccf1d1516576ccc1d268b2bc3675c1ea725821e978dea4ce66c68fabd365b1)

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_styling`
- **File:** `task_1/dashboard/src/main.css, task_1/dashboard/src/CourseList/CourseList.jsx, task_1/dashboard/src/CourseList/CourseListRow.jsx`

### 3.

"In this task_2 you'll continue converting the CSS rules into Tailwind classes:\\r\\n\\r\\nIn the \`main.css\`:\\r\\n\\r\\n- Add 3 color variables:\\r\\n\\t- \`--main-color\`: \`#e1003c\`\\r\\n\\t- \`--default-notification-item\`: \`blue\`\\r\\n\\t- \`--urgent-notification-item\`: \`red\`\\r\\n\\r\\n\\r\\nIn the \`NotificationItem.jsx\`:\\r\\n\\r\\n- Use the notification colors defined above where you:\\r\\n\\t- Apply notification colors based on the item type e.i: default = blue or urgent = red\\r\\n\\t- Consider how to reference the new color variables within Tailwind class names for text colors\\r\\n\\r\\n\\r\\nIn the \`Notifications.jsx\`:\\r\\n\\r\\n- Make sure to set the title \`Your Notifications\` at right and on top of the notification panel\\r\\n- Ensure that surround the notification panel with a \`dashed\` border with the color variable \`--main-color\`\\r\\n- The notification panel should occupy approximately \`25%\` of the page width on desktop screens\\r\\n- Adding a padding from all sides around the notification items of \`6px\` using the appropriate tailwindcss class\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\nRemove the styles tests from the \`NotificationItem.spec.js\` file\\r\\n\\r\\nYour final UI should be the same as shown in the screenshots below\\r\\n\\r\\nDon’t remove any existing classes or ids\\r\\n\\r\\nYou’re not allowed to create any TailwindCSS configuration file\\r\\n\\r\\nAs the tailwind integration won’t affects the app logic all your existing RTL unit tests should PASS\\r\\n\\r\\nNo CSS file import statement in both components\\r\\n\\r\\nNo \`src/Notifications/\*.css\` files allowed\\r\\n\\r\\n\\u003cbr\\u003e\\u003cbr\\u003e\\r\\n\\r\\n!\[with-notifications.png\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/5/91b79206053672337181d29d6d6f579b08036904.png?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260219T130228Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=5aeb8c9765a8740d18b8cfe13642644563c57dba14dbdd5aa1ef7a872a281c56)\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n!\[no-notifications.png\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/5/b8dd7233b0c20d023baa5a45fc158211d7f7f872.png?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260219T130228Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=814cafc936c487c2127fa8c030e2aaed2d2b3f7a4d41a6f0dd75398069a207ff)\\r\\n\\r"

In this task_2 you'll continue converting the CSS rules into Tailwind classes:

In the `main.css`:

- Add 3 color variables:
  - `--main-color`: `#e1003c`
  - `--default-notification-item`: `blue`
  - `--urgent-notification-item`: `red`

In the `NotificationItem.jsx`:

- Use the notification colors defined above where you:
  - Apply notification colors based on the item type e.i: default = blue or urgent = red
  - Consider how to reference the new color variables within Tailwind class names for text colors

In the `Notifications.jsx`:

- Make sure to set the title `Your Notifications` at right and on top of the notification panel
- Ensure that surround the notification panel with a `dashed` border with the color variable `--main-color`
- The notification panel should occupy approximately `25%` of the page width on desktop screens
- Adding a padding from all sides around the notification items of `6px` using the appropriate tailwindcss class

**Requirements:**

Remove the styles tests from the `NotificationItem.spec.js` file

Your final UI should be the same as shown in the screenshots below

Don’t remove any existing classes or ids

You’re not allowed to create any TailwindCSS configuration file

As the tailwind integration won’t affects the app logic all your existing RTL unit tests should PASS

No CSS file import statement in both components

No `src/Notifications/*.css` files allowed

![with-notifications.png](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/5/91b79206053672337181d29d6d6f579b08036904.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260219T130228Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=5aeb8c9765a8740d18b8cfe13642644563c57dba14dbdd5aa1ef7a872a281c56)

![no-notifications.png](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/5/b8dd7233b0c20d023baa5a45fc158211d7f7f872.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260219T130228Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=814cafc936c487c2127fa8c030e2aaed2d2b3f7a4d41a6f0dd75398069a207ff)

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_styling`
- **File:** `task_2/dashboard/src/main.css, task_2/dashboard/src/Notifications/NotificationItem.jsx, task_2/dashboard/src/Notifications/Notifications.jsx`

### 4.

"In this task you will convert the rest of the components styles to use Tailwind instead\\r\\n\\r\\nIn the \`Header.jsx\`:\\r\\n\\r\\n- Convert existing CSS rules to Tailwind classes\\r\\n- Use the \`--main-color\` for the heading text color\\r\\n- Consider the layout structure and alignment of logo and title (think about using flexbox)\\r\\n\\r\\n\\r\\nIn the \`Login.jsx\`:\\r\\n\\r\\n- Ensure the top border uses the \`--main-color\` variable\\r\\n- Convert the form layout to use Tailwind classes (think about using flexbox)\\r\\n- The Login UI should match the provided screenshot\\r\\n\\r\\n\\r\\nIn the \`BodySectionWithMarginBottom.jsx\` \\u0026 \`BodySection.jsx\`:\\r\\n\\r\\n- Convert existing CSS rules to Tailwind classes\\r\\n- Adjust spacing and typography using Tailwind's design system, e.i: margins, padding, and text styling\\r\\n\\r\\n\\r\\nIn the \`Footer.jsx\`:\\r\\n\\r\\n- Ensure the top border color uses the \`--main-color\` variable\\r\\n- Convert existing styling to Tailwind classes\\r\\n- Consider text styling and layout alignment\\r\\n- Position the Footer at the bottom of the layout container, ensuring it stays fixed to the bottom edge across all viewport sizes and content lengths\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\nYour final UI should be the same as shown in the screenshots below\\r\\n\\r\\nDon’t remove any existing classes or ids\\r\\n\\r\\nYou’re not allowed to create any TailwindCSS configuration file\\r\\n\\r\\nAs the tailwind integration won’t affects the app logic all your existing RTL unit tests should PASS\\r\\n\\r\\nNo CSS file import statement in all components\\r\\n\\r\\nNo \`\*.css\` files allowed (except for the \`main.css\` that's already provided)\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*\`layout_1:\`\*\*\\r\\n\\r\\n!\[layout-1.png\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/10/42f5fe47284a928f1c8b606c97ed6b54b90e5ed9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260219T130229Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=f0b5594f98a09f8335593639970defa869b5066ab95595ff0460d37a7c28d494)\\r\\n\\r\\n\\u003chr style=\\"border: none; border-top: 1px dashed #000;\\"\\u003e\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*\`layout_2:\`\*\*\\r\\n\\r\\n!\[layout-2.png\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/10/c5b4650a23c7e50d3f0f7bdf560a6bde321c1881.png?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260219T130229Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=4a9b86838a7504b9d092069404fa0d4af08a8bd17ba5f38307658041e3dd8c72)\\r\\n\\r\\n\\u003chr style=\\"border: none; border-top: 1px dashed #000;\\"\\u003e\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*\`layout_3:\`\*\*\\r\\n\\r\\n!\[layout-3.png\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/10/af91a8008e6a154f8581f03771642458e1b41a5d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260219T130229Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=b13c43afb8d4ee3ede983e29bd7a22519ef01a5b8b8c53fc46e5415ce8a18f83)\\r\\n\\r"

In this task you will convert the rest of the components styles to use Tailwind instead

In the `Header.jsx`:

- Convert existing CSS rules to Tailwind classes
- Use the `--main-color` for the heading text color
- Consider the layout structure and alignment of logo and title (think about using flexbox)

In the `Login.jsx`:

- Ensure the top border uses the `--main-color` variable
- Convert the form layout to use Tailwind classes (think about using flexbox)
- The Login UI should match the provided screenshot

In the `BodySectionWithMarginBottom.jsx` & `BodySection.jsx`:

- Convert existing CSS rules to Tailwind classes
- Adjust spacing and typography using Tailwind's design system, e.i: margins, padding, and text styling

In the `Footer.jsx`:

- Ensure the top border color uses the `--main-color` variable
- Convert existing styling to Tailwind classes
- Consider text styling and layout alignment
- Position the Footer at the bottom of the layout container, ensuring it stays fixed to the bottom edge across all viewport sizes and content lengths

**Requirements:**

Your final UI should be the same as shown in the screenshots below

Don’t remove any existing classes or ids

You’re not allowed to create any TailwindCSS configuration file

As the tailwind integration won’t affects the app logic all your existing RTL unit tests should PASS

No CSS file import statement in all components

No `*.css` files allowed (except for the `main.css` that's already provided)

**`layout_1:`**

![layout-1.png](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/10/42f5fe47284a928f1c8b606c97ed6b54b90e5ed9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260219T130229Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=f0b5594f98a09f8335593639970defa869b5066ab95595ff0460d37a7c28d494)

---

**`layout_2:`**

![layout-2.png](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/10/c5b4650a23c7e50d3f0f7bdf560a6bde321c1881.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260219T130229Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=4a9b86838a7504b9d092069404fa0d4af08a8bd17ba5f38307658041e3dd8c72)

---

**`layout_3:`**

![layout-3.png](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/10/af91a8008e6a154f8581f03771642458e1b41a5d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260219T130229Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=b13c43afb8d4ee3ede983e29bd7a22519ef01a5b8b8c53fc46e5415ce8a18f83)

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_styling`
- **File:** `task_3/dashboard/src/Login/Login.jsx, task_3/dashboard/src/Header/Header.jsx, task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.jsx, task_3/dashboard/src/BodySection/BodySection.jsx, task_3/dashboard/src/Footer/Footer.jsx`

### 5.

"In this task you'll be asked to work on the responsiveness of your \`Holberton Dashboard\` application\\r\\n\\r\\nIn the \`Notifications.jsx\`:\\r\\n\\r\\n- Make the notifications panel responsive, particularly for screen sizes below \`912px\`\\r\\n- Consider how notification items should occupy the viewport on smaller screens e.i: full width/height of the screen\\r\\n- Adjust list styling of the notification items for mobile devices (think about bullet points and spacing)\\r\\n- Add appropriate padding and border styling for notification items\\r\\n- Consider positioning and layering when notification items are full-screen\\r\\n- Adding a padding from all sides around the notification items of \`12px\` on mobile/tablet screens using the appropriate tailwindcss class\\r\\n\\r\\nIn the \`NotificationItem.jsx\`:\\r\\n\\r\\n- Implement responsive text sizing for different screen widths\\r\\n- Add proper border and padding for list items on smaller screens\\r\\n\\r\\nIn the \`App.jsx\`:\\r\\n\\r\\n- Create a responsive container structure for the entire application\\r\\n- Adjust padding for different screen sizes\\r\\n- Use flexbox layout to ensure proper content distribution across viewport heights\\r\\n\\r\\nIn the \`Header.jsx\`:\\r\\n\\r\\n- Implement responsive layout that adapts to smaller screens (consider stacking vs horizontal layout)\\r\\n- Adjust text sizes for breakpoints below \`520px\`\\r\\n- Maintain proper alignment and spacing across all device sizes\\r\\n\\r\\nIn the \`Login.jsx\`:\\r\\n\\r\\n- Make form inputs appropriately sized on mobile screens\\r\\n- Consider vertical vs horizontal layout for form elements on different screen sizes\\r\\n\\r\\nIn the \`CourseList.jsx\`:\\r\\n\\r\\n- Ensure the course table remains responsive and properly sized\\r\\n\\r\\nIn the \`Footer.jsx\`:\\r\\n\\r\\n- Implement responsive text sizing for various screen widths\\r\\n- Consider footer positioning in the overall layout e.i: stick to the bottom\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\nNote: \\r\\n\\r\\n- The long text used under the \`News from the school\` is intentionally to test responsive behavior in this section, and you'll use it only for this task\\r\\n- text:\\r\\n\`ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, asperiores architecto blanditiis fuga doloribus sit illum aliquid ea distinctio minus accusantium, impedit quo voluptatibus ut magni dicta. Recusandae, quia dicta?\`\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\nYour final UI should be the same as shown in the screenshots\\r\\n\\r\\nDon't remove any existing classes or ids\\r\\n\\r\\nYou're not allowed to create any TailwindCSS configuration file\\r\\n\\r\\nNo CSS file import statement in all components\\r\\n\\r\\nNo \`\*.css\` files allowed (except for the \`main.css\` that's already provided)\\r\\n\\r\\n\\r\\n\\u003cbr\\u003e\\u003cbr\\u003e\\r\\n\\r\\n\*\*\`layout_1:\`\*\*\\r\\n\\r\\n!\[responsive1 (3).png\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/5/b7b0ae914cd307dacf244960916372b2271efb15.png?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260219T130229Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=d925ce86bc65b42a2bafb8ca0831d94a230657810936d08cd655f769502ff228)\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*\`layout\_2:\`\*\*\\r\\n\\r\\n!\[responsive3 (1).png\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/5/212ec96117061f54ab8ad625673f6050f34b7d2a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260219T130229Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=30d60d017010a56651286a6f7b72e8b4cedc9c2f573e3e33dbcbcc284b5229f1)\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*\`layout\_3:\`\*\*\\r\\n\\r\\n!\[responsive2 (1).png\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/5/e22f993d7f73e0c6c0a4e6c37ea6c2480fcc6e1e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260219T130229Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=858c56effb7efd2f0f4ccce895a69248e0f3b5378f74d97c5656912eaf5f2791)\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*\`layout\_4:\`\*\*\\r\\n\\r\\n!\[responsive4 (1).png\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/5/30c8e14f8737987d5c40f241d881634aabc48577.png?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260219T130229Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=cb5b39ee18d4e42cb0d2d37e9c08c647d72143175147a2f7f7b5b69044b3cdc4)\\r"

In this task you'll be asked to work on the responsiveness of your `Holberton Dashboard` application

In the `Notifications.jsx`:

- Make the notifications panel responsive, particularly for screen sizes below `912px`
- Consider how notification items should occupy the viewport on smaller screens e.i: full width/height of the screen
- Adjust list styling of the notification items for mobile devices (think about bullet points and spacing)
- Add appropriate padding and border styling for notification items
- Consider positioning and layering when notification items are full-screen
- Adding a padding from all sides around the notification items of `12px` on mobile/tablet screens using the appropriate tailwindcss class

In the `NotificationItem.jsx`:

- Implement responsive text sizing for different screen widths
- Add proper border and padding for list items on smaller screens

In the `App.jsx`:

- Create a responsive container structure for the entire application
- Adjust padding for different screen sizes
- Use flexbox layout to ensure proper content distribution across viewport heights

In the `Header.jsx`:

- Implement responsive layout that adapts to smaller screens (consider stacking vs horizontal layout)
- Adjust text sizes for breakpoints below `520px`
- Maintain proper alignment and spacing across all device sizes

In the `Login.jsx`:

- Make form inputs appropriately sized on mobile screens
- Consider vertical vs horizontal layout for form elements on different screen sizes

In the `CourseList.jsx`:

- Ensure the course table remains responsive and properly sized

In the `Footer.jsx`:

- Implement responsive text sizing for various screen widths
- Consider footer positioning in the overall layout e.i: stick to the bottom

Note:

- The long text used under the `News from the school` is intentionally to test responsive behavior in this section, and you'll use it only for this task
- text: `ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, asperiores architecto blanditiis fuga doloribus sit illum aliquid ea distinctio minus accusantium, impedit quo voluptatibus ut magni dicta. Recusandae, quia dicta?`

**Requirements:**

Your final UI should be the same as shown in the screenshots

Don't remove any existing classes or ids

You're not allowed to create any TailwindCSS configuration file

No CSS file import statement in all components

No `*.css` files allowed (except for the `main.css` that's already provided)

**`layout_1:`**

![responsive1 (3).png](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/5/b7b0ae914cd307dacf244960916372b2271efb15.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260219T130229Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=d925ce86bc65b42a2bafb8ca0831d94a230657810936d08cd655f769502ff228)

**`layout_2:`**

![responsive3 (1).png](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/5/212ec96117061f54ab8ad625673f6050f34b7d2a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260219T130229Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=30d60d017010a56651286a6f7b72e8b4cedc9c2f573e3e33dbcbcc284b5229f1)

**`layout_3:`**

![responsive2 (1).png](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/5/e22f993d7f73e0c6c0a4e6c37ea6c2480fcc6e1e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260219T130229Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=858c56effb7efd2f0f4ccce895a69248e0f3b5378f74d97c5656912eaf5f2791)

**`layout_4:`**

![responsive4 (1).png](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/5/30c8e14f8737987d5c40f241d881634aabc48577.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260219T130229Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=cb5b39ee18d4e42cb0d2d37e9c08c647d72143175147a2f7f7b5b69044b3cdc4)

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_styling`
- **File:** `task_4/dashboard/src/Notifications/Notifications.jsx, task_4/dashboard/src/Notifications/NotificationItem.jsx, task_4/dashboard/src/App/App.jsx, task_4/dashboard/src/Header/Header.jsx, task_4/dashboard/src/Login/Login.jsx, task_4/dashboard/src/CourseList/CourseList.jsx, task_4/dashboard/src/Footer/Footer.jsx`

### 6.

"In this you'll apply a \`tailwind bounce animation\` in the notifications title \`Your notifications\`\\r\\n\\r\\nThe condition is simple, in the \`Notifications.jsx\`:\\r\\n\\r\\n- Whenever the \`notifications\` prop array length is \\u003e 0 AND the \`displayDrawer\` prop is set to\`false\` then add the bounce animation\\r\\n- otherwise no bounce animation applied\\r\\n- Consider how to conditionally apply CSS classes in React based on prop values\\r\\n\\r\\n\\u003cbr\\u003e\\r\\n\\r\\n\*\*Requirements:\*\*\\r\\n\\r\\nYour final UI should be the same as shown in the screenshots\\r\\n\\r\\nDon't remove any existing classes or ids\\r\\n\\r\\nYou're not allowed to create any TailwindCSS configuration file\\r\\n\\r\\nNo CSS file import statement in all components\\r\\n\\r\\nNo \`\*.css\` files allowed (except for the \`main.css\` that's already provided)\\r\\n\\r\\n\\r\\n\\u003cbr\\u003e\\u003cbr\\u003e\\u003cbr\\u003e\\u003cbr\\u003e\\r\\n\\r\\n!\[animation.gif\](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/5/4f187731e53d90d8ad66ee3e81a14c8849879a94.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256\\u0026X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4\_request\\u0026X-Amz-Date=20260219T130229Z\\u0026X-Amz-Expires=345600\\u0026X-Amz-SignedHeaders=host\\u0026X-Amz-Signature=66e84917a515c2cc14074a878b97a09090b84d908833cd05607ce29a00d6e8d6)\\r"

In this you'll apply a `tailwind bounce animation` in the notifications title `Your notifications`

The condition is simple, in the `Notifications.jsx`:

- Whenever the `notifications` prop array length is > 0 AND the `displayDrawer` prop is set to`false` then add the bounce animation
- otherwise no bounce animation applied
- Consider how to conditionally apply CSS classes in React based on prop values

**Requirements:**

Your final UI should be the same as shown in the screenshots

Don't remove any existing classes or ids

You're not allowed to create any TailwindCSS configuration file

No CSS file import statement in all components

No `*.css` files allowed (except for the `main.css` that's already provided)

![animation.gif](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2025/5/4f187731e53d90d8ad66ee3e81a14c8849879a94.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20260219%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20260219T130229Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=66e84917a515c2cc14074a878b97a09090b84d908833cd05607ce29a00d6e8d6)

**Repo:**

- GitHub repository: `holbertonschool-web_react`
- **Directory:** `react_styling`
- **File:** `task_5/dashboard/src/Notifications/Notifications.jsx`
