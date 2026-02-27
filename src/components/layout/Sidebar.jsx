import React from "react";
import {
    LayoutDashboard,
    ClipboardList,
    Calendar,
    BarChart3,
    Users,
    Settings,
    HelpCircle,
    LogOut,
    X,
} from "lucide-react";

const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, active: true },
    { name: "Tasks", icon: <ClipboardList size={20} />, badge: "12+" },
    { name: "Calendar", icon: <Calendar size={20} /> },
    { name: "Analytics", icon: <BarChart3 size={20} /> },
    { name: "Team", icon: <Users size={20} /> },
];

const Sidebar = ({ isSidebarOpen, onClose, onLogout }) => {
    return (
        <aside
            className={`
        fixed lg:sticky top-0 left-0 z-[70] h-screen w-64 bg-[#f7f7f7] border-r border-gray-100 flex flex-col transition-transform duration-300 border rounded-[20px]
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
        >
            {/* Logo */}
            <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold italic">
                        D
                    </div>
                    <span className="text-[26px] font-semibold text-gray-800">Donezo</span>
                </div>
                <button className="lg:hidden" onClick={onClose}>
                    <X size={20} />
                </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 px-4 py-4 overflow-y-auto">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 ml-2">
                    Menu
                </p>
                <div className="space-y-1">
                    {menuItems.map((item) => (
                        <button
                            key={item.name}
                            className={`w-full flex items-center justify-between p-3 rounded-xl transition-all cursor-pointer ${item.active
                                ? "bg-emerald-50 text-[#1A1D1F] border-l-8 border-emerald-800 rounded-l-lg"
                                : "text-gray-500 hover:bg-gray-50"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                {item.icon}
                                <span className="font-semibold text-sm">{item.name}</span>
                            </div>
                            {item.badge && (
                                <span className="bg-emerald-800 text-emerald-100 text-[10px] px-1 py-0.5 rounded-md">
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
                    <button className="w-full flex items-center gap-3 p-3 text-gray-500 hover:bg-gray-50 rounded-xl transition-all cursor-pointer">
                        <Settings size={20} />
                        <span className="font-semibold text-sm">Settings</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 text-gray-500 hover:bg-gray-50 rounded-xl transition-all cursor-pointer">
                        <HelpCircle size={20} />
                        <span className="font-semibold text-sm">Help</span>
                    </button>
                    <button
                        onClick={onLogout}
                        className="w-full flex items-center gap-3 p-3 text-gray-400 hover:text-red-500 transition-all mt-4 cursor-pointer"
                    >
                        <LogOut size={20} />
                        <span className="font-semibold text-sm">Logout</span>
                    </button>
                </div>
            </nav>

            {/* Download App Banner */}
            <div className="p-4 m-4 bg-black rounded-2xl relative overflow-hidden shrink-0">
                <div className="relative z-10">
                    <p className="text-white text-xs font-bold leading-tight">
                        Download our <br /> Mobile App
                    </p>
                    <p className="text-gray-400 text-[10px] mt-1">
                        Get easy in another way
                    </p>
                    <button className="mt-4 bg-emerald-600 text-white text-[10px] font-bold px-4 py-2 rounded-lg w-full cursor-pointer hover:bg-emerald-700 transition-colors">
                        Download
                    </button>
                </div>
                <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl" />
            </div>
        </aside>
    );
};

export default Sidebar;
