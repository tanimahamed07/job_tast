import React from "react";
import { Video } from "lucide-react";

const ReminderCard = () => {
    return (
        <div className="col-span-12 lg:col-span-4 bg-white p-7 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div>
                <h3 className="text-[20px] font-semibold text-[#1A1D1F] mb-4">
                    Reminders
                </h3>
                <div className="py-1">
                    <h4 className="text-[#165D41] text-[24px] font-bold leading-tight">
                        Meeting with Arc Company
                    </h4>
                    <p className="text-[#9A9FA5] text-[15px] font-medium mt-3">
                        Time : 02.00 pm - 04.00 pm
                    </p>
                </div>
            </div>
            <button className="w-full bg-[#165D41] text-white py-4 rounded-full font-bold text-sm flex items-center justify-center gap-3 shadow-md hover:scale-105 active:scale-95 transition-transform duration-150 cursor-pointer">
                <Video size={18} fill="white" /> Start Meeting
            </button>
        </div>
    );
};

export default ReminderCard;
