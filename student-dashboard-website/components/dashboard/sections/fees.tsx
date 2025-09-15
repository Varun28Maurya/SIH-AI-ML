"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CreditCard, Download, Calendar, CheckCircle, AlertCircle, Clock, DollarSign } from "lucide-react"

const feeStructure = [
  {
    id: 1,
    category: "Tuition Fee",
    amount: 15000,
    paid: 15000,
    dueDate: "2024-01-15",
    status: "paid",
    installment: 1,
    receipt: "TF_2024_001.pdf",
  },
  {
    id: 2,
    category: "Tuition Fee",
    amount: 15000,
    paid: 15000,
    dueDate: "2024-04-15",
    status: "paid",
    installment: 2,
    receipt: "TF_2024_002.pdf",
  },
  {
    id: 3,
    category: "Tuition Fee",
    amount: 15000,
    paid: 0,
    dueDate: "2024-07-15",
    status: "pending",
    installment: 3,
  },
  {
    id: 4,
    category: "Lab Fee",
    amount: 2500,
    paid: 2500,
    dueDate: "2024-01-20",
    status: "paid",
    installment: 1,
    receipt: "LF_2024_001.pdf",
  },
  {
    id: 5,
    category: "Library Fee",
    amount: 1000,
    paid: 1000,
    dueDate: "2024-01-10",
    status: "paid",
    installment: 1,
    receipt: "LIB_2024_001.pdf",
  },
  {
    id: 6,
    category: "Examination Fee",
    amount: 3000,
    paid: 0,
    dueDate: "2024-05-01",
    status: "upcoming",
    installment: 1,
  },
]

const paymentHistory = [
  {
    id: 1,
    date: "2024-01-15",
    amount: 15000,
    category: "Tuition Fee - Installment 1",
    method: "Online Banking",
    transactionId: "TXN123456789",
    status: "completed",
  },
  {
    id: 2,
    date: "2024-01-20",
    amount: 2500,
    category: "Lab Fee",
    method: "Credit Card",
    transactionId: "TXN123456790",
    status: "completed",
  },
  {
    id: 3,
    date: "2024-01-10",
    amount: 1000,
    category: "Library Fee",
    method: "Debit Card",
    transactionId: "TXN123456791",
    status: "completed",
  },
  {
    id: 4,
    date: "2024-04-15",
    amount: 15000,
    category: "Tuition Fee - Installment 2",
    method: "Online Banking",
    transactionId: "TXN123456792",
    status: "completed",
  },
]

export function FeesSection() {
  const [selectedTab, setSelectedTab] = useState<"overview" | "history">("overview")

  const totalFees = feeStructure.reduce((sum, fee) => sum + fee.amount, 0)
  const paidFees = feeStructure.reduce((sum, fee) => sum + fee.paid, 0)
  const pendingFees = totalFees - paidFees
  const paymentProgress = (paidFees / totalFees) * 100

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "default"
      case "pending":
        return "destructive"
      case "upcoming":
        return "secondary"
      default:
        return "outline"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
        return <CheckCircle className="h-4 w-4" />
      case "pending":
        return <AlertCircle className="h-4 w-4" />
      case "upcoming":
        return <Clock className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Fees & Payments
          </h1>
          <p className="text-muted-foreground">Manage your fee payments and download receipts</p>
        </div>
      </div>

      {/* Payment Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-2 border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Fees</p>
                <p className="text-2xl font-bold">${totalFees.toLocaleString()}</p>
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
                <p className="text-sm font-medium text-muted-foreground">Paid</p>
                <p className="text-2xl font-bold">${paidFees.toLocaleString()}</p>
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
                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold">${pendingFees.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <CreditCard className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Progress</p>
                <p className="text-2xl font-bold">{Math.round(paymentProgress)}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Payment Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Total Payment Progress</span>
              <span className="font-medium">{Math.round(paymentProgress)}% Complete</span>
            </div>
            <Progress value={paymentProgress} className="h-3" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>${paidFees.toLocaleString()} paid</span>
              <span>${pendingFees.toLocaleString()} remaining</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tab Navigation */}
      <div className="flex gap-2">
        <Button variant={selectedTab === "overview" ? "default" : "outline"} onClick={() => setSelectedTab("overview")}>
          Fee Overview
        </Button>
        <Button variant={selectedTab === "history" ? "default" : "outline"} onClick={() => setSelectedTab("history")}>
          Payment History
        </Button>
      </div>

      {/* Fee Overview Tab */}
      {selectedTab === "overview" && (
        <div className="space-y-4">
          {feeStructure.map((fee) => (
            <Card key={fee.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold">
                        {fee.category}
                        {fee.installment && ` - Installment ${fee.installment}`}
                      </h3>
                      <Badge variant={getStatusColor(fee.status)} className="gap-1">
                        {getStatusIcon(fee.status)}
                        {fee.status.charAt(0).toUpperCase() + fee.status.slice(1)}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Amount</p>
                        <p className="text-xl font-bold">${fee.amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Due Date</p>
                        <p className="font-medium flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {fee.dueDate}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Payment Status</p>
                        <p className="font-medium">
                          ${fee.paid.toLocaleString()} / ${fee.amount.toLocaleString()}
                        </p>
                        {fee.amount > 0 && <Progress value={(fee.paid / fee.amount) * 100} className="h-2 mt-1" />}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 ml-6">
                    {fee.status === "paid" && fee.receipt ? (
                      <Button variant="outline" className="gap-2 bg-transparent">
                        <Download className="h-4 w-4" />
                        Receipt
                      </Button>
                    ) : fee.status === "pending" ? (
                      <Button className="gap-2">
                        <CreditCard className="h-4 w-4" />
                        Pay Now
                      </Button>
                    ) : (
                      <Button variant="outline" disabled>
                        <Clock className="h-4 w-4 mr-2" />
                        Upcoming
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Payment History Tab */}
      {selectedTab === "history" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Payment History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {paymentHistory.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-4 rounded-lg border bg-card">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/20">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{payment.category}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span>{payment.date}</span>
                        <span>•</span>
                        <span>{payment.method}</span>
                        <span>•</span>
                        <span>ID: {payment.transactionId}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">${payment.amount.toLocaleString()}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="default">Completed</Badge>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
