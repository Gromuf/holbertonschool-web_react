import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead } = this.props;
    const textColor = type === "urgent"
      ? "text-notification-urgent"
      : "text-notification-default";

    const itemClasses = `${textColor} p-1.5`;

    if (html) {
      return (
        <li
          data-notification-type={type}
          className={itemClasses}
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(this.props.id)}
        ></li>
      );
    }

    return (
      <li data-notification-type={type} className={itemClasses} onClick={() => markAsRead(this.props.id)}>
        {value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  id: PropTypes.number,
  markAsRead: PropTypes.func,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {},
  id: 0,
};

export default NotificationItem;
