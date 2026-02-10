import './Notifications.css';
import closeIcon from './assets/close-button.png';
import { getLatestNotification } from './utils';

const Notifications = () => {
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
		<li data-priority='default'>New course available</li>
		<li data-priority='urgent'>New resume available</li>
		<li
			data-priority='urgent'
			dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
		></li>
	  </ul>
	</div>
  );
}

export default Notifications;
