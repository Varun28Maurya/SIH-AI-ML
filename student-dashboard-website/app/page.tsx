"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { DashboardContent } from "@/components/dashboard/content"

export default function StudentDashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [activeSection, setActiveSection] = useState("dashboard")

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader sidebarCollapsed={sidebarCollapsed} setSidebarCollapsed={setSidebarCollapsed} />
      <div className="flex">
        <DashboardSidebar
          collapsed={sidebarCollapsed}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <main className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? "ml-16" : "ml-64"}`}>
          <DashboardContent activeSection={activeSection} />
        </main>
      </div>
    </div>
  )
}
