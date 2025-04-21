import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import DashboardHome from './DashboardHome'
import '../../styles/dashboard/Dashboard.css'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home')
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const tabs = [
    { id: 'home', label: 'Home', path: '' },
    { id: 'inventory', label: 'Inventory', path: 'inventory' },
    { id: 'equipment', label: 'Equipment', path: 'equipment' },
    { id: 'maintenance', label: 'Maintenance', path: 'maintenance' },
    { id: 'users', label: 'Users', path: 'users' },
    { id: 'reports', label: 'Reports', path: 'reports' },
  ]

  const handleSignOut = async () => {
    try {
      await signOut()
      navigate('/login')
    } catch (error) {
      console.error('Error signing out:', error.message)
    }
  }

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">
          <h2>Lab Manager</h2>
        </div>
        <nav className="vertical-tabs">
          {tabs.map(tab => (
            <Link
              key={tab.id}
              to={tab.path}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
        <div className="user-section">
          <p className="user-email">{user?.email}</p>
          <button onClick={handleSignOut} className="sign-out-button">
            Sign Out
          </button>
        </div>
      </div>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          {/* Add other routes as we build them */}
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard 