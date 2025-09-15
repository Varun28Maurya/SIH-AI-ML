"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { BookOpen, User, FileText, CheckCircle, Clock, Download, Search, Filter } from "lucide-react"

const coursesData = [
  {
    id: 1,
    name: "Data Structures & Algorithms",
    code: "CS301",
    professor: "Dr. Sarah Smith",
    professorImage: "/professor1.png",
    progress: 85,
    totalAssignments: 10,
    completedAssignments: 7,
    faScore: 85,
    iaScore: 78,
    grade: "A-",
    notes: [
      { name: "Linked Lists", date: "2024-01-15", size: "2.3 MB" },
      { name: "Binary Trees", date: "2024-01-20", size: "1.8 MB" },
      { name: "Graph Algorithms", date: "2024-01-25", size: "3.1 MB" },
    ],
  },
  {
    id: 2,
    name: "Machine Learning",
    code: "CS402",
    professor: "Dr. Michael Johnson",
    professorImage: "/professor2.png",
    progress: 72,
    totalAssignments: 8,
    completedAssignments: 6,
    faScore: 82,
    iaScore: 75,
    grade: "B+",
    notes: [
      { name: "Linear Regression", date: "2024-01-18", size: "2.1 MB" },
      { name: "Neural Networks", date: "2024-01-22", size: "4.2 MB" },
    ],
  },
  {
    id: 3,
    name: "Web Development",
    code: "CS350",
    professor: "Prof. Emily Davis",
    professorImage: "/professor3.png",
    progress: 90,
    totalAssignments: 12,
    completedAssignments: 11,
    faScore: 92,
    iaScore: 88,
    grade: "A",
    notes: [
      { name: "React Fundamentals", date: "2024-01-16", size: "1.9 MB" },
      { name: "Node.js Backend", date: "2024-01-21", size: "2.7 MB" },
      { name: "Database Integration", date: "2024-01-26", size: "3.4 MB" },
    ],
  },
  {
    id: 4,
    name: "Database Systems",
    code: "CS320",
    professor: "Dr. Robert Wilson",
    professorImage: "/professor4.png",
    progress: 68,
    totalAssignments: 9,
    completedAssignments: 5,
    faScore: 76,
    iaScore: 72,
    grade: "B",
    notes: [
      { name: "SQL Basics", date: "2024-01-17", size: "1.5 MB" },
      { name: "Normalization", date: "2024-01-23", size: "2.2 MB" },
    ],
  },
]

export function CoursesSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null)

  const filteredCourses = coursesData.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.professor.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Courses & Subjects
          </h1>
          <p className="text-muted-foreground">Manage your enrolled courses and track progress</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses, professors, or codes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="gap-2 bg-transparent">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCourses.map((course) => (
          <Card
            key={course.id}
            className="hover:shadow-lg transition-all duration-200 border-2 hover:border-primary/20"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{course.code}</p>
                </div>
                <Badge
                  variant={
                    course.grade.startsWith("A") ? "default" : course.grade.startsWith("B") ? "secondary" : "outline"
                  }
                >
                  {course.grade}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Professor Info */}
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={course.professorImage || "/placeholder.svg"} alt={course.professor} />
                  <AvatarFallback className="bg-primary/10">
                    {course.professor
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">{course.professor}</p>
                  <p className="text-xs text-muted-foreground">Course Instructor</p>
                </div>
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Course Progress</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
              </div>

              {/* Assignment Tracker */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Assignments</span>
                </div>
                <span className="text-sm font-bold">
                  {course.completedAssignments}/{course.totalAssignments}
                </span>
              </div>

              {/* Scores */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-lg bg-primary/10">
                  <p className="text-xs text-muted-foreground">FA Score</p>
                  <p className="text-lg font-bold text-primary">{course.faScore}</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-secondary/10">
                  <p className="text-xs text-muted-foreground">IA Score</p>
                  <p className="text-lg font-bold text-secondary">{course.iaScore}</p>
                </div>
              </div>

              {/* Notes Section */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Course Notes ({course.notes.length})
                  </h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedCourse(selectedCourse === course.id ? null : course.id)}
                  >
                    {selectedCourse === course.id ? "Hide" : "View"}
                  </Button>
                </div>

                {selectedCourse === course.id && (
                  <div className="space-y-2 animate-slide-in">
                    {course.notes.map((note, index) => (
                      <div key={index} className="flex items-center justify-between p-2 rounded border bg-card">
                        <div className="flex-1">
                          <p className="text-sm font-medium">{note.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {note.date} • {note.size}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">{coursesData.length}</p>
            <p className="text-sm text-muted-foreground">Total Courses</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-500" />
            <p className="text-2xl font-bold">
              {coursesData.reduce((acc, course) => acc + course.completedAssignments, 0)}
            </p>
            <p className="text-sm text-muted-foreground">Completed Tasks</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
            <p className="text-2xl font-bold">
              {coursesData.reduce((acc, course) => acc + (course.totalAssignments - course.completedAssignments), 0)}
            </p>
            <p className="text-sm text-muted-foreground">Pending Tasks</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <User className="h-8 w-8 mx-auto mb-2 text-accent" />
            <p className="text-2xl font-bold">
              {Math.round(coursesData.reduce((acc, course) => acc + course.progress, 0) / coursesData.length)}%
            </p>
            <p className="text-sm text-muted-foreground">Avg Progress</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
