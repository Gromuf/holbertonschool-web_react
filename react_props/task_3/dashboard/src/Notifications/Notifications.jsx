import './Notifications.css';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

const Notifications = ({notifications}) => {
	const handleClick = () => {
		console.log('Close button has been clicked');
	};

  return (
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
		{notifications && notifications.length > 0 ? (
		  notifications.map((notification) => (
			<NotificationItem
			  key={notification.id}
			  type={notification.type}
			  value={notification.value}
			  html={notification.html}
			/>
		  ))
		) : (
			<li>No new notification for now</li>
		)}
	  </ul>
	</div>
  );
}

export default Notifications;
