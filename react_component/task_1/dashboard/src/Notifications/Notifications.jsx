import './Notifications.css';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

const Notifications = ({notifications = [], displayDrawer = false}) => {
	const handleClick = () => {
		console.log('Close button has been clicked');
	};

  return (
	 <>
      <div className='notification-title'>
        Your notifications
      </div>
      { displayDrawer ? (
        <>
          { notifications.length === 0 ? (
            <>
              <div className='notification-items'>
                <p>No new notification for now</p>
              </div>
            </>
          ) : (
            <>
              <div className='notification-items'>
                <button
                      aria-label='Close'
                      style={{ float: 'right', background: 'transparent', border: 'none', cursor: 'pointer' }}
                      onClick={handleClick}
                    >
                      <img src={closeIcon} alt='close icon' />
               </button>
                <p>Here is the list of notifications</p>
                <ul>
                  {
                    notifications.map(notification => {
                      return <NotificationItem 
                        key={notification.id}
                        type={notification.type}
                        value={notification.value}
                        html={notification.html}
                      />
                    })
                  }
                </ul>
              </div>
            </>
          )}
        </>
      ) : (
        <></>
      )
      }
    </>
  )
}

export default Notifications;
