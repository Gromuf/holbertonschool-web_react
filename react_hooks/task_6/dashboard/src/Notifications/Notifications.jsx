import React from "react";
import closeIcon from "../assets/close-button.png";
import NotificationItem from "./NotificationItem";

const Notifications = ({ displayDrawer = true, notifications = [], handleDisplayDrawer = () => {}, handleHideDrawer = () => {}, markNotificationAsRead = () => {} }) => {
  const bounceClass = notifications.length > 0 && !displayDrawer ? "animate-bounce" : "";
  return (
    <div className="flex flex-col items-end p-2 relative md:absolute md:right-0 md:top-0 z-50 max-[912px]:w-full max-[912px]:p-0">
        <div
          className={`notification-title font-bold mb-2 cursor-pointer max-[912px]:w-full max-[912px]:bg-white max-[912px]:text-right max-[912px]:pr-8 max-[912px]:m-0 max-[912px]:p-4 ${bounceClass}`}
          onClick={handleDisplayDrawer}
        >
          Your notifications
        </div>
        {displayDrawer && (
          <div
            className="notification-items border-2 border-dashed border-main w-[25vw] p-2 relative bg-white 
                        max-[912px]:fixed max-[912px]:inset-0 max-[912px]:w-full max-[912px]:h-full max-[912px]:border-none max-[912px]:text-[20px] max-[912px]:p-0"
          >
            {notifications.length === 0 ? (
              <p className="m-0 p-3">No new notification for now</p>
            ) : (
              <div className="flex flex-col">
                <button
                  aria-label="Close"
                  className="absolute right-4 top-4 bg-transparent border-none cursor-pointer outline-none z-10"
                  onClick={handleHideDrawer}
                >
                  <img src={closeIcon} alt="close icon" className="w-4 h-4" />
                </button>
                <p className="m-0 p-3 max-[912px]:mt-10">
                  Here is the list of notifications
                </p>
                <ul className="list-disc pl-8 m-0 p-0 max-[912px]:list-none max-[912px]:p-0 max-[912px]:[&>li]:border-b max-[912px]:[&>li]:border-black max-[912px]:[&>li]:p-3">
                  {notifications.map((n) => (
                    <NotificationItem
                      key={n.id}
                      id={n.id}
                      type={n.type}
                      value={n.value}
                      html={n.html}
                      markAsRead={markNotificationAsRead}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

export default React.memo(Notifications);
