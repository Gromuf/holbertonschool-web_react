import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getLatestNotification } from "../../utils/utils";

const initialState = {
  notifications: [],
  loading: false,
};

const API_BASE_URL = "http://localhost:5173";

const ENDPOINTS = {
  notifications: `${API_BASE_URL}/notifications.json`,
};

export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async () => {
    const response = await axios.get(ENDPOINTS.notifications);
    const data = response.data.notifications;
    const updatedNotifications = data
      .filter((notification) => notification.context.isRead === false)
      .map((notification) => ({
        id: notification.id,
        type: notification.context.type,
        isRead: notification.context.isRead,
        value: notification.context.value,
        ...(notification.id === 3 && {
          html: { __html: getLatestNotification() },
        }),
      }));
    return updatedNotifications;
  },
);

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    markNotificationAsRead: (state, action) => {
      const notificationId = action.payload;
      console.log(`Marking notification ${notificationId} as read`);
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== notificationId,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNotifications.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.loading = false;
      state.notifications = action.payload;
    });
  },
});

export const { markNotificationAsRead } = notificationsSlice.actions;

export default notificationsSlice.reducer;
