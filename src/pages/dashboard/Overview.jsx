import React from "react";
import StatsCard from "../../components/dashboard/StatsCard";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import AnalyticsChart from "../../components/dashboard/AnalyticsChart";
import ReminderCard from "../../components/dashboard/ReminderCard";
import TeamCollaboration from "../../components/dashboard/TeamCollaboration";
import ProjectProgress from "../../components/dashboard/ProjectProgress";
import ProjectList from "../../components/dashboard/ProjectList";
import TimeTracker from "../../components/dashboard/TimeTracker";

const Overview = () => {
  return (
    <div className="space-y-4 bg-[#f7f7f7] border border-gray-100 rounded-2xl p-6">
      {/* Header */}
      <DashboardHeader />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatsCard />
      </div>

      <div className="grid grid-cols-12 gap-4 items-stretch">
        {/* Left & Center Content */}
        <div className="col-span-12 lg:col-span-9 space-y-4">
          {/* Analytics + Reminder row */}
          <div className="grid grid-cols-12 gap-4">
            <AnalyticsChart />
            <ReminderCard />
          </div>

          {/* Team + Progress row */}
          <div className="grid grid-cols-12 gap-4">
            <TeamCollaboration />
            <ProjectProgress />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-4">
          <ProjectList />
          <TimeTracker />
        </div>
      </div>
    </div>
  );
};

export default Overview;
