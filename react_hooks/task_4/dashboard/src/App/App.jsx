import React, { useCallback, useMemo, useState, useEffect } from "react";
import axios from "axios";
import Notifications from "../Notifications/Notifications.jsx";
import Header from "../Header/Header.jsx";
import Login from "../Login/Login.jsx";
import Footer from "../Footer/Footer.jsx";
import CourseList from "../CourseList/CourseList.jsx";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom.jsx";
import BodySection from "../BodySection/BodySection.jsx";
import AppContext, { user as contextUser } from "../Context/context.js";

const App = () => {
  const [displayDrawer, setDisplayDrawer] = useState(true);
  const [user, setUser] = useState(contextUser);
  const [notifications, setNotifications] = useState([]);
  const [listCourses, setCourses] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get("/notifications.json");
        const data = response.data.map((notif) => {
          if (notif.html && notif.html.latest) {
            return { ...notif, html: { __html: getLatestNotification() } };
          }
          return notif;
        });
        setNotifications(data);
      } catch (error) {
        if (process.env.NODE_ENV !== "production") {
          console.error("Error fetching notifications:", error);
        }
      }
    };
    fetchNotifications();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("/courses.json");
        setCourses(response.data);
      } catch (error) {
        if (process.env.NODE_ENV !== "production") {
          console.error("Error fetching courses:", error);
        }
      }
    };

    if (user.isLoggedIn) {
      fetchCourses();
    }
  }, [user.isLoggedIn]);

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

  const contextValue = useMemo(
    () => ({
      user,
      logOut,
    }),
    [user, logOut],
  );

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
