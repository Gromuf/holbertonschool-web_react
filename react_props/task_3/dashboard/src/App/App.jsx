import './App.css';
import Notifications from '../Notifications/Notifications.jsx';
import Header from '../Header/Header.jsx';
import Login from '../Login/Login.jsx';
import Footer from '../Footer/Footer.jsx';
import { getLatestNotification } from '../utils/utils';

function App() {
  const notifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
  ]
  return (
    <div className="App">
      <div className='root-notifications'>
        <Notifications notifications={notifications} />
      </div>
      <Header />
      <div className="App-body">
        <Login />
      </div>
      <Footer />
    </div>
  )
};

export default App;
