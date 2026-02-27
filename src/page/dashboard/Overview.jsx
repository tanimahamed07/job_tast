import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ArrowUpRight,
  Plus,
  Pause,
  Square,
  Video,
  ShieldCheck,
  Layers,
  Cpu,
} from "lucide-react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const Overview = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [analyticsData, setAnalyticsData] = useState([]);
  const [products, setProducts] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [overviewRes, analyticsRes, productsRes, usersRes] =
          await Promise.all([
            axios.get("https://task-api-eight-flax.vercel.app/api/overview"),
            axios.get("https://task-api-eight-flax.vercel.app/api/analytics"),
            axios.get("https://task-api-eight-flax.vercel.app/api/products"),
            axios.get("https://task-api-eight-flax.vercel.app/api/users"),
          ]);

        setDashboardData(overviewRes.data);
        setProducts(productsRes.data);
        setTeamMembers(usersRes.data);

        if (analyticsRes.data && Array.isArray(analyticsRes.data)) {
          const days = ["S", "M", "T", "W", "T", "F", "S"];
          const formattedAnalytics = analyticsRes.data.map((item) => {
            const date = new Date(item.date);
            return {
              name: days[date.getDay()],
              value: item.views,
            };
          });
          setAnalyticsData(formattedAnalytics);
        }
        setLoading(false);
      } catch (error) {
        console.error("API fetching error:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getBarColor = (value) => {
    const maxVal = Math.max(...analyticsData.map((item) => item.value)) || 1;
    const ratio = value / maxVal;
    if (ratio >= 0.85) return "#14442c";
    if (ratio >= 0.65) return "#165D41";
    if (ratio >= 0.45) return "#5ebd8e";
    return "#D5EFE3";
  };

  const getProjectIcon = (category) => {
    switch (category) {
      case "subscription":
        return <ShieldCheck size={18} className="text-blue-600" />;
      case "addon":
        return <Layers size={18} className="text-orange-500" />;
      default:
        return <Cpu size={18} className="text-emerald-600" />;
    }
  };

  const stats = [
    {
      title: "Total Projects",
      value: "24",
      change: "5",
      label: "Increased from last month",
      active: true,
    },
    {
      title: "Ended Projects",
      value: "10",
      change: "6",
      label: "Increased from last month",
    },
    {
      title: "Running Projects",
      value: "12",
      change: "2",
      label: "Increased from last month",
    },
    { title: "Pending Project", value: "2", change: "0", label: "On Discuss" },
  ];

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center text-emerald-700 font-bold text-xl">
        Loading...
      </div>
    );

  return (
    <div className="space-y-4 bg-[#f7f7f7] border border-gray-100 rounded-[24px] p-6">
      {/* Header */}
      <div className="flex justify-between items-end pb-2">
        <div>
          <h1 className="text-3xl font-bold text-[#1A1D1F]">Dashboard</h1>
          <p className="text-[#9A9FA5] text-sm font-medium mt-1">
            Plan, prioritize, and accomplish your tasks with ease.
          </p>
        </div>
        <button className="bg-[#165D41] text-white px-6 py-3 rounded-xl flex items-center gap-2 text-sm font-bold shadow-sm hover:bg-[#124d35] transition-colors">
          <Plus size={18} /> Add Project
        </button>
      </div>

      {/* Row 1: Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`p-6 rounded-[32px] border transition-all ${stat.active ? "bg-[#165D41] text-white shadow-lg" : "bg-white border-gray-100 hover:shadow-md"}`}
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-[15px] font-bold">{stat.title}</span>
              <div
                className={`p-2 rounded-full border ${stat.active ? "border-white/20 bg-white/10" : "border-gray-200 bg-gray-50"}`}
              >
                <ArrowUpRight size={18} />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4">{stat.value}</h2>
            <div className="flex items-center gap-2">
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-bold ${stat.active ? "bg-white/10" : "bg-[#F4FBF7] text-[#00AC4F]"}`}
              >
                ▲ {stat.change}%
              </span>
              <p className="text-[12px] opacity-70">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>


      <div className="grid grid-cols-12 gap-4 items-stretch">
        <div className="col-span-12 lg:col-span-9 space-y-4">
          <div className="grid grid-cols-12 gap-4">
            {/* Project Analytics */}
            <div className="col-span-12 lg:col-span-8 bg-white p-7 rounded-[32px] border border-gray-100 shadow-sm">
              <h3 className="font-bold text-lg text-[#1A1D1F] mb-6">
                Project Analytics
              </h3>
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={analyticsData}>
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9A9FA5", fontSize: 12, fontWeight: 700 }}
                      dy={10}
                    />
                    <Tooltip cursor={{ fill: "transparent" }} />
                    <Bar dataKey="value" radius={[30, 30, 30, 30]} barSize={55}>
                      {analyticsData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={getBarColor(entry.value)}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Reminders */}
            <div className="col-span-12 lg:col-span-4 bg-white p-7 rounded-[32px] border border-gray-100 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-[#1A1D1F] mb-4">
                  Reminders
                </h3>
                <div className="py-1">
                  <h4 className="text-[#165D41] text-[24px] font-bold leading-tight">
                    Meeting with Arc Company
                  </h4>
                  <p className="text-[#9A9FA5] text-xs font-medium mt-3">
                    Time : 02.00 pm - 04.00 pm
                  </p>
                </div>
              </div>
              <button className="w-full bg-[#165D41] text-white py-4 rounded-full font-bold text-sm flex items-center justify-center gap-3 shadow-md mt-4">
                <Video size={18} fill="white" /> Start Meeting
              </button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-7 bg-white p-7 rounded-[32px] border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg text-[#1A1D1F]">
                  Team Collaboration
                </h3>
                <button className="text-[11px] font-bold border border-gray-200 px-3 py-1.5 rounded-xl text-gray-500 hover:bg-gray-50">
                  + Add Member
                </button>
              </div>
              <div className="space-y-5 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between"
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
                        <p className="text-[11px] text-[#9A9FA5]">
                          {member.email}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-black px-3 py-1.5 rounded-lg uppercase ${
                        member.status === "active"
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


            <div className="col-span-12 lg:col-span-5 bg-white p-7 rounded-[32px] border border-gray-100 shadow-sm flex flex-col items-center justify-center">
              <h3 className="font-bold text-lg self-start mb-4 text-[#1A1D1F]">
                Project Progress
              </h3>
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
                          transform="translate(0,0)"
                          fill="#9ca3af"
                          opacity="0.4"
                        ></rect>
                      </pattern>
                    </defs>

                    <Pie
                      data={[
                        { name: "Completed", value: 41 },
                        { name: "In Progress", value: 35 },
                        { name: "Pending", value: 24 },
                      ]}
                      innerRadius={60}
                      outerRadius={90}
                      startAngle={210}
                      endAngle={-30}
                      paddingAngle={0}
                      dataKey="value"
                      stroke="none"
                    >
                      <Cell fill="#417d5a" />
                      <Cell fill="#165D41" />
                      <Cell fill="url(#pattern-stripe)" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                <div className="absolute inset-0 flex flex-col items-center justify-center pt-2">
                  <span className="text-4xl font-black text-[#1A1D1F]">
                    41%
                  </span>
                  <p className="text-[11px] text-[#9A9FA5] font-bold mt-1">
                    Project Ended
                  </p>
                </div>
              </div>

              {/* Legends */}
              <div className="flex items-center justify-center gap-6 mt-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#417d5a]"></div>
                  <span className="text-[11px] text-[#9A9FA5] font-bold">
                    Completed
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#165D41]"></div>
                  <span className="text-[11px] text-[#9A9FA5] font-bold">
                    In Progress
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 bg-gray-200 overflow-hidden relative"
                    style={{ borderRadius: "2px" }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "repeating-linear-gradient(45deg, transparent, transparent 2px, #9ca3af 2px, #9ca3af 4px)",
                      }}
                    ></div>
                  </div>
                  <span className="text-[11px] text-[#9A9FA5] font-bold">
                    Pending
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="col-span-12 lg:col-span-3 flex flex-col gap-4">
          <div className="bg-white p-7 rounded-[32px] border border-gray-100 shadow-sm flex-1 flex flex-col min-h-0">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg text-[#1A1D1F]">Project</h3>
              <button className="text-gray-400 border border-gray-200 rounded-lg px-2 py-0.5 text-xs flex items-center gap-1 hover:bg-gray-50">
                <Plus size={12} /> New
              </button>
            </div>
            <div className="space-y-6 overflow-y-auto flex-1 max-h-[380px] pr-2 custom-scrollbar">
              {products.map((product) => (
                <div key={product.id} className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${product.category === "subscription" ? "bg-blue-50" : "bg-orange-50"}`}
                  >
                    {getProjectIcon(product.category)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-bold text-[#1A1D1F] truncate">
                      {product.name}
                    </p>
                    <p className="text-[10px] text-[#9A9FA5] mt-0.5 font-medium">
                      Due date: Nov {product.id + 20}, 2026
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="bg-[#0B2E23] p-6 rounded-[32px] text-white flex flex-col items-center justify-center h-[200px] shadow-lg relative overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400 via-transparent to-transparent"></div>
            </div>
            <p className="text-[10px] opacity-70 mb-2 font-bold uppercase tracking-widest relative z-10">
              Time Tracker
            </p>
            <h2 className="text-3xl font-bold tracking-widest mb-4 relative z-10">
              01:24:08
            </h2>
            <div className="flex justify-center gap-4 relative z-10">
              <button className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all backdrop-blur-sm">
                <Pause size={18} fill="white" />
              </button>
              <button className="p-3 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-xl transition-all">
                <Square size={18} fill="white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;