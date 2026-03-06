import React, { useCallback, useState } from "react";
import Notifications from "../Notifications/Notifications.jsx";
import Header from "../Header/Header.jsx";
import Login from "../Login/Login.jsx";
import Footer from "../Footer/Footer.jsx";
import CourseList from "../CourseList/CourseList.jsx";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom.jsx";
import BodySection from "../BodySection/BodySection.jsx";
import AppContext, { user as contextUser } from "../Context/context.js";

const notificationsList = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

const listCoursesData = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const App = () => {
  const [displayDrawer, setDisplayDrawer] = useState(true);
  const [user, setUser] = useState(contextUser);
  const [notifications, setNotifications] = useState(notificationsList);
  const [listCourses] = useState(listCoursesData);

  const handleDisplayDrawer = useCallback(() => {
    setDisplayDrawer(true);
  }, []);

  const handleHideDrawer = useCallback(() => {
    setDisplayDrawer(false);
  }, []);

  const logIn = useCallback((email, password) => {
    setUser({
      email,
      password,
      isLoggedIn: true,
    });
  }, []);

  const logOut = useCallback(() => {
    setUser({
      email: "",
      password: "",
      isLoggedIn: false,
    });
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    console.log(`Notification ${id} has been marked as read`);
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id),
    );
  }, []);

  const contextValue = {
    user,
    logOut,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <React.Fragment>
        <div className="App flex flex-col min-h-screen">
          <div className="root-notifications">
            <Notifications
              notifications={notifications}
              displayDrawer={displayDrawer}
              handleDisplayDrawer={handleDisplayDrawer}
              handleHideDrawer={handleHideDrawer}
              markNotificationAsRead={markNotificationAsRead}
            />
          </div>
          <Header />
          <div className="App-body flex-grow p-4 md:p-12">
            {!user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={logIn} />
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
};

export default App;
