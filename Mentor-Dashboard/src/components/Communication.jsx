import React, { useState } from 'react';
import { 
  MessageSquare, 
  Send, 
  Phone, 
  Video, 
  Users, 
  Search, 
  Plus,
  Paperclip,
  Smile,
  MoreVertical
} from 'lucide-react';

const Communication = () => {
  const [activeChat, setActiveChat] = useState(1);
  const [messageText, setMessageText] = useState('');
  const [activeTab, setActiveTab] = useState('individual');

  const conversations = [
    {
      id: 1,
      type: 'student',
      name: 'Alex Johnson',
      lastMessage: 'Thank you for the feedback on my project!',
      time: '10:30 AM',
      unread: 0,
      online: true,
      avatar: 'AJ'
    },
    {
      id: 2,
      type: 'guardian',
      name: 'Michael Johnson (Parent)',
      lastMessage: 'Could we schedule a meeting to discuss Alex\'s progress?',
      time: '9:15 AM',
      unread: 2,
      online: false,
      avatar: 'MJ'
    },
    {
      id: 3,
      type: 'student',
      name: 'Sarah Chen',
      lastMessage: 'I have a question about the assignment deadline',
      time: 'Yesterday',
      unread: 1,
      online: true,
      avatar: 'SC'
    }
  ];

  const groupChats = [
    {
      id: 1,
      name: 'CS 2024 - Data Structures',
      members: 45,
      lastMessage: 'Assignment due date extended to Friday',
      time: '2:30 PM',
      unread: 3,
      avatar: 'DS'
    },
    {
      id: 2,
      name: 'Machine Learning Project Group',
      members: 12,
      lastMessage: 'Great work on the presentation everyone!',
      time: '1:45 PM',
      unread: 0,
      avatar: 'ML'
    },
    {
      id: 3,
      name: 'Computer Science Faculty',
      members: 8,
      lastMessage: 'Meeting scheduled for tomorrow at 3 PM',
      time: '11:20 AM',
      unread: 1,
      avatar: 'CS'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Alex Johnson',
      text: 'Hi Dr. Johnson, I wanted to thank you for the detailed feedback on my data structures project.',
      time: '10:25 AM',
      isMe: false
    },
    {
      id: 2,
      sender: 'Me',
      text: 'You\'re welcome, Alex! Your implementation was really well thought out. Keep up the good work!',
      time: '10:27 AM',
      isMe: true
    },
    {
      id: 3,
      sender: 'Alex Johnson',
      text: 'I was wondering if you could help me understand the time complexity analysis better?',
      time: '10:28 AM',
      isMe: false
    },
    {
      id: 4,
      sender: 'Me',
      text: 'Of course! Let\'s schedule a quick meeting this week. Are you free Thursday afternoon?',
      time: '10:29 AM',
      isMe: true
    },
    {
      id: 5,
      sender: 'Alex Johnson',
      text: 'Thank you for the feedback on my project!',
      time: '10:30 AM',
      isMe: false
    }
  ];

  const sendMessage = () => {
    if (messageText.trim()) {
      // Add message sending logic here
      setMessageText('');
    }
  };

  return (
    <div className="h-[calc(100vh-12rem)] flex bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Sidebar */}
      <div className="w-80 border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-gray-900">Messages</h1>
            <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus size={18} />
            </button>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('individual')}
            className={`flex-1 py-3 px-4 text-sm font-medium ${
              activeTab === 'individual'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Individual
          </button>
          <button
            onClick={() => setActiveTab('groups')}
            className={`flex-1 py-3 px-4 text-sm font-medium ${
              activeTab === 'groups'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Groups
          </button>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'individual' && (
            <div>
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setActiveChat(conversation.id)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                    activeChat === conversation.id ? 'bg-blue-50 border-blue-200' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">{conversation.avatar}</span>
                      </div>
                      {conversation.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900 truncate">
                          {conversation.name}
                        </h3>
                        <span className="text-xs text-gray-500">{conversation.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                        {conversation.unread > 0 && (
                          <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-1 ml-2">
                            {conversation.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'groups' && (
            <div>
              {groupChats.map((group) => (
                <div
                  key={group.id}
                  className="p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{group.avatar}</span>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-gray-900 truncate">{group.name}</h3>
                        <span className="text-xs text-gray-500">{group.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Users size={12} className="text-gray-400" />
                          <span className="text-xs text-gray-500">{group.members} members</span>
                        </div>
                        {group.unread > 0 && (
                          <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-1">
                            {group.unread}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 truncate mt-1">{group.lastMessage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {activeChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">AJ</span>
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">Alex Johnson</h2>
                  <p className="text-sm text-green-600">Online</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  <Phone size={20} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  <Video size={20} />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md ${message.isMe ? 'order-2' : 'order-1'}`}>
                    <div
                      className={`px-4 py-2 rounded-lg ${
                        message.isMe
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 px-2">{message.time}</p>
                  </div>
                  {!message.isMe && (
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-2 order-0">
                      <span className="text-white font-semibold text-xs">AJ</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  <Paperclip size={20} />
                </button>
                
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Type a message..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  />
                </div>
                
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  <Smile size={20} />
                </button>
                
                <button
                  onClick={sendMessage}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageSquare size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
              <p className="text-gray-600">Choose a conversation from the sidebar to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Communication;