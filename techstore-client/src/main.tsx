import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { QueryProvider } from "./app/providers/QueryProvider";
import { router } from "./app/router/router";
import { AuthProvider } from "./app/providers/AuthProvider";

import "./index.css";
import "@/lib/axios-interceptor";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryProvider>
  </React.StrictMode>,
);
