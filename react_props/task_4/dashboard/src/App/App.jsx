import './App.css';
import Notifications from '../Notifications/Notifications.jsx';
import Header from '../Header/Header.jsx';
import Login from '../Login/Login.jsx';
import Footer from '../Footer/Footer.jsx';
import CourseList from '../CourseList/CourseList.jsx';
import { getLatestNotification } from '../utils/utils';

function App({ isLoggedIn = false }) {
  const notifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
  ];

  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ];

  return (
    <div className="App">
      <div className='root-notifications'>
        <Notifications notifications={notifications} />
      </div>
      <Header />
      <div className="App-body">
        {!isLoggedIn ? (
          <Login />
        ) : (
          <CourseList listCourses={listCourses} />
        )}
      </div>
      <Footer />
    </div>
  )
};

export default App;
