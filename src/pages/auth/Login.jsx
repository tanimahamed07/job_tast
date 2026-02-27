import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { HiOutlineMail, HiOutlineLockClosed, HiEye, HiEyeOff, HiArrowRight } from 'react-icons/hi';

const Login = () => {
    const [email, setEmail] = useState('user1@example.com');
    const [password, setPassword] = useState('password123');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('https://task-api-eight-flax.vercel.app/api/login', {
                email,
                password
            });

            if (response.data.token) {
                console.log(response)
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data));
                navigate('/dashboard');
            }
        } catch (err) {
            setError('Invalid email or password! Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden font-sans selection:bg-emerald-100">

            {/* --- Main Login Card --- */}
            <div className="w-full max-w-[460px] mx-4 bg-white/90 backdrop-blur-2xl rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] p-8 md:p-12 border border-white relative z-10 transition-all duration-500">

                {/* Header Section */}
                <div className="flex flex-col items-center mb-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-[22px] flex items-center justify-center shadow-2xl shadow-emerald-200/50 mb-6 transform hover:rotate-6 transition-transform cursor-pointer">
                        <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Login</h1>
                    <p className="text-slate-500 mt-2 font-medium text-center">Enter your details to access your dashboard</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    {/* Email Input */}
                    <div className="space-y-1.5">
                        <label className="text-[13px] font-bold text-slate-700 ml-1 uppercase tracking-wider">Email Address</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                                <HiOutlineMail size={22} />
                            </div>
                            <input
                                type="email"
                                className="w-full pl-12 pr-4 py-4 bg-slate-50/50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 focus:bg-white outline-none transition-all duration-300 text-slate-800 font-medium placeholder:text-slate-300 shadow-sm"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center px-1">
                            <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wider">Password</label>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                                <HiOutlineLockClosed size={22} />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full pl-12 pr-12 py-4 bg-slate-50/50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 focus:bg-white outline-none transition-all duration-300 text-slate-800 font-medium placeholder:text-slate-300 shadow-sm"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-300 hover:text-emerald-500 transition-colors"
                            >
                                {showPassword ? <HiEyeOff size={22} /> : <HiEye size={22} />}
                            </button>
                        </div>
                        <div className="text-right">
                            <button type="button" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors">Forgot password?</button>
                        </div>
                    </div>

                    {/* Error Feedback */}
                    {error && (
                        <div className="flex items-center gap-3 bg-red-50 text-red-600 text-[13px] font-bold p-4 rounded-2xl border border-red-100 animate-in fade-in slide-in-from-top-1">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                            {error}
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4.5 rounded-2xl transition-all duration-300 shadow-xl shadow-slate-200 active:scale-[0.97] disabled:opacity-70 flex items-center justify-center group h-[60px]"
                    >
                        {loading ? (
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                <span className="tracking-wide">Authenticating...</span>
                            </div>
                        ) : (
                            <div className="flex items-center text-[16px]">
                                <span>Sign In to Dashboard</span>
                                <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                            </div>
                        )}
                    </button>
                </form>

                {/* Footer Section */}
                <div className="mt-10 text-center">
                    <p className="text-slate-400 text-sm font-semibold">
                        Don't have an account?
                        <button className="text-emerald-600 font-bold ml-1.5 hover:text-emerald-700 transition-all border-b-2 border-transparent hover:border-emerald-600 pb-0.5">
                            Create Free Account
                        </button>
                    </p>
                </div>
            </div>

            {/* --- Subtle Bottom Text --- */}
            <div className="fixed bottom-6 text-slate-300 text-[12px] font-medium tracking-widest uppercase z-10">
                Secure Cloud Infrastructure • 256-bit AES
            </div>
        </div>
    );
};

export default Login;