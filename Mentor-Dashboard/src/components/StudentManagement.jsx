import React, { useState } from 'react';
import { Search, Filter, Edit3, Eye, Phone, Mail, AlertCircle, CheckCircle } from 'lucide-react';

const StudentManagement= () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const students = [
    {
      id: 1,
      name: 'Alex Johnson',
      studentId: 'CS2021001',
      email: 'alex.johnson@student.edu',
      phone: '+1 (555) 234-5678',
      department: 'Computer Science',
      year: '3rd Year',
      gpa: 8.5,
      attendance: 92,
      status: 'active',
      guardian: {
        name: 'Michael Johnson',
        phone: '+1 (555) 234-5679',
        email: 'michael.johnson@email.com'
      },
      riskLevel: 'low'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      studentId: 'CS2021002',
      email: 'sarah.chen@student.edu',
      phone: '+1 (555) 345-6789',
      department: 'Computer Science',
      year: '2nd Year',
      gpa: 9.2,
      attendance: 88,
      status: 'active',
      guardian: {
        name: 'Li Wei Chen',
        phone: '+1 (555) 345-6790',
        email: 'liwei.chen@email.com'
      },
      riskLevel: 'low'
    },
    {
      id: 3,
      name: 'David Rodriguez',
      studentId: 'CS2021003',
      email: 'david.rodriguez@student.edu',
      phone: '+1 (555) 456-7890',
      department: 'Computer Science',
      year: '1st Year',
      gpa: 6.8,
      attendance: 75,
      status: 'at-risk',
      guardian: {
        name: 'Maria Rodriguez',
        phone: '+1 (555) 456-7891',
        email: 'maria.rodriguez@email.com'
      },
      riskLevel: 'high'
    }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || student.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Student Management</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Add Student
        </button>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative flex-1">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search students by name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Students</option>
              <option value="active">Active</option>
              <option value="at-risk">At Risk</option>
              <option value="inactive">Inactive</option>
            </select>
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <Filter size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Students List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <div key={student.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {student.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{student.name}</h3>
                  <p className="text-sm text-gray-500">{student.studentId}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {student.riskLevel === 'high' ? (
                  <AlertCircle size={20} className="text-red-500" />
                ) : (
                  <CheckCircle size={20} className="text-green-500" />
                )}
              </div>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500">Year</p>
                  <p className="font-medium">{student.year}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">GPA</p>
                  <p className="font-medium">{student.gpa}/10</p>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Attendance</span>
                  <span className={`font-medium ${student.attendance >= 85 ? 'text-green-600' : student.attendance >= 75 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {student.attendance}%
                  </span>
                </div>
                <div className="mt-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${student.attendance >= 85 ? 'bg-green-500' : student.attendance >= 75 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${student.attendance}%` }}
                  />
                </div>
              </div>

              <div className="border-t pt-3">
                <p className="text-xs text-gray-500 mb-2">Guardian Information</p>
                <div className="space-y-1">
                  <p className="text-sm font-medium">{student.guardian.name}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Phone size={12} />
                      <span>{student.guardian.phone}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Mail size={12} />
                      <span>{student.guardian.email}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2 pt-2">
                <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm flex items-center justify-center space-x-1">
                  <Eye size={14} />
                  <span>View</span>
                </button>
                <button className="flex-1 px-3 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors text-sm flex items-center justify-center space-x-1">
                  <Edit3 size={14} />
                  <span>Edit</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentManagement;