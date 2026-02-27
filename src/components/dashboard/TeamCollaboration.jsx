import React, { useState, useEffect } from "react";
import axios from "axios";

const TeamCollaboration = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        axios
            .get("https://task-api-eight-flax.vercel.app/api/users")
            .then((res) => setTeamMembers(res.data))
            .catch((err) => console.error("Users fetch error:", err));
    }, []);

    return (
        <div className="col-span-12 lg:col-span-7 bg-white p-7 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-[20px] font-semibold text-[#1A1D1F]">
                    Team Collaboration
                </h3>
                <button className="text-[#165D41] font-semibold border border-[#165D41] rounded-full px-3 py-1.5 text-[13px] hover:scale-105 active:scale-95 transition-transform duration-150 cursor-pointer">
                    + Add Member
                </button>
            </div>
            <div className="space-y-5 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                {teamMembers.map((member) => (
                    <div
                        key={member.id}
                        className="flex items-center justify-between cursor-default"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
                                className="w-10 h-10 rounded-full bg-gray-100"
                                alt={member.name}
                            />
                            <div>
                                <p className="text-sm font-bold text-[#1A1D1F]">
                                    {member.name}
                                </p>
                                <p className="text-[11px] text-[#9A9FA5]">{member.email}</p>
                            </div>
                        </div>
                        <span
                            className={`text-[10px] font-black px-3 py-1.5 rounded-lg uppercase ${member.status === "active"
                                    ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                                    : "bg-gray-100 text-gray-500 border border-gray-200"
                                }`}
                        >
                            {member.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamCollaboration;
