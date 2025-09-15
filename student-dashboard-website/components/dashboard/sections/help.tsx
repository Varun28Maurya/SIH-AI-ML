"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, MessageCircle, Phone, Mail, Search, CheckCircle, Clock } from "lucide-react"

const faqData = [
  {
    id: "grades",
    question: "How is my CGPA calculated?",
    answer:
      "Your CGPA (Cumulative Grade Point Average) is calculated by taking the weighted average of all your course grades across all semesters. Each course's grade points are multiplied by its credit hours, then divided by the total credit hours attempted.",
    category: "Academic",
  },
  {
    id: "attendance",
    question: "What is the minimum attendance requirement?",
    answer:
      "The minimum attendance requirement is 75% for all courses. Students with less than 75% attendance may not be allowed to appear for the final examination. Medical leaves and other approved absences are considered separately.",
    category: "Attendance",
  },
  {
    id: "fees",
    question: "When are fee payments due?",
    answer:
      "Fee payments are typically due at the beginning of each semester. Tuition fees can be paid in installments as per the payment schedule. Late payment may result in additional charges and academic holds.",
    category: "Fees",
  },
  {
    id: "assignments",
    question: "How do I submit assignments online?",
    answer:
      "Assignments can be submitted through the dashboard's Assignment section. Click on the specific assignment, upload your file (PDF, DOC, or ZIP formats accepted), and click submit. You'll receive a confirmation email upon successful submission.",
    category: "Assignments",
  },
  {
    id: "password",
    question: "How do I reset my password?",
    answer:
      "To reset your password, click on 'Forgot Password' on the login page. Enter your registered email address, and you'll receive a password reset link. Follow the instructions in the email to create a new password.",
    category: "Technical",
  },
  {
    id: "transcripts",
    question: "How do I request official transcripts?",
    answer:
      "Official transcripts can be requested through the Reports section of your dashboard. Select 'Official Transcript', choose the delivery method (email or physical copy), and submit your request. Processing typically takes 3-5 business days.",
    category: "Academic",
  },
  {
    id: "schedule",
    question: "Where can I find my class schedule?",
    answer:
      "Your class schedule is available in the Courses section of your dashboard. It shows all enrolled courses with their timings, locations, and instructor information. You can also export it to your calendar app.",
    category: "Academic",
  },
  {
    id: "support",
    question: "How do I contact technical support?",
    answer:
      "Technical support can be reached through the 'Contact Support' form below, by calling our helpline at +1-800-STUDENT, or by emailing support@university.edu. Our support team is available 24/7 for urgent issues.",
    category: "Technical",
  },
  {
    id: "mobile",
    question: "Is there a mobile app available?",
    answer:
      "Yes, our mobile app is available for both iOS and Android devices. Search for 'Student Dashboard' in your app store. The mobile app provides access to all major features including grades, attendance, and assignments.",
    category: "Technical",
  },
  {
    id: "privacy",
    question: "How is my personal data protected?",
    answer:
      "We take data privacy seriously. All personal information is encrypted and stored securely. We comply with FERPA regulations and never share your academic information with third parties without your explicit consent.",
    category: "Privacy",
  },
]

const supportTickets = [
  {
    id: "TKT-001",
    subject: "Unable to submit assignment",
    status: "resolved",
    priority: "high",
    created: "2024-01-25",
    updated: "2024-01-26",
  },
  {
    id: "TKT-002",
    subject: "Grade discrepancy in Math course",
    status: "in-progress",
    priority: "medium",
    created: "2024-01-20",
    updated: "2024-01-28",
  },
  {
    id: "TKT-003",
    subject: "Password reset not working",
    status: "resolved",
    priority: "low",
    created: "2024-01-15",
    updated: "2024-01-16",
  },
]

export function HelpSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [ticketForm, setTicketForm] = useState({
    subject: "",
    category: "",
    priority: "medium",
    description: "",
  })

  const categories = ["all", "Academic", "Attendance", "Fees", "Assignments", "Technical", "Privacy"]

  const filteredFAQ = faqData.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "resolved":
        return "default"
      case "in-progress":
        return "secondary"
      case "pending":
        return "outline"
      default:
        return "outline"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive"
      case "medium":
        return "secondary"
      case "low":
        return "outline"
      default:
        return "outline"
    }
  }

  const handleSubmitTicket = () => {
    // Simulate ticket submission
    console.log("Ticket submitted:", ticketForm)
    setTicketForm({ subject: "", category: "", priority: "medium", description: "" })
    // In a real app, this would make an API call
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Help & Support
          </h1>
          <p className="text-muted-foreground">Find answers to common questions and get help when you need it</p>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-3">
              <MessageCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-sm text-muted-foreground mb-3">Get instant help from our support team</p>
            <Badge variant="default">Available 24/7</Badge>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="p-3 rounded-lg bg-secondary/10 w-fit mx-auto mb-3">
              <Phone className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="font-semibold mb-2">Phone Support</h3>
            <p className="text-sm text-muted-foreground mb-3">Call us for urgent issues</p>
            <Badge variant="secondary">+1-800-STUDENT</Badge>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="p-3 rounded-lg bg-accent/10 w-fit mx-auto mb-3">
              <Mail className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Email Support</h3>
            <p className="text-sm text-muted-foreground mb-3">Send us detailed questions</p>
            <Badge variant="outline">support@university.edu</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Main Help Content */}
      <Tabs defaultValue="faq" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="contact">Contact Support</TabsTrigger>
          <TabsTrigger value="tickets">My Tickets</TabsTrigger>
        </TabsList>

        {/* FAQ Tab */}
        <TabsContent value="faq" className="space-y-6">
          {/* Search and Filter */}
          <div className="flex gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search FAQ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="bg-transparent"
                >
                  {category === "all" ? "All" : category}
                </Button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                Frequently Asked Questions ({filteredFAQ.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="space-y-2">
                {filteredFAQ.map((item) => (
                  <AccordionItem key={item.id} value={item.id} className="border rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3 text-left">
                        <Badge variant="outline">{item.category}</Badge>
                        <span>{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Contact Support Tab */}
        <TabsContent value="contact" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Submit Support Ticket
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input
                    placeholder="Brief description of your issue"
                    value={ticketForm.subject}
                    onChange={(e) => setTicketForm({ ...ticketForm, subject: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <select
                    className="w-full p-2 border rounded-md bg-background"
                    value={ticketForm.category}
                    onChange={(e) => setTicketForm({ ...ticketForm, category: e.target.value })}
                  >
                    <option value="">Select category</option>
                    <option value="academic">Academic</option>
                    <option value="technical">Technical</option>
                    <option value="fees">Fees & Payments</option>
                    <option value="attendance">Attendance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Priority</label>
                <div className="flex gap-2">
                  {["low", "medium", "high"].map((priority) => (
                    <Button
                      key={priority}
                      variant={ticketForm.priority === priority ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTicketForm({ ...ticketForm, priority })}
                    >
                      {priority.charAt(0).toUpperCase() + priority.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Description</label>
                <Textarea
                  placeholder="Please provide detailed information about your issue..."
                  rows={5}
                  value={ticketForm.description}
                  onChange={(e) => setTicketForm({ ...ticketForm, description: e.target.value })}
                />
              </div>
              <Button onClick={handleSubmitTicket} className="w-full">
                Submit Ticket
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* My Tickets Tab */}
        <TabsContent value="tickets" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                My Support Tickets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {supportTickets.map((ticket) => (
                  <div key={ticket.id} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">{ticket.subject}</h3>
                        <Badge variant={getStatusColor(ticket.status)}>
                          {ticket.status === "resolved" && <CheckCircle className="h-3 w-3 mr-1" />}
                          {ticket.status === "in-progress" && <Clock className="h-3 w-3 mr-1" />}
                          {ticket.status.replace("-", " ")}
                        </Badge>
                        <Badge variant={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>ID: {ticket.id}</span>
                        <span>Created: {ticket.created}</span>
                        <span>Updated: {ticket.updated}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
