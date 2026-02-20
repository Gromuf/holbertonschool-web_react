import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class NotificationItem extends PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    const textColor =
      type === "urgent"
        ? "text-notification-urgent"
        : "text-notification-default";

    const itemClasses = `${textColor} p-[6px] m-0 cursor-pointer max-[912px]:text-[20px] max-[912px]:p-3 max-[912px]:border-b max-[912px]:border-black`;

    if (html) {
      return (
        <li
          data-notification-type={type}
          className={itemClasses}
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(id)}
        ></li>
      );
    }

    return (
      <li
        data-notification-type={type}
        className={itemClasses}
        onClick={() => markAsRead(id)}
      >
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
