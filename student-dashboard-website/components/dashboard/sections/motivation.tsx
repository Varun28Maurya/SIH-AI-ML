"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, RefreshCw, BookOpen, Target, TrendingUp, Star, Heart, Zap } from "lucide-react"

const motivationalQuotes = [
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "Perseverance",
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "Dreams",
  },
  {
    quote: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
    category: "Education",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Passion",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "Confidence",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    category: "Progress",
  },
]

const studyTips = [
  {
    title: "Pomodoro Technique",
    description: "Study for 25 minutes, then take a 5-minute break. Repeat 4 times, then take a longer break.",
    icon: Target,
    category: "Time Management",
  },
  {
    title: "Active Recall",
    description: "Test yourself on the material instead of just re-reading. This strengthens memory retention.",
    icon: BookOpen,
    category: "Memory",
  },
  {
    title: "Spaced Repetition",
    description: "Review material at increasing intervals to move information into long-term memory.",
    icon: TrendingUp,
    category: "Retention",
  },
  {
    title: "Mind Mapping",
    description: "Create visual representations of information to understand connections and relationships.",
    icon: Star,
    category: "Organization",
  },
  {
    title: "Environment Setup",
    description: "Create a dedicated, distraction-free study space with good lighting and minimal noise.",
    icon: Zap,
    category: "Focus",
  },
  {
    title: "Regular Breaks",
    description: "Take short breaks every hour to maintain focus and prevent mental fatigue.",
    icon: Heart,
    category: "Wellness",
  },
]

const achievements = [
  { title: "Perfect Attendance", description: "Attended all classes this month", earned: true },
  { title: "Assignment Master", description: "Submitted 5 assignments on time", earned: true },
  { title: "Grade Improver", description: "Improved CGPA by 0.2 points", earned: true },
  { title: "Study Streak", description: "Studied for 7 consecutive days", earned: false },
  { title: "Early Bird", description: "Submitted assignment 3 days early", earned: false },
  { title: "Participation Pro", description: "Actively participated in 10 classes", earned: false },
]

export function MotivationSection() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [currentTip, setCurrentTip] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % motivationalQuotes.length)
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  const refreshQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % motivationalQuotes.length)
  }

  const refreshTip = () => {
    setCurrentTip((prev) => (prev + 1) % studyTips.length)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Motivation & Study Tips
          </h1>
          <p className="text-muted-foreground">Stay motivated and improve your study techniques</p>
        </div>
      </div>

      {/* Daily Motivation */}
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Daily Motivation
            <Button variant="ghost" size="sm" onClick={refreshQuote} className="ml-auto">
              <RefreshCw className="h-4 w-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <blockquote className="text-xl italic font-medium leading-relaxed">
              "{motivationalQuotes[currentQuote].quote}"
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <p className="text-muted-foreground">— {motivationalQuotes[currentQuote].author}</p>
              <Badge variant="outline">{motivationalQuotes[currentQuote].category}</Badge>
            </div>
            <div className="flex justify-center mt-4">
              {motivationalQuotes.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full mx-1 transition-colors cursor-pointer ${
                    index === currentQuote ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => setCurrentQuote(index)}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Study Tip of the Day */}
      <Card className="border-2 border-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Study Tip of the Day
            <Button variant="ghost" size="sm" onClick={refreshTip} className="ml-auto">
              <RefreshCw className="h-4 w-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-accent/10">
              {(() => {
                const Icon = studyTips[currentTip].icon
                return <Icon className="h-6 w-6 text-accent" />
              })()}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-semibold">{studyTips[currentTip].title}</h3>
                <Badge variant="secondary">{studyTips[currentTip].category}</Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">{studyTips[currentTip].description}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* All Study Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Study Techniques Library
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {studyTips.map((tip, index) => {
              const Icon = tip.icon
              return (
                <div
                  key={index}
                  className={`p-4 rounded-lg border transition-all cursor-pointer hover:shadow-md ${
                    index === currentTip ? "border-accent bg-accent/5" : "border-border bg-card"
                  }`}
                  onClick={() => setCurrentTip(index)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-muted/50">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{tip.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {tip.category}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{tip.description}</p>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            Your Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border transition-all ${
                  achievement.earned ? "border-primary bg-primary/5 shadow-sm" : "border-muted bg-muted/20 opacity-60"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-full ${achievement.earned ? "bg-primary/10" : "bg-muted/50"}`}>
                    <Star
                      className={`h-4 w-4 ${
                        achievement.earned ? "text-primary fill-primary" : "text-muted-foreground"
                      }`}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{achievement.title}</h4>
                    <Badge variant={achievement.earned ? "default" : "secondary"}>
                      {achievement.earned ? "Earned" : "In Progress"}
                    </Badge>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Progress Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-3">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <p className="text-2xl font-bold">{achievements.filter((a) => a.earned).length}</p>
            <p className="text-sm text-muted-foreground">Achievements Earned</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="p-3 rounded-lg bg-accent/10 w-fit mx-auto mb-3">
              <TrendingUp className="h-6 w-6 text-accent" />
            </div>
            <p className="text-2xl font-bold">7</p>
            <p className="text-sm text-muted-foreground">Day Study Streak</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="p-3 rounded-lg bg-secondary/10 w-fit mx-auto mb-3">
              <Heart className="h-6 w-6 text-secondary" />
            </div>
            <p className="text-2xl font-bold">95%</p>
            <p className="text-sm text-muted-foreground">Motivation Level</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
