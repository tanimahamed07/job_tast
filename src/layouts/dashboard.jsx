import React from "react";
import { Outlet, Link } from "react-router";
import {
  LayoutDashboard,
  ClipboardList,
  Calendar,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  Search,
  Bell,
  Mail,
} from "lucide-react";

const Dashboard = () => {
  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, active: true },
    { name: "Tasks", icon: <ClipboardList size={20} />, badge: "12+" },
    { name: "Calendar", icon: <Calendar size={20} /> },
    { name: "Analytics", icon: <BarChart3 size={20} /> },
    { name: "Team", icon: <Users size={20} /> },
  ];

  return (
    <div className="flex min-h-screen bg-white font-sans">
      <aside className="w-64 bg-[#f7f7f7] border-r border-gray-100 flex flex-col sticky top-0 h-screen border rounded-[20px]">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold italic">
            D
          </div>
          <span className="text-xl font-bold text-gray-800">Donezo</span>
        </div>

        <nav className="flex-1 px-4 py-4 ">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 ml-2">
            Menu
          </p>
          <div className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.name}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all ${item.active ? "bg-emerald-50 text-emerald-600 border-l-4 border-emerald-500 rounded-l-none" : "text-gray-500 hover:bg-gray-50"}`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="font-semibold text-sm">{item.name}</span>
                </div>
                {item.badge && (
                  <span className="bg-emerald-100 text-emerald-600 text-[10px] px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-8 mb-4 ml-2">
            General
          </p>
          <div className="space-y-1">
            <button className="w-full flex items-center gap-3 p-3 text-gray-500 hover:bg-gray-50 rounded-xl transition-all">
              <Settings size={20} />
              <span className="font-semibold text-sm">Settings</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 text-gray-500 hover:bg-gray-50 rounded-xl transition-all">
              <HelpCircle size={20} />
              <span className="font-semibold text-sm">Help</span>
            </button>
            <button className="w-full flex items-center gap-3 p-3 text-gray-400 hover:text-red-500 transition-all mt-4">
              <LogOut size={20} />
              <span className="font-semibold text-sm">Logout</span>
            </button>
          </div>
        </nav>

        {/* Sidebar Promo Card */}
        <div className="p-4 m-4 bg-black rounded-2xl relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-white text-xs font-bold leading-tight">
              Download our <br /> Mobile App
            </p>
            <p className="text-gray-400 text-[10px] mt-1">
              Get easy in another way
            </p>
            <button className="mt-4 bg-emerald-600 text-white text-[10px] font-bold px-4 py-2 rounded-lg w-full">
              Download
            </button>
          </div>
          <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl"></div>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col px-4">
        {/* Header Container */}
        <header className="flex items-center justify-between px-6 py-4 bg-[#f7f7f7] rounded-[24px] mb-6 shadow-sm border border-gray-50">
          {/* Search Bar Group */}
          <div className="relative flex items-center w-full max-w-[420px]">
            <div className="absolute left-4 text-black">
              <Search size={22} />
            </div>
            <input
              type="text"
              placeholder="Search task"
              className="w-full bg-[#fefefe] border-none rounded-full py-2.5 pl-11 pr-12 text-sm placeholder:text-gray-400 focus:ring-1 focus:ring-emerald-100 outline-none transition-all"
            />
            <div className="absolute right-4 flex items-center gap-0.5 px-1.5 py-0.5 border border-gray-200 rounded-md bg-white text-[10px] text-gray-400 font-medium">
              <span className="text-[12px]">⌘</span>
              <span>F</span>
            </div>
          </div>

          {/* Actions & Profile Group */}
          <div className="flex items-center gap-5">
            {/* Notification Icons */}
            <div className="flex items-center gap-3 mr-2">
              <button className="p-2.5 bg-white border border-gray-100 rounded-full text-gray-500 hover:bg-gray-50 transition-colors shadow-sm">
                <Mail size={20} />
              </button>
              <button className="p-2.5 bg-white border border-gray-100 rounded-full text-gray-500 hover:bg-gray-
              
              
              
              transition-colors shadow-sm relative">
                <Bell size={20} />
                {/* Notification Dot */}
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
              </button>
            </div>

            {/* User Profile - Text on left, Avatar on right */}
            <div className="flex items-center gap-3 border-l border-gray-100 pl-6">
              <div className="flex flex-col items-end">
                <span className="text-sm font-bold text-[#1A1D1F] leading-none">
                  Totok Michael
                </span>
                <span className="text-[11px] text-[#9A9FA5] font-medium mt-1">
                  tmichael20@mail.com
                </span>
              </div>
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-sm bg-orange-100">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
                  alt="User Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Content Outlet */}
        <main className="">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
