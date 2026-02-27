import React from "react";
import { Plus } from "lucide-react";

const DashboardHeader = () => {
  return (
    // 'flex-col' mobile er jonno ebong 'md:flex-row' boro screen er jonno
    <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 pb-6">
      <div className="max-w-[280px] md:max-w-none">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#1A1D1F]">Dashboard</h1>
        <p className="text-[#9A9FA5] text-sm md:text-[16px] font-medium mt-1">
          Plan, prioritize, and accomplish your tasks with ease.
        </p>
      </div>

      {/* Mobile-e button gulo pasapasi thakar jonno 'flex-row' ebong justify-start */}
      <div className="flex flex-row items-center gap-3">
        <button className="bg-[#165D41] text-white px-5 md:px-7 py-3 md:py-4 rounded-full flex items-center gap-2 text-xs md:text-sm font-bold shadow-sm hover:scale-105 active:scale-95 transition-transform duration-150 cursor-pointer whitespace-nowrap">
          <Plus size={18} /> Add Project
        </button>
        <button className="bg-white text-[#1A1D1F] border border-[#165D41] px-5 md:px-7 py-3 md:py-4 rounded-full text-xs md:text-sm font-bold shadow-sm hover:scale-105 active:scale-95 transition-transform duration-150 cursor-pointer whitespace-nowrap">
          Import Data
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;