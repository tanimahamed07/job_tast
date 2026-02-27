import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import Sidebar from "../components/layout/Sidebar";
import TopHeader from "../components/layout/TopHeader";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-white font-sans">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-[60] lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onLogout={handleLogout}
      />

      {/* Main Area */}
      <div className="flex-1 flex flex-col px-4 min-w-0">
        <TopHeader
          user={user}
          onMenuOpen={() => setIsSidebarOpen(true)}
        />

        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;