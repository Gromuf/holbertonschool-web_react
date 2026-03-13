import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const NotificationItem = ({ type = "default", value, html, markAsRead = () => {}, id = 0 }) => {
  const textColor =
    type === "urgent"
      ? "text-notification-urgent"
        : "text-notification-default";

    const itemClasses = `${textColor} p-[6px] m-0 cursor-pointer max-[912px]:text-[20px] max-[912px]:p-3 max-[912px]:border-b max-[912px]:border-black`;

    const handleClick = () => {
      if (typeof markAsRead === "function") {
        markAsRead(id);
      }
    };

    if (html) {
      return (
        <li
          data-notification-type={type}
          className={itemClasses}
          dangerouslySetInnerHTML={html}
          onClick={handleClick}
        ></li>
      );
    }

    return (
      <li
        data-notification-type={type}
        className={itemClasses}
        onClick={handleClick}
      >
        {value}
      </li>
    );
  }

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.number,
  markAsRead: PropTypes.func,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

export default NotificationItem;
