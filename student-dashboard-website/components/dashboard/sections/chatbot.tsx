"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageCircle, Send, Bot, User, AlertTriangle, CheckCircle } from "lucide-react"

interface Message {
  id: number
  content: string
  sender: "user" | "bot"
  timestamp: Date
  alertSent?: boolean
}

const predefinedResponses = {
  greeting: [
    "Hello! I'm your AI study assistant. How can I help you today?",
    "Hi there! I'm here to help with your academic questions and concerns.",
    "Welcome! I'm your virtual study companion. What would you like to know?",
  ],
  grades: [
    "I can see you're concerned about your grades. Let me help you understand your current performance and suggest improvement strategies.",
    "Your current CGPA is 3.85. Would you like me to break down your performance by subject?",
    "Based on your recent performance, I notice some areas where you could improve. Shall I create a study plan for you?",
  ],
  assignments: [
    "I see you have 3 pending assignments. Would you like me to help you prioritize them based on due dates?",
    "Your Web Development Project is due tomorrow. I've alerted your mentor about the tight deadline.",
    "I can help you organize your assignment schedule. Let me create a timeline for your pending tasks.",
  ],
  attendance: [
    "Your overall attendance is 92%, which is excellent! Keep up the good work.",
    "I notice your attendance in Database Systems is slightly low at 86.7%. Would you like me to alert your mentor?",
    "Regular attendance is crucial for academic success. I can help you track and improve your attendance patterns.",
  ],
  stress: [
    "I understand you're feeling stressed. This is normal during academic life. I've alerted your mentor for additional support.",
    "Academic stress is common. Would you like me to suggest some stress management techniques?",
    "I'm here to help. I've notified your mentor about your concerns so they can provide personalized guidance.",
  ],
  help: [
    "I can help you with questions about grades, assignments, attendance, fees, and general academic guidance.",
    "Feel free to ask me about your courses, study tips, or any academic concerns you might have.",
    "I'm designed to support your academic journey. What specific area would you like assistance with?",
  ],
}

const alertKeywords = [
  "stress",
  "struggling",
  "difficult",
  "help",
  "problem",
  "worried",
  "anxious",
  "behind",
  "failing",
]

export function ChatbotSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm your AI study assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = (userMessage: string): { content: string; alertSent: boolean } => {
    const message = userMessage.toLowerCase()
    let response = ""
    let alertSent = false

    // Check for alert keywords
    const hasAlertKeyword = alertKeywords.some((keyword) => message.includes(keyword))
    if (hasAlertKeyword) {
      alertSent = true
    }

    // Generate appropriate response
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      response = predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)]
    } else if (message.includes("grade") || message.includes("cgpa") || message.includes("score")) {
      response = predefinedResponses.grades[Math.floor(Math.random() * predefinedResponses.grades.length)]
    } else if (message.includes("assignment") || message.includes("homework") || message.includes("project")) {
      response = predefinedResponses.assignments[Math.floor(Math.random() * predefinedResponses.assignments.length)]
    } else if (message.includes("attendance") || message.includes("class") || message.includes("absent")) {
      response = predefinedResponses.attendance[Math.floor(Math.random() * predefinedResponses.attendance.length)]
    } else if (hasAlertKeyword) {
      response = predefinedResponses.stress[Math.floor(Math.random() * predefinedResponses.stress.length)]
    } else if (message.includes("help") || message.includes("what can you do")) {
      response = predefinedResponses.help[Math.floor(Math.random() * predefinedResponses.help.length)]
    } else {
      response =
        "I understand your question. Let me help you with that. If you need immediate assistance, I can alert your mentor for personalized support."
      if (message.length > 20) {
        alertSent = true
      }
    }

    return { content: response, alertSent }
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response delay
    setTimeout(
      () => {
        const { content, alertSent } = generateResponse(inputValue)
        const botMessage: Message = {
          id: messages.length + 2,
          content,
          sender: "bot",
          timestamp: new Date(),
          alertSent,
        }

        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    )
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickQuestions = [
    "What's my current CGPA?",
    "Show my pending assignments",
    "How's my attendance?",
    "I'm feeling stressed about exams",
    "Help me with study planning",
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            AI Study Assistant
          </h1>
          <p className="text-muted-foreground">Get instant help with your academic questions and concerns</p>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Chat with AI Assistant
                <Badge variant="secondary" className="ml-auto">
                  Online
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex gap-3 ${message.sender === "user" ? "justify-end" : ""}`}>
                    {message.sender === "bot" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground ml-auto"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <p className="text-xs opacity-70">{message.timestamp.toLocaleTimeString()}</p>
                        {message.alertSent && (
                          <Badge variant="outline" className="text-xs">
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            Alert sent to mentor
                          </Badge>
                        )}
                      </div>
                    </div>
                    {message.sender === "user" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-secondary text-secondary-foreground">
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-muted text-muted-foreground rounded-lg p-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-current rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-current rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about your studies..."
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} disabled={!inputValue.trim() || isTyping}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions & Info */}
        <div className="space-y-6">
          {/* Quick Questions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left h-auto p-3 bg-transparent"
                  onClick={() => setInputValue(question)}
                >
                  {question}
                </Button>
              ))}
            </CardContent>
          </Card>

          {/* AI Capabilities */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What I Can Help With</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Academic performance analysis
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Assignment and deadline tracking
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Attendance monitoring
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Study tips and strategies
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Stress and anxiety support
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Mentor alert system
              </div>
            </CardContent>
          </Card>

          {/* Alert Status */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Alert System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Mentor Notifications</span>
                  <Badge variant="default">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Stress Detection</span>
                  <Badge variant="default">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Response Time</span>
                  <Badge variant="secondary">&lt; 2 mins</Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  I automatically alert your mentor when you express concerns about stress, academic difficulties, or
                  need additional support.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
