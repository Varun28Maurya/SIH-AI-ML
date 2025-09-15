"use client"

import {
  Home,
  BookOpen,
  TrendingUp,
  Calendar,
  FileText,
  CreditCard,
  BarChart3,
  Lightbulb,
  MessageCircle,
  Settings,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DashboardSidebarProps {
  collapsed: boolean
  activeSection: string
  setActiveSection: (section: string) => void
}

const sidebarItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "courses", label: "Courses & Subjects", icon: BookOpen },
  { id: "performance", label: "Performance", icon: TrendingUp },
  { id: "attendance", label: "Attendance", icon: Calendar },
  { id: "assignments", label: "Assignments & Notes", icon: FileText },
  { id: "fees", label: "Fees & Payments", icon: CreditCard },
  { id: "reports", label: "Reports", icon: BarChart3 },
  { id: "motivation", label: "Motivation & Tips", icon: Lightbulb },
  { id: "chatbot", label: "AI Support", icon: MessageCircle },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "help", label: "Help & Support", icon: HelpCircle },
]

export function DashboardSidebar({ collapsed, activeSection, setActiveSection }: DashboardSidebarProps) {
  return (
    <aside
      className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-sidebar border-r transition-all duration-300 z-40",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex flex-col h-full">
        <nav className="flex-1 p-2 space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <Button
                key={item.id}
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 h-11 transition-all duration-200",
                  collapsed && "justify-center px-2",
                  isActive && "bg-primary text-primary-foreground shadow-md",
                  !isActive && "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                )}
                onClick={() => setActiveSection(item.id)}
              >
                <Icon className={cn("h-5 w-5 flex-shrink-0", isActive && "animate-pulse-glow")} />
                {!collapsed && <span className="truncate font-medium">{item.label}</span>}
              </Button>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
