import React, { Component } from "react";
import Notifications from "../Notifications/Notifications.jsx";
import Header from "../Header/Header.jsx";
import Login from "../Login/Login.jsx";
import Footer from "../Footer/Footer.jsx";
import CourseList from "../CourseList/CourseList.jsx";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom.jsx";
import BodySection from "../BodySection/BodySection.jsx";

const notifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

class App extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {},
  };

  componentDidMount() {
    document.addEventListener("keydown", this.logoutShortcutDetection);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.logoutShortcutDetection);
  }

  logoutShortcutDetection = (event) => {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  };

  render() {
    const { isLoggedIn } = this.props;

    return (
      <React.Fragment>
        <div className="App flex flex-col min-h-screen">
          <div className="root-notifications">
            <Notifications notifications={notifications} displayDrawer={true} />
          </div>
          <Header />
          <div className="App-body flex-grow p-4 md:p-12">
            {!isLoggedIn ? (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>
                ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Similique, asperiores architecto blanditiis fuga doloribus sit
                illum aliquid ea distinctio minus accusantium, impedit quo
                voluptatibus ut magni dicta. Recusandae, quia dicta?
              </p>
            </BodySection>
          </div>
          <Footer isIndex={true} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
