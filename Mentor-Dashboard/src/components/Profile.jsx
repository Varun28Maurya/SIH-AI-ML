import React, { useState } from 'react';
import { Edit3, Save, X, Calendar, MapPin, Phone, Mail, BookOpen, Award } from 'lucide-react';

const Profile= () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@university.edu',
    phone: '+1 (555) 123-4567',
    department: 'Computer Science',
    position: 'Associate Professor',
    location: 'Building A, Room 205',
    bio: 'Passionate educator with 12+ years of experience in computer science and software engineering. Specializing in machine learning, data structures, and algorithms.',
    subjects: ['Data Structures', 'Algorithms', 'Machine Learning', 'Software Engineering'],
    qualifications: ['Ph.D. Computer Science - Stanford University', 'M.S. Computer Engineering - MIT', 'B.Tech Computer Science - IIT Delhi'],
    joinDate: '2018-08-15',
    studentsCount: 156,
    eventsCount: 23
  });

  const handleInputChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
        <div className="flex space-x-3">
          {isEditing ? (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
              >
                <Save size={18} />
                <span>Save</span>
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center space-x-2"
              >
                <X size={18} />
                <span>Cancel</span>
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Edit3 size={18} />
              <span>Edit Profile</span>
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">SJ</span>
            </div>
            {isEditing ? (
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="text-xl font-bold text-center w-full border-b border-gray-300 focus:border-blue-500 outline-none"
              />
            ) : (
              <h2 className="text-xl font-bold text-gray-900">{profile.name}</h2>
            )}
            <p className="text-gray-600 mt-1">{profile.position}</p>
            <p className="text-blue-600 font-medium">{profile.department}</p>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Mail size={16} />
              <span>{profile.email}</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Phone size={16} />
              <span>{profile.phone}</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <MapPin size={16} />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Calendar size={16} />
              <span>Joined {new Date(profile.joinDate).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Bio */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">About</h3>
            {isEditing ? (
              <textarea
                value={profile.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-sm p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Total Students</p>
                  <p className="text-3xl font-bold">{profile.studentsCount}</p>
                </div>
                <BookOpen size={40} className="text-blue-200" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl shadow-sm p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Events Conducted</p>
                  <p className="text-3xl font-bold">{profile.eventsCount}</p>
                </div>
                <Award size={40} className="text-purple-200" />
              </div>
            </div>
          </div>

          {/* Subjects & Qualifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Subjects Taught</h3>
              <div className="space-y-2">
                {profile.subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Qualifications</h3>
              <div className="space-y-2">
                {profile.qualifications.map((qual, index) => (
                  <div key={index} className="text-sm text-gray-700">
                    • {qual}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;