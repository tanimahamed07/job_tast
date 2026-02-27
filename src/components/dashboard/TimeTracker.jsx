import React, { useState, useEffect } from "react";
import { Pause, Play, Square } from "lucide-react";

const TimeTracker = () => {
    const [seconds, setSeconds] = useState(5048);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);
        }
        return () => clearInterval(interval);
    }, [isActive]);

    const formatTime = (totalSeconds) => {
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;
        return `${hrs.toString().padStart(2, "0")}:${mins
            .toString()
            .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    return (
        <div className="bg-[#0B2E23] p-8 rounded-2xl text-white flex flex-col items-center justify-center shadow-lg relative overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400 via-transparent to-transparent" />
            </div>
            <p className="w-full text-left text-white text-[16px] opacity-80 mb-6 font-bold uppercase tracking-widest relative z-10">
                Time Tracker
            </p>
            <h2 className="text-4xl font-bold tracking-[0.2em] mb-8 relative z-10 tabular-nums">
                {formatTime(seconds)}
            </h2>
            <div className="flex justify-center gap-5 relative z-10">
                <button
                    onClick={() => setIsActive(!isActive)}
                    className="p-4 bg-white/10 hover:scale-110 active:scale-95 text-white rounded-full transition-transform duration-150 cursor-pointer"
                >
                    {isActive ? (
                        <Pause size={20} fill="white" />
                    ) : (
                        <Play size={20} fill="white" />
                    )}
                </button>
                <button
                    onClick={() => {
                        setIsActive(false);
                        setSeconds(0);
                    }}
                    className="p-4 bg-red-500 hover:scale-110 active:scale-95 text-white rounded-full shadow-xl transition-transform duration-150 cursor-pointer"
                >
                    <Square size={20} fill="white" />
                </button>
            </div>
        </div>
    );
};

export default TimeTracker;
