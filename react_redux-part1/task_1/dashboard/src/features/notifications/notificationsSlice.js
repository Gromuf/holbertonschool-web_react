import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getLatestNotification } from "../../utils/utils";

const initialState = {
  notifications: [],
  displayDrawer: true,
};

const API_BASE_URL = "http://localhost:5173";

const ENDPOINTS = {
  notifications: `${API_BASE_URL}/notifications.json`,
};

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async () => {
    const response = await axios.get(ENDPOINTS.notifications);
    const data = response.data;
    const updatedNotifications = data.map((notification) => {
      if (notification.id === 3) {
        return {
          ...notification,
          value: getLatestNotification(),
        };
      }
      return notification;
    });
    return updatedNotifications;
  },
);

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    markNotificationAsRead: (state, action) => {
      const notificationId = action.payload;
      console.log(`Log to console the removed notification id ${notificationId}`);
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== notificationId,
      );
    },
    showDrawer: (state) => {
      state.displayDrawer = true;
    },
    hideDrawer: (state) => {
      state.displayDrawer = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.notifications = action.payload;
    });
  },
});

export const { markNotificationAsRead, showDrawer, hideDrawer } =
  notificationsSlice.actions;

export default notificationsSlice.reducer;
