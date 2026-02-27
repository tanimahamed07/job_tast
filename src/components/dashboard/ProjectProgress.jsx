import React from "react";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";

const pieData = [
    { name: "Completed", value: 41 },
    { name: "In Progress", value: 35 },
    { name: "Pending", value: 24 },
];

const ProjectProgress = () => {
    return (
        <div className="col-span-12 lg:col-span-5 bg-white p-7 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-6 min-h-[30px]">
                <h3 className="text-[20px] font-semibold text-[#1A1D1F]">
                    Project Progress
                </h3>
            </div>
            <div className="flex flex-col items-center justify-center flex-1">
                <div className="relative w-full h-44">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <defs>
                                <pattern
                                    id="pattern-stripe"
                                    width="8"
                                    height="8"
                                    patternUnits="userSpaceOnUse"
                                    patternTransform="rotate(45)"
                                >
                                    <rect
                                        width="2"
                                        height="8"
                                        fill="#9ca3af"
                                        opacity="0.4"
                                    />
                                </pattern>
                            </defs>
                            <Pie
                                data={pieData}
                                innerRadius={60}
                                outerRadius={90}
                                startAngle={210}
                                endAngle={-30}
                                dataKey="value"
                                stroke="none"
                            >
                                <Cell fill="#417d5a" />
                                <Cell fill="#165D41" />
                                <Cell fill="url(#pattern-stripe)" />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pt-2 pointer-events-none">
                        <span className="text-4xl font-black text-[#1A1D1F]">
                            41%
                        </span>
                        <p className="text-[11px] text-[#417d5a] font-bold mt-1">
                            Project Ended
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-6 mt-2">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#417d5a]" />
                        <span className="text-[11px] text-[#417d5a] font-bold">
                            Completed
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#165D41]" />
                        <span className="text-[11px] text-[#165D41] font-bold">
                            In Progress
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div
                            className="w-3 h-3 bg-gray-200 relative overflow-hidden rounded"
                            style={{ borderRadius: "2px" }}
                        >
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "repeating-linear-gradient(45deg, transparent, transparent 2px, #9ca3af 2px, #9ca3af 4px)",
                                }}
                            />
                        </div>
                        <span className="text-[11px] text-[#9A9FA5] font-bold">
                            Pending
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectProgress;
