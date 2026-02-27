import React, { useState, useEffect } from "react";
import axios from "axios";
import { ArrowUpRight } from "lucide-react";

const StatsCard = () => {
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    axios
      .get("https://task-api-eight-flax.vercel.app/api/overview")
      .then((res) => setDashboardData(res.data))
      .catch((err) => console.error("Overview fetch error:", err));
  }, []);

  const stats = [
    {
      title: "Total Users",
      value: dashboardData?.totalUsers?.toLocaleString() || "12,458",
      change: "5",
      label: "Total registered users",
      active: true,
    },
    {
      title: "Active Users",
      value: dashboardData?.activeUsers?.toLocaleString() || "8,234",
      change: "6",
      label: "Currently online",
    },
    {
      title: "Revenue",
      value: dashboardData
        ? `$${dashboardData.revenue.toLocaleString()}`
        : "$245,890",
      change: "23.5",
      label: "Monthly Growth",
    },
    {
      title: "Pending Project",
      value: "2",
      change: "0",
      label: "On Discuss",
    },
  ];

  return (
    <>
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`p-6 rounded-2xl border ${stat.active
              ? "bg-[#165D41] text-white shadow-lg border-[#165D41]"
              : "bg-white border-gray-100"
            } cursor-default`}
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-[20px] font-semibold">{stat.title}</span>
            <div
              className={`p-2 rounded-full border ${stat.active
                  ? "border-white/20 bg-white/10"
                  : "border-black bg-gray-50"
                }`}
            >
              <ArrowUpRight size={18} />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            {stat.value}
          </h2>
          <div className="flex items-center gap-2">
            <span
              className={`px-2 py-0.5 rounded text-[10px] font-bold ${stat.active
                  ? "bg-white/10"
                  : "bg-[#F4FBF7] text-[#00AC4F]"
                }`}
            >
              ▲ {stat.change}%
            </span>
            <p className="text-[12px] opacity-70">{stat.label}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default StatsCard;
