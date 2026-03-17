import mockAxios from "jest-mock-axios";
import notificationsReducer, {
  markNotificationAsRead,
  showDrawer,
  hideDrawer,
  fetchNotifications,
} from "../notifications/notificationsSlice";

describe("notificationsSlice", () => {
  const initialState = {
    notifications: [],
    displayDrawer: true,
  };

  afterEach(() => {
    mockAxios.reset();
  });

  test("should return the initial state by default", () => {
    expect(notificationsReducer(undefined, { type: "unknown" })).toEqual(
      initialState,
    );
  });

  test("should handle fetchNotifications correctly", async () => {
    const mockData = [
      { id: 1, type: "default", value: "New course available" },
      { id: 3, type: "urgent", value: "Old notification" },
    ];
    const action = {
      type: fetchNotifications.fulfilled.type,
      payload: mockData,
    };
    const state = notificationsReducer(initialState, action);
    expect(state.notifications).toHaveLength(2);
    expect(state.notifications).toEqual(mockData);
  });

  test("should remove a notification when markNotificationAsRead is dispatched", () => {
    const currentState = {
      notifications: [
        { id: 1, value: "First" },
        { id: 2, value: "Second" },
      ],
      displayDrawer: true,
    };
    const newState = notificationsReducer(
      currentState,
      markNotificationAsRead(1),
    );
    expect(newState.notifications).toHaveLength(1);
    expect(newState.notifications[0].id).toBe(2);
  });

  test("should toggle displayDrawer state correctly", () => {
    let state = notificationsReducer(initialState, hideDrawer());
    expect(state.displayDrawer).toBe(false);
    state = notificationsReducer(state, showDrawer());
    expect(state.displayDrawer).toBe(true);
  });
});
