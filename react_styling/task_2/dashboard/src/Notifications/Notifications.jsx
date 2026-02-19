import React, { Component } from "react";
import closeIcon from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.notifications.length !== this.props.notifications.length;
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
      <div className="flex flex-col items-end absolute right-0 top-0 p-4">
        {/* Titre positionné à droite et au-dessus du panneau */}
        <div className="notification-title mb-2">Your notifications</div>

        {displayDrawer && (
          /* w-1/4 = 25% de largeur, border-dashed avec la couleur --main-color */
          <div className="notification-items border-2 border-dashed border-main w-[25vw] p-2 relative">
            <button
              aria-label="Close"
              style={{
                position: "absolute",
                right: "10px",
                top: "10px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => console.log("Close button has been clicked")}
            >
              <img src={closeIcon} alt="close icon" width="10px" />
            </button>

            {notifications.length === 0 ? (
              <p>No new notification for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <ul className="list-none p-0">
                  {notifications.map((n) => (
                    <NotificationItem
                      key={n.id}
                      id={n.id}
                      type={n.type}
                      value={n.value}
                      html={n.html}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Notifications;
