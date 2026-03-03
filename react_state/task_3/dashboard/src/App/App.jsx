import React, { Component } from "react";
import Notifications from "../Notifications/Notifications.jsx";
import Header from "../Header/Header.jsx";
import Login from "../Login/Login.jsx";
import Footer from "../Footer/Footer.jsx";
import CourseList from "../CourseList/CourseList.jsx";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom.jsx";
import BodySection from "../BodySection/BodySection.jsx";
import AppContext, { user } from "../Context/context.js";

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
    this.state = {
      displayDrawer: false,
      user: user,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  logOut() {
    this.setState({
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    });
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
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
      this.logOut();
    }
  };

  render() {
    const { user, displayDrawer } = this.state;
    const value = { user, logOut: this.logOut };

    return (
      <AppContext.Provider value={value}>
        <React.Fragment>
          <div className="App flex flex-col min-h-screen">
            <div className="root-notifications">
              <Notifications
                notifications={notifications}
                displayDrawer={displayDrawer}
                handleDisplayDrawer={this.handleDisplayDrawer}
                handleHideDrawer={this.handleHideDrawer}  
              />
            </div>
            <Header />
            <div className="App-body flex-grow p-4 md:p-12">
              {!user.isLoggedIn ? (
                <BodySectionWithMarginBottom title="Log in to continue">
                  <Login logIn={this.logIn} />
                </BodySectionWithMarginBottom>
              ) : (
                <BodySectionWithMarginBottom title="Course list">
                  <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
              )}
              <BodySection title="News from the School">
                <p>Holberton School News goes here</p>
              </BodySection>
            </div>
            <Footer isIndex={true} />
          </div>
        </React.Fragment>
      </AppContext.Provider>
    );
  }
}

export default App;
