"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, Download, Share, FileText, Calendar, TrendingUp, Award } from "lucide-react"

const reportTypes = [
  {
    id: "academic",
    title: "Academic Performance Report",
    description: "Comprehensive overview of grades, CGPA, and academic progress",
    lastGenerated: "2024-01-25",
    formats: ["PDF", "Excel"],
  },
  {
    id: "attendance",
    title: "Attendance Summary Report",
    description: "Detailed attendance records across all subjects and semesters",
    lastGenerated: "2024-01-20",
    formats: ["PDF", "Excel"],
  },
  {
    id: "fees",
    title: "Fee Payment Report",
    description: "Complete fee payment history and pending dues",
    lastGenerated: "2024-01-15",
    formats: ["PDF"],
  },
  {
    id: "transcript",
    title: "Official Transcript",
    description: "Official academic transcript with all completed courses",
    lastGenerated: "2024-01-10",
    formats: ["PDF"],
  },
]

const quickStats = [
  { label: "Current CGPA", value: "3.85", icon: Award, color: "text-primary" },
  { label: "Overall Attendance", value: "92%", icon: Calendar, color: "text-green-600" },
  { label: "Completed Credits", value: "142/160", icon: TrendingUp, color: "text-blue-600" },
  { label: "Semester Rank", value: "12/150", icon: BarChart3, color: "text-purple-600" },
]

export function ReportsSection() {
  const [selectedSemester, setSelectedSemester] = useState("current")
  const [selectedFormat, setSelectedFormat] = useState("pdf")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Reports & Analytics
          </h1>
          <p className="text-muted-foreground">Generate and download comprehensive academic reports</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-muted/50">
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Report Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Report Generation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">Semester</label>
              <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                <SelectTrigger>
                  <SelectValue placeholder="Select semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current">Current Semester (7th)</SelectItem>
                  <SelectItem value="6">6th Semester</SelectItem>
                  <SelectItem value="5">5th Semester</SelectItem>
                  <SelectItem value="4">4th Semester</SelectItem>
                  <SelectItem value="all">All Semesters</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium mb-2 block">Format</label>
              <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                <SelectTrigger>
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="excel">Excel</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Available Reports */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportTypes.map((report) => (
          <Card key={report.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{report.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{report.description}</p>
                </div>
                <FileText className="h-6 w-6 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last Generated:</span>
                  <span className="font-medium">{report.lastGenerated}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Available formats:</span>
                  {report.formats.map((format) => (
                    <Badge key={format} variant="outline">
                      {format}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button className="flex-1 gap-2">
                    <Download className="h-4 w-4" />
                    Generate Report
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Recent Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                name: "Academic Performance Report - Semester 7",
                date: "2024-01-25",
                size: "2.3 MB",
                format: "PDF",
              },
              {
                name: "Attendance Summary - January 2024",
                date: "2024-01-20",
                size: "1.8 MB",
                format: "Excel",
              },
              {
                name: "Fee Payment Report - Q1 2024",
                date: "2024-01-15",
                size: "1.2 MB",
                format: "PDF",
              },
              {
                name: "Official Transcript - Complete",
                date: "2024-01-10",
                size: "3.1 MB",
                format: "PDF",
              },
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border bg-card">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{report.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {report.date} • {report.size} • {report.format}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
