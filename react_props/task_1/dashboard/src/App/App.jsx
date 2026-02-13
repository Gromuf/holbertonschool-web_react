import './App.css';
import Notifications from '../Notifications/Notifications.jsx';
import Header from '../Header/Header.jsx';
import Login from '../Login/Login.jsx';
import Footer from '../Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <div className='root-notifications'>
        <Notifications />
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
