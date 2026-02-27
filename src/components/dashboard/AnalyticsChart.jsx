import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    BarChart,
    Bar,
    ResponsiveContainer,
    XAxis,
    Cell,
    Tooltip,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-[#1A1D1F] text-white p-4 rounded-xl shadow-2xl border border-white/10 backdrop-blur-md z-50">
                <p className="text-[12px] font-bold text-emerald-400 mb-3 uppercase tracking-wider">
                    Date: {data.fullDate}
                </p>
                <div className="space-y-2 min-w-[140px]">
                    <div className="flex justify-between items-center gap-4">
                        <span className="text-[11px] opacity-60">Views</span>
                        <span className="text-[13px] font-bold">
                            {data.value.toLocaleString()}
                        </span>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <span className="text-[11px] opacity-60">Clicks</span>
                        <span className="text-[13px] font-bold text-blue-400">
                            {data.clicks}
                        </span>
                    </div>
                    <div className="flex justify-between items-center gap-4 border-t border-white/5 pt-2">
                        <span className="text-[11px] opacity-60">Conversions</span>
                        <span className="text-[13px] font-bold text-orange-400">
                            {data.conversions}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
    return null;
};

const getBarColor = (value, analyticsData) => {
    const maxVal = Math.max(...analyticsData.map((item) => item.value)) || 1;
    const ratio = value / maxVal;
    if (ratio >= 0.85) return "#14442c";
    if (ratio >= 0.65) return "#165D41";
    if (ratio >= 0.45) return "#5ebd8e";
    return "#D5EFE3";
};

const AnalyticsChart = () => {
    const [analyticsData, setAnalyticsData] = useState([]);

    useEffect(() => {
        axios
            .get("https://task-api-eight-flax.vercel.app/api/analytics")
            .then((res) => {
                if (Array.isArray(res.data)) {
                    const days = ["S", "M", "T", "W", "T", "F", "S"];
                    const formatted = res.data.map((item) => {
                        const date = new Date(item.date);
                        return {
                            name: days[date.getDay()],
                            value: item.views,
                            clicks: item.clicks || 0,
                            conversions: item.conversions || 0,
                            fullDate: item.date,
                        };
                    });
                    setAnalyticsData(formatted);
                }
            })
            .catch((err) => console.error("Analytics fetch error:", err));
    }, []);

    return (
        <div className="col-span-12 lg:col-span-8 bg-white p-7 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-[20px] font-semibold text-[#1A1D1F] mb-6">
                Project Analytics
            </h3>
            <div className="h-48 w-full cursor-crosshair">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={analyticsData}>
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#9A9FA5", fontSize: 12, fontWeight: 700 }}
                            dy={10}
                        />
                        <Tooltip
                            content={<CustomTooltip />}
                            cursor={{ fill: "#F0F5F3", radius: 20 }}
                        />
                        <Bar dataKey="value" radius={[30, 30, 30, 30]} barSize={55}>
                            {analyticsData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={getBarColor(entry.value, analyticsData)}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AnalyticsChart;
