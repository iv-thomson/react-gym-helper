import React from "react";
import ReactDOM from "react-dom/client";
import { ExercisePage } from "./views/exercise/ExercisePage";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import { CalendarPage } from "./views/calendar/Calendarpage";

i18next.use(initReactI18next).init({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <CalendarPage />,
  },
  {
    path: "/exercise/:id",
    element: <ExercisePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
