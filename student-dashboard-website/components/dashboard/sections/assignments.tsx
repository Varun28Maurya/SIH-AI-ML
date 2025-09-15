"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Download, Upload, Calendar, Clock, CheckCircle, AlertCircle, Search, Filter } from "lucide-react"

const assignmentsData = [
  {
    id: 1,
    title: "Data Structures Implementation",
    subject: "Data Structures",
    dueDate: "2024-02-01",
    status: "submitted",
    grade: "A-",
    submittedDate: "2024-01-30",
    description: "Implement various data structures including linked lists, stacks, and queues",
    attachments: ["assignment1.pdf", "code.zip"],
  },
  {
    id: 2,
    title: "Machine Learning Model",
    subject: "Machine Learning",
    dueDate: "2024-02-05",
    status: "pending",
    description: "Build and train a classification model using scikit-learn",
    attachments: ["requirements.pdf"],
  },
  {
    id: 3,
    title: "Web Application Project",
    subject: "Web Development",
    dueDate: "2024-01-31",
    status: "overdue",
    description: "Create a full-stack web application with React and Node.js",
    attachments: ["project_spec.pdf", "wireframes.png"],
  },
  {
    id: 4,
    title: "Database Design Report",
    subject: "Database Systems",
    dueDate: "2024-02-10",
    status: "draft",
    description: "Design a normalized database schema for an e-commerce system",
    attachments: ["template.docx"],
  },
]

const notesData = [
  {
    id: 1,
    title: "Advanced Algorithms Notes",
    subject: "Data Structures",
    uploadDate: "2024-01-25",
    size: "3.2 MB",
    type: "PDF",
    downloads: 45,
  },
  {
    id: 2,
    title: "Neural Networks Lecture",
    subject: "Machine Learning",
    uploadDate: "2024-01-23",
    size: "5.1 MB",
    type: "PDF",
    downloads: 32,
  },
  {
    id: 3,
    title: "React Components Guide",
    subject: "Web Development",
    uploadDate: "2024-01-22",
    size: "2.8 MB",
    type: "PDF",
    downloads: 28,
  },
  {
    id: 4,
    title: "SQL Query Examples",
    subject: "Database Systems",
    uploadDate: "2024-01-20",
    size: "1.9 MB",
    type: "PDF",
    downloads: 38,
  },
]

export function AssignmentsSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTab, setSelectedTab] = useState("assignments")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "submitted":
        return "default"
      case "pending":
        return "secondary"
      case "overdue":
        return "destructive"
      case "draft":
        return "outline"
      default:
        return "secondary"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "submitted":
        return <CheckCircle className="h-4 w-4" />
      case "pending":
        return <Clock className="h-4 w-4" />
      case "overdue":
        return <AlertCircle className="h-4 w-4" />
      case "draft":
        return <FileText className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const filteredAssignments = assignmentsData.filter(
    (assignment) =>
      assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assignment.subject.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredNotes = notesData.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.subject.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Assignments & Notes
          </h1>
          <p className="text-muted-foreground">Manage your assignments and access course materials</p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search assignments or notes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="gap-2 bg-transparent">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
        <Button className="gap-2">
          <Upload className="h-4 w-4" />
          Upload Assignment
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Assignments</p>
                <p className="text-2xl font-bold">{assignmentsData.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/20">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Submitted</p>
                <p className="text-2xl font-bold">{assignmentsData.filter((a) => a.status === "submitted").length}</p>
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
                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold">{assignmentsData.filter((a) => a.status === "pending").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-red-100 dark:bg-red-900/20">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Overdue</p>
                <p className="text-2xl font-bold">{assignmentsData.filter((a) => a.status === "overdue").length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for Assignments and Notes */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="notes">Course Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="assignments" className="space-y-4">
          {filteredAssignments.map((assignment) => (
            <Card key={assignment.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">{assignment.title}</h3>
                      <Badge variant={getStatusColor(assignment.status)} className="gap-1">
                        {getStatusIcon(assignment.status)}
                        {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{assignment.subject}</p>
                    <p className="text-sm mb-4">{assignment.description}</p>

                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Due: {assignment.dueDate}
                      </div>
                      {assignment.submittedDate && (
                        <div className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4" />
                          Submitted: {assignment.submittedDate}
                        </div>
                      )}
                      {assignment.grade && (
                        <div className="flex items-center gap-1">
                          <Badge variant="outline">Grade: {assignment.grade}</Badge>
                        </div>
                      )}
                    </div>

                    {assignment.attachments && assignment.attachments.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-medium mb-2">Attachments:</p>
                        <div className="flex gap-2">
                          {assignment.attachments.map((attachment, index) => (
                            <Button key={index} variant="outline" size="sm" className="gap-2 bg-transparent">
                              <Download className="h-4 w-4" />
                              {attachment}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 ml-4">
                    {assignment.status === "pending" || assignment.status === "draft" ? (
                      <Button className="gap-2">
                        <Upload className="h-4 w-4" />
                        Submit
                      </Button>
                    ) : (
                      <Button variant="outline" className="gap-2 bg-transparent">
                        <FileText className="h-4 w-4" />
                        View
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="notes" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note) => (
              <Card key={note.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline">{note.type}</Badge>
                  </div>

                  <h3 className="font-semibold mb-2">{note.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{note.subject}</p>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Upload Date:</span>
                      <span>{note.uploadDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>File Size:</span>
                      <span>{note.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Downloads:</span>
                      <span>{note.downloads}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button className="flex-1 gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="outline" size="icon">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
