"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Award, Target } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

const semesterData = [
  { semester: "Sem 1", cgpa: 3.2, subjects: 6 },
  { semester: "Sem 2", cgpa: 3.4, subjects: 6 },
  { semester: "Sem 3", cgpa: 3.6, subjects: 7 },
  { semester: "Sem 4", cgpa: 3.7, subjects: 7 },
  { semester: "Sem 5", cgpa: 3.8, subjects: 6 },
  { semester: "Sem 6", cgpa: 3.9, subjects: 6 },
  { semester: "Sem 7", cgpa: 3.85, subjects: 6 },
]

const subjectBreakdown = [
  { subject: "Data Structures", current: 85, previous: 78 },
  { subject: "Machine Learning", current: 82, previous: 85 },
  { subject: "Web Development", current: 92, previous: 88 },
  { subject: "Database Systems", current: 76, previous: 72 },
  { subject: "Software Engineering", current: 88, previous: 84 },
  { subject: "Computer Networks", current: 90, previous: 87 },
]

export function PerformanceSection() {
  const currentCGPA = 3.85
  const previousCGPA = 3.9
  const cgpaChange = currentCGPA - previousCGPA

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Academic Performance
          </h1>
          <p className="text-muted-foreground">Track your academic progress and achievements</p>
        </div>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-2 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Current CGPA</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold">{currentCGPA}</p>
                  <div className="flex items-center gap-1">
                    {cgpaChange >= 0 ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                    <span className={`text-xs ${cgpaChange >= 0 ? "text-green-500" : "text-red-500"}`}>
                      {Math.abs(cgpaChange).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-secondary/10">
                <Target className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Class Rank</p>
                <p className="text-2xl font-bold">12/150</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Credits Earned</p>
                <p className="text-2xl font-bold">142/160</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-chart-4/10">
                <TrendingUp className="h-6 w-6 text-chart-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Improvement</p>
                <p className="text-2xl font-bold">+12%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CGPA Trend Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            CGPA Trend Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={semesterData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="semester" />
                <YAxis domain={[3.0, 4.0]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="cgpa"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 6 }}
                  activeDot={{ r: 8, stroke: "hsl(var(--primary))", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Subject Performance Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Subject Performance Comparison
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectBreakdown}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="subject" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="previous" fill="hsl(var(--muted))" name="Previous Semester" />
                <Bar dataKey="current" fill="hsl(var(--primary))" name="Current Semester" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Subject Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Subject-wise Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subjectBreakdown.map((subject, index) => {
              const improvement = subject.current - subject.previous
              return (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div className="flex-1">
                    <h3 className="font-semibold">{subject.subject}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="text-sm">
                        <span className="text-muted-foreground">Current: </span>
                        <span className="font-medium">{subject.current}%</span>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">Previous: </span>
                        <span className="font-medium">{subject.previous}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {improvement >= 0 ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                    <Badge variant={improvement >= 0 ? "default" : "destructive"}>
                      {improvement >= 0 ? "+" : ""}
                      {improvement}%
                    </Badge>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
