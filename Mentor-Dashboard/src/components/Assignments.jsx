import React, { useState } from 'react';
import { 
  Plus, 
  Upload, 
  FileText, 
  Video, 
  Link, 
  Calendar, 
  Clock, 
  Eye, 
  Edit3, 
  Download,
  CheckCircle,
  AlertCircle,
  Star
} from 'lucide-react';

const Assignments= () => {
  const [activeTab, setActiveTab] = useState('assignments');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const assignments = [
    {
      id: 1,
      title: 'Data Structures Implementation',
      description: 'Implement binary trees, linked lists, and hash tables',
      dueDate: '2024-01-15',
      subject: 'Data Structures',
      totalSubmissions: 45,
      pendingSubmissions: 12,
      attachments: ['assignment.pdf', 'sample_code.zip'],
      status: 'active'
    },
    {
      id: 2,
      title: 'Machine Learning Project',
      description: 'Build a classification model using Python and scikit-learn',
      dueDate: '2024-01-20',
      subject: 'Machine Learning',
      totalSubmissions: 38,
      pendingSubmissions: 8,
      attachments: ['project_requirements.pdf', 'dataset.csv'],
      status: 'active'
    }
  ];

  const submissions = [
    {
      id: 1,
      studentName: 'Alex Johnson',
      studentId: 'CS2021001',
      assignmentTitle: 'Data Structures Implementation',
      submittedAt: '2024-01-14 14:30',
      files: ['binary_tree.py', 'linked_list.py'],
      status: 'submitted',
      grade: null,
      feedback: ''
    },
    {
      id: 2,
      studentName: 'Sarah Chen',
      studentId: 'CS2021002',
      assignmentTitle: 'Data Structures Implementation',
      submittedAt: '2024-01-13 16:45',
      files: ['complete_implementation.zip'],
      status: 'graded',
      grade: 92,
      feedback: 'Excellent implementation with clean code structure!'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Assignments & Projects</h1>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus size={18} />
          <span>Create Assignment</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'assignments', label: 'My Assignments', count: assignments.length },
              { id: 'submissions', label: 'Submissions', count: submissions.length },
              { id: 'grading', label: 'Pending Grading', count: 15 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'assignments' && (
            <div className="space-y-6">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{assignment.title}</h3>
                      <p className="text-gray-600 mb-3">{assignment.description}</p>
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FileText size={16} />
                          <span>{assignment.subject}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Edit3 size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-600">{assignment.totalSubmissions}</div>
                      <div className="text-sm text-blue-600">Total Submissions</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-orange-600">{assignment.pendingSubmissions}</div>
                      <div className="text-sm text-orange-600">Pending</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-green-600">{assignment.totalSubmissions - assignment.pendingSubmissions}</div>
                      <div className="text-sm text-green-600">Submitted</div>
                    </div>
                  </div>

                  {assignment.attachments.length > 0 && (
                    <div className="border-t pt-4">
                      <h4 className="font-medium text-gray-900 mb-2">Attachments</h4>
                      <div className="flex flex-wrap gap-2">
                        {assignment.attachments.map((file, index) => (
                          <div key={index} className="flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2">
                            <FileText size={16} className="text-gray-500" />
                            <span className="text-sm text-gray-700">{file}</span>
                            <button className="text-gray-400 hover:text-gray-600">
                              <Download size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'submissions' && (
            <div className="space-y-4">
              {submissions.map((submission) => (
                <div key={submission.id} className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {submission.studentName.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{submission.studentName}</h4>
                        <p className="text-sm text-gray-500">{submission.studentId} • {submission.assignmentTitle}</p>
                        <p className="text-xs text-gray-400">Submitted: {submission.submittedAt}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {submission.status === 'graded' && (
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-semibold text-green-600">{submission.grade}/100</span>
                        </div>
                      )}
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        submission.status === 'graded' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {submission.status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {submission.files.map((file, index) => (
                      <div key={index} className="flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2">
                        <FileText size={16} className="text-gray-500" />
                        <span className="text-sm text-gray-700">{file}</span>
                        <button className="text-gray-400 hover:text-gray-600">
                          <Download size={14} />
                        </button>
                      </div>
                    ))}
                  </div>

                  {submission.feedback && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <h5 className="font-medium text-blue-900 mb-1">Feedback</h5>
                      <p className="text-sm text-blue-700">{submission.feedback}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'grading' && (
            <div className="text-center py-12">
              <AlertCircle size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Grading Queue</h3>
              <p className="text-gray-600">15 submissions pending your review</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Start Grading
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Create Assignment Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Create New Assignment</h2>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Assignment title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Assignment description and instructions"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Data Structures</option>
                    <option>Algorithms</option>
                    <option>Machine Learning</option>
                    <option>Software Engineering</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Attachments</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">
                    Drag and drop files here, or <button className="text-blue-600 hover:text-blue-700">browse</button>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
              <button 
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Create Assignment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignments;