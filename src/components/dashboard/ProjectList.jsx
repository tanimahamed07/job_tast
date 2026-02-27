import React, { useState, useEffect } from "react";
import axios from "axios";
import { Plus, ShieldCheck, Layers, Cpu } from "lucide-react";

const getProjectIcon = (category) => {
    if (category === "subscription")
        return <ShieldCheck size={18} className="text-blue-600" />;
    if (category === "addon")
        return <Layers size={18} className="text-orange-500" />;
    return <Cpu size={18} className="text-emerald-600" />;
};

const ProjectList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("https://task-api-eight-flax.vercel.app/api/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.error("Products fetch error:", err));
    }, []);

    return (
        <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm flex-1 flex flex-col min-h-0">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-[20px] font-semibold text-[#1A1D1F]">Project</h3>
                <button className="text-[#165D41] font-semibold border border-[#165D41] rounded-full px-3 py-1 text-[13px] hover:scale-105 active:scale-95 transition-transform duration-150 cursor-pointer flex items-center gap-1">
                    <Plus size={12} /> New
                </button>
            </div>
            <div className="space-y-8 overflow-y-auto flex-1 pr-2 custom-scrollbar">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex items-center gap-4 cursor-pointer hover:scale-[1.01] active:scale-100 transition-transform duration-150"
                    >
                        <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${product.category === "subscription"
                                ? "bg-blue-50"
                                : "bg-orange-50"
                                }`}
                        >
                            {getProjectIcon(product.category)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center">
                                <p className="text-[14px] font-bold text-[#1A1D1F] truncate">
                                    {product.name}
                                </p>
                                <span className="text-[12px] font-bold text-[#165D41]">
                                    ${product.price}
                                </span>
                            </div>
                            <div className="flex items-center justify-between mt-1">
                                <p className="text-[11px] text-[#9A9FA5] font-medium capitalize">
                                    {product.category}
                                </p>
                                <p className="text-[11px] text-gray-400 font-semibold">
                                    {product.sales} Sales
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
