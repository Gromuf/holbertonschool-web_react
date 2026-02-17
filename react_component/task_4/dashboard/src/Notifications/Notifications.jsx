import "./Notifications.css";
import { Component } from "react";
import closeIcon from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";

class Notifications extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log("Close button has been clicked");
  };

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  static defaultProps = {
    displayDrawer: false,
    notifications: [],
  };

  render() {
    const { notifications, displayDrawer } = this.props;
    return (
      <>
        <div className="notification-title">Your notifications</div>
        {displayDrawer ? (
          <>
            {notifications.length === 0 ? (
              <>
                <div className="notification-items">
                  <p>No new notification for now</p>
                </div>
              </>
            ) : (
              <>
                <div className="notification-items">
                  <button
                    aria-label="Close"
                    style={{
                      float: "right",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={this.handleClick}
                  >
                    <img src={closeIcon} alt="close icon" />
                  </button>
                  <p>Here is the list of notifications</p>
                  <ul>
                    {notifications.map((notification) => {
                      return (
                        <NotificationItem
                          key={notification.id}
                          type={notification.type}
                          value={notification.value}
                          html={notification.html}
                          markAsRead={() => this.markAsRead(notification.id)}
                        />
                      );
                    })}
                  </ul>
                </div>
              </>
            )}
          </>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default Notifications;
