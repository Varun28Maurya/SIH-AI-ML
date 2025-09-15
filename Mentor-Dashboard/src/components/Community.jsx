import React, { useState } from 'react';
import { 
  Camera, 
  Video, 
  Calendar, 
  MapPin, 
  Users, 
  Heart, 
  MessageCircle, 
  Share2,
  Plus,
  Bell
} from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('feed');

  const posts = [
    {
      id: 1,
      type: 'event',
      title: 'Tech Workshop: AI & Machine Learning',
      description: 'Join us for an exciting workshop on the latest AI trends and practical machine learning applications.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-12',
      time: '2:00 PM',
      location: 'Auditorium A',
      attendees: 45,
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      likes: 23,
      comments: 8
    },
    {
      id: 2,
      type: 'photo',
      title: 'Computer Science Department Annual Day',
      description: 'Congratulations to all our students for their outstanding achievements this year!',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      likes: 156,
      comments: 34
    },
    {
      id: 3,
      type: 'announcement',
      title: 'Upcoming Project Submissions',
      description: 'Reminder: Final year project submissions are due by January 25th. Please ensure all documentation is complete.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-08',
      likes: 89,
      comments: 12
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Industry Expert Talk',
      date: '2024-01-18',
      time: '3:00 PM',
      location: 'Conference Room B',
      attendees: 23
    },
    {
      id: 2,
      title: 'Coding Competition',
      date: '2024-01-22',
      time: '10:00 AM',
      location: 'Computer Lab 1',
      attendees: 67
    },
    {
      id: 3,
      title: 'Alumni Meet & Greet',
      date: '2024-01-25',
      time: '5:00 PM',
      location: 'Main Hall',
      attendees: 120
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Community & Events</h1>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus size={18} />
            <span>Create Post</span>
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Calendar size={18} />
            <span>New Event</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Feed */}
        <div className="lg:col-span-3">
          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {[
                  { id: 'feed', label: 'Community Feed', count: posts.length },
                  { id: 'events', label: 'Events', count: upcomingEvents.length },
                  { id: 'photos', label: 'Photo Gallery', count: 24 }
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
          </div>

          {/* Posts Feed */}
          {activeTab === 'feed' && (
            <div className="space-y-6">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">SJ</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{post.author}</h3>
                        <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                      </div>
                      {post.type === 'event' && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                          Event
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h2>
                    <p className="text-gray-700 mb-4">{post.description}</p>

                    {post.type === 'event' && (
                      <div className="bg-blue-50 rounded-lg p-4 mb-4">
                        <div className="flex items-center space-x-6 text-sm text-blue-700">
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{new Date(post.date).toLocaleDateString()} at {post.time}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={16} />
                            <span>{post.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users size={16} />
                            <span>{post.attendees} attending</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {post.image && (
                      <div className="mb-4">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                          <Heart size={18} />
                          <span>{post.likes} likes</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                          <MessageCircle size={18} />
                          <span>{post.comments} comments</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                          <Share2 size={18} />
                          <span>Share</span>
                        </button>
                      </div>
                      {post.type === 'event' && (
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                          <Bell size={16} />
                          <span>Notify Students</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                      <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users size={16} />
                          <span>{event.attendees} registered</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200 transition-colors">
                        Edit
                      </button>
                      <button className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm hover:bg-green-200 transition-colors">
                        Notify
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Photo Gallery Tab */}
          {activeTab === 'photos' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div key={index} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={`https://images.pexels.com/photos/${3184292 + index}/pexels-photo-${3184292 + index}.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1`}
                      alt={`Gallery image ${index}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors flex items-center space-x-3">
                <Camera size={18} />
                <span>Upload Photos</span>
              </button>
              <button className="w-full p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors flex items-center space-x-3">
                <Video size={18} />
                <span>Upload Video</span>
              </button>
              <button className="w-full p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors flex items-center space-x-3">
                <Calendar size={18} />
                <span>Create Event</span>
              </button>
            </div>
          </div>

          {/* Event Calendar */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {upcomingEvents.slice(0, 3).map((event) => (
                <div key={event.id} className="p-3 border border-gray-200 rounded-lg">
                  <h4 className="font-medium text-gray-900 text-sm">{event.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(event.date).toLocaleDateString()} • {event.time}
                  </p>
                  <p className="text-xs text-blue-600 mt-1">{event.attendees} attending</p>
                </div>
              ))}
            </div>
          </div>

          {/* Engagement Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Engagement</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Posts</span>
                <span className="font-semibold text-gray-900">24</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Total Likes</span>
                <span className="font-semibold text-gray-900">1,256</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Comments</span>
                <span className="font-semibold text-gray-900">389</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Event Attendance</span>
                <span className="font-semibold text-green-600">92%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;