import React, { useCallback, useMemo, useReducer, useEffect } from "react";
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
import { appReducer, initialState, APP_ACTIONS } from "./appReducer.js";

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { user, displayDrawer, notifications, courses } = state;

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
        dispatch({ type: APP_ACTIONS.SET_NOTIFICATIONS, notifications: data });
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
        dispatch({ type: APP_ACTIONS.SET_COURSES, courses: response.data });
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
    dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER });
  }, []);

  const handleHideDrawer = useCallback(() => {
    dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER });
  }, []);

  const logIn = useCallback((email, password) => {
    dispatch({
      type: APP_ACTIONS.LOGIN,
      user: { email, password },
    });
  }, []);

  const logOut = useCallback(() => {
    dispatch({ type: APP_ACTIONS.LOGOUT });
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    console.log(`Notification ${id} has been marked as read`);
    dispatch({ type: APP_ACTIONS.MARK_NOTIFICATION_READ, id });
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
                <CourseList listCourses={courses} />
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
