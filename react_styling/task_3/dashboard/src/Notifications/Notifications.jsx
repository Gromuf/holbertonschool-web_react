import React, { Component } from "react";
import closeIcon from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.notifications.length !== this.props.notifications.length;
  }

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
      <div className="flex flex-col items-end p-2 absolute right-0 top-0">
        
        <div className="notification-title font-bold mb-2">Your notifications</div>

        {displayDrawer && (
          <div className="notification-items border-2 border-dashed border-main w-[25vw] p-2 relative bg-white">
            
            {notifications.length === 0 ? (
              <p className="m-0 p-1.5">No new notification for now</p>
            ) : (
              <>
                {/* Le bouton est déplacé ici : il n'apparaît que si notifications.length > 0 */}
                <button
                  aria-label="Close"
                  className="absolute right-2 top-2 bg-transparent border-none cursor-pointer outline-none"
                  onClick={() => console.log("Close button has been clicked")}
                >
                  <img src={closeIcon} alt="close icon" className="w-3 h-3" />
                </button>

                <p className="m-0 p-1.5">Here is the list of notifications</p>
                <ul className="list-disc pl-8 m-0 p-0">
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
