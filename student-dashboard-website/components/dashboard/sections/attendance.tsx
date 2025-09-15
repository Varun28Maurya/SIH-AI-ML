"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Calendar, CheckCircle, XCircle, Clock, BookOpen } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const attendanceData = [
  { name: "Present", value: 92, color: "hsl(var(--primary))" },
  { name: "Late", value: 5, color: "hsl(var(--chart-4))" },
  { name: "Absent", value: 3, color: "hsl(var(--destructive))" },
]

const subjectAttendance = [
  { subject: "Data Structures", present: 28, total: 30, percentage: 93.3, type: "Lecture" },
  { subject: "Machine Learning", present: 25, total: 28, percentage: 89.3, type: "Lecture" },
  { subject: "Web Development", present: 22, total: 24, percentage: 91.7, type: "Lab" },
  { subject: "Database Systems", present: 26, total: 30, percentage: 86.7, type: "Lecture" },
  { subject: "Software Engineering", present: 20, total: 22, percentage: 90.9, type: "Lab" },
  { subject: "Computer Networks", present: 27, total: 28, percentage: 96.4, type: "Lecture" },
]

const monthlyAttendance = [
  { month: "Jan", percentage: 95 },
  { month: "Feb", percentage: 88 },
  { month: "Mar", percentage: 92 },
  { month: "Apr", percentage: 90 },
  { month: "May", percentage: 94 },
]

const recentAttendance = [
  { date: "2024-01-29", subject: "Data Structures", status: "present", type: "Lecture" },
  { date: "2024-01-29", subject: "Machine Learning", status: "present", type: "Lecture" },
  { date: "2024-01-28", subject: "Web Development", status: "late", type: "Lab" },
  { date: "2024-01-28", subject: "Database Systems", status: "present", type: "Lecture" },
  { date: "2024-01-27", subject: "Software Engineering", status: "absent", type: "Lab" },
  { date: "2024-01-27", subject: "Computer Networks", status: "present", type: "Lecture" },
]

export function AttendanceSection() {
  const [viewMode, setViewMode] = useState<"table" | "chart">("table")

  const overallAttendance = 92
  const totalClasses = 162
  const attendedClasses = 149

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Attendance Tracking
          </h1>
          <p className="text-muted-foreground">Monitor your class attendance and maintain academic requirements</p>
        </div>
        <div className="flex gap-2">
          <Button variant={viewMode === "table" ? "default" : "outline"} onClick={() => setViewMode("table")}>
            Table View
          </Button>
          <Button variant={viewMode === "chart" ? "default" : "outline"} onClick={() => setViewMode("chart")}>
            Chart View
          </Button>
        </div>
      </div>

      {/* Attendance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-2 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Overall Attendance</p>
                <p className="text-2xl font-bold">{overallAttendance}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/20">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Classes Attended</p>
                <p className="text-2xl font-bold">{attendedClasses}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-yellow-100 dark:bg-yellow-900/20">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Late Arrivals</p>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900/20">
                <XCircle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Absences</p>
                <p className="text-2xl font-bold">{totalClasses - attendedClasses}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Attendance Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={attendanceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {attendanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              {attendanceData.map((entry, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
                  <span className="text-sm">
                    {entry.name}: {entry.value}%
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Monthly Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyAttendance}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[80, 100]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="percentage" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Subject-wise Attendance */}
      {viewMode === "table" ? (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Subject-wise Attendance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {subjectAttendance.map((subject, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold">{subject.subject}</h3>
                      <Badge variant="outline">{subject.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {subject.present}/{subject.total} classes attended
                    </p>
                    <div className="mt-2">
                      <Progress value={subject.percentage} className="h-2" />
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-2xl font-bold">{subject.percentage.toFixed(1)}%</p>
                    <Badge
                      variant={
                        subject.percentage >= 90 ? "default" : subject.percentage >= 75 ? "secondary" : "destructive"
                      }
                    >
                      {subject.percentage >= 90 ? "Excellent" : subject.percentage >= 75 ? "Good" : "Low"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Subject-wise Attendance Chart
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={subjectAttendance} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="subject" type="category" width={120} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="percentage" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Attendance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Recent Attendance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentAttendance.map((record, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border bg-card">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-full ${
                      record.status === "present"
                        ? "bg-green-100 dark:bg-green-900/20"
                        : record.status === "late"
                          ? "bg-yellow-100 dark:bg-yellow-900/20"
                          : "bg-red-100 dark:bg-red-900/20"
                    }`}
                  >
                    {record.status === "present" ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : record.status === "late" ? (
                      <Clock className="h-4 w-4 text-yellow-600" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{record.subject}</p>
                    <p className="text-sm text-muted-foreground">
                      {record.date} • {record.type}
                    </p>
                  </div>
                </div>
                <Badge
                  variant={
                    record.status === "present" ? "default" : record.status === "late" ? "secondary" : "destructive"
                  }
                >
                  {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
