import React from "react";
import { Search, Bell, Mail, Menu } from "lucide-react";

const TopHeader = ({ user, onMenuOpen }) => {
    return (
        <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-4 bg-[#f7f7f7] rounded-[24px] mb-4 shadow-sm border border-gray-50 mt-0">
            {/* Search */}
            <div className="flex items-center gap-3 flex-1 max-w-[420px]">
                <button
                    className="lg:hidden p-2 bg-white rounded-full border border-gray-100 shadow-sm shrink-0 cursor-pointer"
                    onClick={onMenuOpen}
                >
                    <Menu size={20} />
                </button>

                <div className="relative flex items-center w-full">
                    <div className="absolute left-4 text-black">
                        <Search size={22} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search task"
                        className="w-full bg-[#fefefe] border-none rounded-full py-2.5 pl-11 pr-12 text-sm placeholder:text-gray-400 focus:ring-1 focus:ring-emerald-100 outline-none transition-all"
                    />
                    <div className="absolute right-4 hidden md:flex items-center gap-0.5 px-1.5 py-0.5 border border-gray-200 rounded-md bg-white text-[10px] text-gray-400 font-medium">
                        <span className="text-[12px]">⌘</span>
                        <span>F</span>
                    </div>
                </div>
            </div>

            {/* Actions & User */}
            <div className="flex items-center gap-3 sm:gap-5 ml-4">
                <div className="flex items-center gap-2 sm:gap-3">
                    <button className="hidden sm:block p-2.5 bg-white border border-gray-100 rounded-full text-gray-500 hover:bg-gray-50 transition-colors shadow-sm cursor-pointer">
                        <Mail size={20} />
                    </button>
                    <button className="p-2.5 bg-white border border-gray-100 rounded-full text-gray-500 hover:bg-gray-50 transition-colors shadow-sm relative cursor-pointer">
                        <Bell size={20} />
                        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full" />
                    </button>
                </div>

                <div className="flex items-center gap-3 border-l border-gray-100 sm:pl-6">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-white shadow-sm bg-orange-100 shrink-0">
                        <img
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email || "default"}`}
                            alt="User Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="hidden md:flex flex-col items-start">
                        <span className="text-sm font-bold text-[#1A1D1F] leading-none capitalize">
                            {user ? user.email.split("@")[0] : "Loading..."}
                        </span>
                        <span className="text-[11px] text-[#9A9FA5] font-medium mt-1">
                            {user?.email || "tmichael20@mail.com"}
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopHeader;
