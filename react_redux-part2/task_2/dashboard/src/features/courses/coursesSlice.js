import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { logout } from "../auth/authSlice";

const initialState = {
  courses: [],
};

const API_BASE_URL = "http://localhost:5173";

const ENDPOINTS = {
  courses: `${API_BASE_URL}/courses.json`,
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await axios.get(ENDPOINTS.courses);
    return response.data;
  },
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    selectCourse: (state, action) => {
      const courseId = action.payload;
      const course = state.courses.find((course) => course.id === courseId);
      if (course) {
        course.isSelected = true;
      }
    },
    unselectCourse: (state, action) => {
      const courseId = action.payload;
      const course = state.courses.find((course) => course.id === courseId);
      if (course) {
        course.isSelected = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload.map((course) => ({
          ...course,
          isSelected: false,
        }));
      })
      .addCase(logout, (state) => {
        state.courses = [];
      });
  },
});

export const { selectCourse, unselectCourse } = coursesSlice.actions;

export default coursesSlice.reducer;
