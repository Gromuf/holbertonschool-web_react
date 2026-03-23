import { createSelector } from "@reduxjs/toolkit";

export const getNotifications = (state) => state.notifications.notifications;

const getFilter = (state, filter) => filter;

export const getFilteredNotifications = createSelector(
  [getNotifications, getFilter],
  (notifications, filter) => {
    if (filter === "all" || !filter) {
      return notifications;
    }
    return notifications.filter((notification) => notification.type === filter);
  },
);
