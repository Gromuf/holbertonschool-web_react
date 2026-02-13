const NotificationItem = ({ type, value, html }) => {
	const style = {
		color: type === 'urgent' ? 'red' : 'blue',
	};

  if (html) {
    return (
      <li
        data-notification-type={type}
        style={style}
        dangerouslySetInnerHTML={html}
      ></li>
    );
  }

  return (
    <li data-notification-type={type} style={style}>
      {value}
    </li>
  );
};

export default NotificationItem;
