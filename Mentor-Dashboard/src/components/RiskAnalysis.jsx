import React, { useState } from 'react';
import { 
  AlertTriangle, 
  TrendingDown, 
  Clock, 
  Brain, 
  Target, 
  Users, 
  BarChart3,
  Eye,
  MessageSquare
} from 'lucide-react';

const RiskAnalysis = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const atRiskStudents = [
    {
      id: 1,
      name: 'David Rodriguez',
      studentId: 'CS2021003',
      riskScore: 85,
      riskLevel: 'high',
      factors: ['Low Attendance (65%)', 'Declining Grades', 'Missed Deadlines'],
      trend: 'increasing',
      lastActivity: '3 days ago',
      predictions: {
        dropoutRisk: 78,
        nextAssignmentMiss: 72,
        needsIntervention: true
      }
    },
    {
      id: 2,
      name: 'Michael Brown',
      studentId: 'CS2021005',
      riskScore: 72,
      riskLevel: 'high',
      factors: ['Stress Indicators', 'Late Submissions', 'Low Engagement'],
      trend: 'stable',
      lastActivity: '1 day ago',
      predictions: {
        dropoutRisk: 45,
        nextAssignmentMiss: 68,
        needsIntervention: true
      }
    },
    {
      id: 3,
      name: 'Emma Wilson',
      studentId: 'CS2021008',
      riskScore: 58,
      riskLevel: 'medium',
      factors: ['Attendance Issues', 'Communication Drop'],
      trend: 'improving',
      lastActivity: '2 hours ago',
      predictions: {
        dropoutRisk: 32,
        nextAssignmentMiss: 45,
        needsIntervention: false
      }
    }
  ];

  const riskMetrics = {
    totalAtRisk: 8,
    highRisk: 3,
    mediumRisk: 5,
    interventionNeeded: 3,
    improvingTrend: 2
  };

  const stressIndicators = [
    { category: 'Academic Performance', value: 23, change: '+5%' },
    { category: 'Attendance Drop', value: 18, change: '-2%' },
    { category: 'Late Submissions', value: 31, change: '+12%' },
    { category: 'Communication Issues', value: 15, change: '0%' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Student Risk Analysis</h1>
        <div className="flex items-center space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="semester">This Semester</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      {/* Risk Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Students at Risk</p>
              <p className="text-2xl font-bold text-red-600">{riskMetrics.totalAtRisk}</p>
            </div>
            <AlertTriangle className="text-red-500" size={32} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">High Risk</p>
              <p className="text-2xl font-bold text-red-600">{riskMetrics.highRisk}</p>
            </div>
            <TrendingDown className="text-red-500" size={32} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Medium Risk</p>
              <p className="text-2xl font-bold text-yellow-600">{riskMetrics.mediumRisk}</p>
            </div>
            <Clock className="text-yellow-500" size={32} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Need Intervention</p>
              <p className="text-2xl font-bold text-purple-600">{riskMetrics.interventionNeeded}</p>
            </div>
            <Target className="text-purple-500" size={32} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Improving</p>
              <p className="text-2xl font-bold text-green-600">{riskMetrics.improvingTrend}</p>
            </div>
            <BarChart3 className="text-green-500" size={32} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* At-Risk Students List */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">High Priority Students</h2>
            <p className="text-gray-600 text-sm">Students requiring immediate attention</p>
          </div>
          
          <div className="p-6 space-y-4">
            {atRiskStudents.map((student) => (
              <div key={student.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{student.name}</h3>
                      <p className="text-sm text-gray-500">{student.studentId}</p>
                      <p className="text-xs text-gray-400">Last seen: {student.lastActivity}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      student.riskLevel === 'high' 
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {student.riskLevel.toUpperCase()} RISK
                    </div>
                    <div className="text-2xl font-bold text-red-600 mt-1">
                      {student.riskScore}%
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Risk Factors</h4>
                  <div className="flex flex-wrap gap-2">
                    {student.factors.map((factor, index) => (
                      <span key={index} className="bg-red-50 text-red-700 px-2 py-1 rounded text-xs">
                        {factor}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h4 className="font-medium text-gray-900 mb-3">AI Predictions</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500">Dropout Risk</p>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 bg-red-500 rounded-full"
                            style={{ width: `${student.predictions.dropoutRisk}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-red-600">
                          {student.predictions.dropoutRisk}%
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Miss Next Assignment</p>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 bg-orange-500 rounded-full"
                            style={{ width: `${student.predictions.nextAssignmentMiss}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium text-orange-600">
                          {student.predictions.nextAssignmentMiss}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className={`flex items-center space-x-2 text-sm ${
                    student.trend === 'increasing' ? 'text-red-600' :
                    student.trend === 'improving' ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    <TrendingDown size={16} />
                    <span>Trend: {student.trend}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200 transition-colors flex items-center space-x-1">
                      <Eye size={14} />
                      <span>View</span>
                    </button>
                    <button className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm hover:bg-green-200 transition-colors flex items-center space-x-1">
                      <MessageSquare size={14} />
                      <span>Contact</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics Sidebar */}
        <div className="space-y-6">
          {/* AI Insights */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="text-purple-500" size={24} />
              <h3 className="font-semibold text-gray-900">AI Insights</h3>
            </div>
            
            <div className="space-y-4">
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-800">
                  <strong>Alert:</strong> 3 students show critical dropout patterns similar to last semester's cases.
                </p>
              </div>
              
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Trend:</strong> Late submission patterns increasing by 12% this month.
                </p>
              </div>
              
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Good News:</strong> 2 previously at-risk students show improvement.
                </p>
              </div>
            </div>
          </div>

          {/* Stress Detection */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Stress Indicators</h3>
            
            <div className="space-y-4">
              {stressIndicators.map((indicator, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{indicator.category}</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-gray-900">{indicator.value}</span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        indicator.change.startsWith('+') 
                          ? 'bg-red-100 text-red-600'
                          : indicator.change.startsWith('-')
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {indicator.change}
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 bg-orange-500 rounded-full"
                      style={{ width: `${(indicator.value / 50) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            
            <div className="space-y-3">
              <button className="w-full p-3 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors text-left">
                <div className="font-medium">Send Intervention Alert</div>
                <div className="text-xs text-red-600">Notify counselors about high-risk students</div>
              </button>
              
              <button className="w-full p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-left">
                <div className="font-medium">Schedule Check-ins</div>
                <div className="text-xs text-blue-600">Arrange meetings with at-risk students</div>
              </button>
              
              <button className="w-full p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-left">
                <div className="font-medium">Contact Guardians</div>
                <div className="text-xs text-green-600">Send automated notifications to parents</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAnalysis;