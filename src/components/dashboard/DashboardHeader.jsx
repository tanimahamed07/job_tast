import React from "react";
import { Plus } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-end pb-2">
      <div>
        <h1 className="text-4xl font-semibold text-[#1A1D1F]">Dashboard</h1>
        <p className="text-[#9A9FA5] text-[16px] font-medium mt-1">
          Plan, prioritize, and accomplish your tasks with ease.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button className="bg-[#165D41] text-white px-7 py-4 rounded-full flex items-center gap-2 text-sm font-bold shadow-sm hover:scale-105 active:scale-95 transition-transform duration-150 cursor-pointer">
          <Plus size={18} /> Add Project
        </button>
        <button className="bg-white text-[#1A1D1F] border border-[#165D41] px-7 py-4 rounded-full text-sm font-bold shadow-sm hover:scale-105 active:scale-95 transition-transform duration-150 cursor-pointer">
          Import Data
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
