import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead } = this.props;
    const itemStyle = {
      color: type === "urgent" ? "red" : "blue",
    };
    if (html) {
      return (
        <li
          data-notification-type={type}
          style={itemStyle}
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(this.props.id)}
        ></li>
      );
    }

    return (
      <li data-notification-type={type} style={itemStyle} onClick={() => markAsRead(this.props.id)}>
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
