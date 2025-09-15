import React, { useState } from 'react';
import { 
  Upload, 
  Calendar, 
  Users, 
  CheckCircle, 
  XCircle, 
  BarChart3, 
  Download,
  Link as LinkIcon,
  FileSpreadsheet
} from 'lucide-react';

const Attendance = () => {
  const [activeView, setActiveView] = useState('manual');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const students = [
    { id: 1, name: 'Alex Johnson', rollNumber: 'CS001', present: true },
    { id: 2, name: 'Sarah Chen', rollNumber: 'CS002', present: true },
    { id: 3, name: 'David Rodriguez', rollNumber: 'CS003', present: false },
    { id: 4, name: 'Emily Watson', rollNumber: 'CS004', present: true },
    { id: 5, name: 'Michael Brown', rollNumber: 'CS005', present: false },
  ];

  const attendanceStats = {
    totalStudents: 45,
    presentToday: 38,
    absentToday: 7,
    averageAttendance: 84.5
  };

  const toggleAttendance = (studentId) => {
    // Logic to toggle attendance
    console.log(`Toggle attendance for student ${studentId}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Attendance System</h1>
        <div className="flex items-center space-x-3">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Save Attendance
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Students</p>
              <p className="text-2xl font-bold text-gray-900">{attendanceStats.totalStudents}</p>
            </div>
            <Users className="text-blue-500" size={32} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Present Today</p>
              <p className="text-2xl font-bold text-green-600">{attendanceStats.presentToday}</p>
            </div>
            <CheckCircle className="text-green-500" size={32} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Absent Today</p>
              <p className="text-2xl font-bold text-red-600">{attendanceStats.absentToday}</p>
            </div>
            <XCircle className="text-red-500" size={32} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Average Attendance</p>
              <p className="text-2xl font-bold text-blue-600">{attendanceStats.averageAttendance}%</p>
            </div>
            <BarChart3 className="text-blue-500" size={32} />
          </div>
        </div>
      </div>

      {/* Attendance Methods */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'manual', label: 'Manual Marking', icon: CheckCircle },
              { id: 'excel', label: 'Excel Upload', icon: FileSpreadsheet },
              { id: 'sheets', label: 'Google Sheets', icon: LinkIcon },
              { id: 'analytics', label: 'Analytics', icon: BarChart3 }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveView(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                    activeView === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {activeView === 'manual' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Manual Attendance Marking</h3>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm">
                    Mark All Present
                  </button>
                  <button className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm">
                    Mark All Absent
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {students.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{student.name}</h4>
                        <p className="text-sm text-gray-500">{student.rollNumber}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => toggleAttendance(student.id)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                          student.present
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : 'bg-red-100 text-red-700 hover:bg-red-200'
                        }`}
                      >
                        {student.present ? (
                          <>
                            <CheckCircle size={16} />
                            <span>Present</span>
                          </>
                        ) : (
                          <>
                            <XCircle size={16} />
                            <span>Absent</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeView === 'excel' && (
            <div className="text-center py-12">
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-12">
                <Upload size={48} className="mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Excel File</h3>
                <p className="text-gray-600 mb-4">
                  Upload an Excel file with student roll numbers and attendance status.
                  Our AI will automatically parse and mark attendance.
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Choose File
                </button>
                <p className="text-xs text-gray-500 mt-2">Supports .xlsx, .xls files</p>
              </div>
            </div>
          )}

          {activeView === 'sheets' && (
            <div className="space-y-6">
              <div className="text-center">
                <LinkIcon size={48} className="mx-auto text-blue-500 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Google Sheets Integration</h3>
                <p className="text-gray-600 mb-6">
                  Connect your Google Sheets to automatically sync attendance data
                </p>
              </div>

              <div className="max-w-md mx-auto">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Google Sheets URL
                </label>
                <div className="flex space-x-2">
                  <input
                    type="url"
                    placeholder="https://docs.google.com/spreadsheets/d/..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Connect
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Make sure the sheet is publicly accessible or shared with our service account
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Sheet Format Requirements:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Column A: Student Roll Numbers</li>
                  <li>• Column B: Student Names</li>
                  <li>• Column C: Attendance Status (P/A or 1/0)</li>
                  <li>• First row should contain headers</li>
                </ul>
              </div>
            </div>
          )}

          {activeView === 'analytics' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Attendance Analytics</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-medium text-gray-900 mb-4">Class Attendance Trends</h4>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    <BarChart3 size={64} />
                    <span className="ml-2">Chart visualization would go here</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-medium text-gray-900 mb-4">Student Performance</h4>
                  <div className="space-y-3">
                    {[
                      { name: 'Sarah Chen', percentage: 95, status: 'excellent' },
                      { name: 'Alex Johnson', percentage: 88, status: 'good' },
                      { name: 'Emily Watson', percentage: 76, status: 'average' },
                      { name: 'David Rodriguez', percentage: 62, status: 'poor' }
                    ].map((student, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="font-medium text-gray-900">{student.name}</span>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                student.status === 'excellent' ? 'bg-green-500' :
                                student.status === 'good' ? 'bg-blue-500' :
                                student.status === 'average' ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${student.percentage}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-600">{student.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors flex items-center space-x-2">
                  <Download size={16} />
                  <span>Export Report</span>
                </button>
                <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors">
                  Generate Monthly Report
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Attendance;