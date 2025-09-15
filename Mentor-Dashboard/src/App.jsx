import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Profile from './components/Profile';
import StudentManagement from './components/StudentManagement';
import Assignments from './components/Assignments';
import Attendance from './components/Attendance';
import Community from './components/Community';
import RiskAnalysis from './components/RiskAnalysis';
import Communication from './components/Communication';
import Reports from './components/Reports';
import Support from './components/Support';

function App() {
  const [activeTab, setActiveTab] = useState('profile');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <Profile />;
      case 'students':
        return <StudentManagement />;
      case 'assignments':
        return <Assignments />;
      case 'attendance':
        return <Attendance />;
      case 'community':
        return <Community />;
      case 'risk-analysis':
        return <RiskAnalysis />;
      case 'communication':
        return <Communication />;
      case 'reports':
        return <Reports />;
      case 'support':
        return <Support />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;