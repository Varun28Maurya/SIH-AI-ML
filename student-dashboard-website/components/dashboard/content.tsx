"use client"

import { DashboardHome } from "./sections/dashboard-home"
import { CoursesSection } from "./sections/courses"
import { PerformanceSection } from "./sections/performance"
import { AttendanceSection } from "./sections/attendance"
import { AssignmentsSection } from "./sections/assignments"
import { FeesSection } from "./sections/fees"
import { ReportsSection } from "./sections/reports"
import { MotivationSection } from "./sections/motivation"
import { ChatbotSection } from "./sections/chatbot"
import { SettingsSection } from "./sections/settings"
import { HelpSection } from "./sections/help"

interface DashboardContentProps {
  activeSection: string
}

export function DashboardContent({ activeSection }: DashboardContentProps) {
  const renderSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <DashboardHome />
      case "courses":
        return <CoursesSection />
      case "performance":
        return <PerformanceSection />
      case "attendance":
        return <AttendanceSection />
      case "assignments":
        return <AssignmentsSection />
      case "fees":
        return <FeesSection />
      case "reports":
        return <ReportsSection />
      case "motivation":
        return <MotivationSection />
      case "chatbot":
        return <ChatbotSection />
      case "settings":
        return <SettingsSection />
      case "help":
        return <HelpSection />
      default:
        return <DashboardHome />
    }
  }

  return <div className="p-6 animate-slide-in">{renderSection()}</div>
}
