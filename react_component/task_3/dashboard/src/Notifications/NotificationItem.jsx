import React, { Component } from "react";
class NotificationItem extends Component {
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
export default NotificationItem;
