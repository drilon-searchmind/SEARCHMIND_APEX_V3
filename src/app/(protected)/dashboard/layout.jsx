"use client"

import React from "react";
import LayoutSidebar from "@/components/layouts/LayoutSidebar";
import LayoutTopbar from "@/components/layouts/LayoutTopbar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex h-screen">
            <LayoutSidebar />
            <div className="flex-1 flex flex-col">
                <LayoutTopbar />
                <main className="flex-1 overflow-y-auto md:py-10 md:px-20 bg-zinc-50 py-10 px-4">{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;