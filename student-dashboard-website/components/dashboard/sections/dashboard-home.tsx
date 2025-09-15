"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, TrendingUp, Calendar, FileText, Award, Clock, Users, RefreshCw, Edit } from "lucide-react"

const motivationalQuotes = [
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Education is the most powerful weapon which you can use to change the world.",
  "The only way to do great work is to love what you do.",
  "Believe you can and you're halfway there.",
]

export function DashboardHome() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % motivationalQuotes.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const refreshQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % motivationalQuotes.length)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome back, John!
          </h1>
          <p className="text-muted-foreground">Here's what's happening with your studies today.</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Current Semester</p>
          <p className="text-lg font-semibold">Fall 2024</p>
        </div>
      </div>

      {/* Profile Section */}
      <Card className="border-2 border-primary/20 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Student Profile
            <Button variant="ghost" size="sm" onClick={() => setIsEditing(!isEditing)} className="ml-auto">
              <Edit className="h-4 w-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-6">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/student-avatar.png" alt="John Smith" />
              <AvatarFallback className="bg-primary text-primary-foreground text-xl">JS</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                  <p className="text-lg font-semibold">John Smith</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Roll Number</label>
                  <p className="text-lg font-semibold">CS2024001</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Program</label>
                  <p className="text-lg font-semibold">Computer Science</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Current Semester</label>
                  <p className="text-lg font-semibold">7th Semester</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Motivation Widget */}
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Daily Motivation
            <Button variant="ghost" size="sm" onClick={refreshQuote} className="ml-auto">
              <RefreshCw className="h-4 w-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <blockquote className="text-lg italic text-center py-4">"{motivationalQuotes[currentQuote]}"</blockquote>
          <div className="flex justify-center mt-2">
            {motivationalQuotes.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full mx-1 transition-colors ${
                  index === currentQuote ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Courses</p>
                <p className="text-2xl font-bold">6</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-secondary/10">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Current CGPA</p>
                <p className="text-2xl font-bold">3.85</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Attendance</p>
                <p className="text-2xl font-bold">92%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-chart-4/10">
                <FileText className="h-6 w-6 text-chart-4" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Tasks</p>
                <p className="text-2xl font-bold">4</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Upcoming */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Submitted Data Structures Assignment</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <div className="h-2 w-2 rounded-full bg-secondary"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Attended Machine Learning Lecture</p>
                <p className="text-xs text-muted-foreground">5 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <div className="h-2 w-2 rounded-full bg-accent"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Downloaded Database Notes</p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-destructive/10 border border-destructive/20">
              <div>
                <p className="text-sm font-medium">Web Development Project</p>
                <p className="text-xs text-muted-foreground">Due tomorrow</p>
              </div>
              <Badge variant="destructive">Urgent</Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
              <div>
                <p className="text-sm font-medium">Algorithm Analysis Quiz</p>
                <p className="text-xs text-muted-foreground">Due in 3 days</p>
              </div>
              <Badge className="bg-yellow-500 text-white">Soon</Badge>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div>
                <p className="text-sm font-medium">Software Engineering Report</p>
                <p className="text-xs text-muted-foreground">Due in 1 week</p>
              </div>
              <Badge variant="secondary">Upcoming</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Course Progress Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Data Structures", progress: 85, professor: "Dr. Smith", grade: "A-" },
              { name: "Machine Learning", progress: 72, professor: "Dr. Johnson", grade: "B+" },
              { name: "Web Development", progress: 90, professor: "Prof. Davis", grade: "A" },
              { name: "Database Systems", progress: 68, professor: "Dr. Wilson", grade: "B" },
              { name: "Software Engineering", progress: 78, professor: "Prof. Brown", grade: "B+" },
              { name: "Computer Networks", progress: 82, professor: "Dr. Taylor", grade: "A-" },
            ].map((course, index) => (
              <div key={index} className="p-4 rounded-lg border bg-card">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-sm">{course.name}</h3>
                  <Badge variant="outline">{course.grade}</Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-3">{course.professor}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
