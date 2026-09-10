import { Outlet } from "react-router-dom";

import { Navbar } from "../navigation/Navbar";

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};
