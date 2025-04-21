import { useAuth } from '../../contexts/AuthContext'
import '../../styles/dashboard/DashboardHome.css'

const DashboardHome = () => {
  const { user } = useAuth()

  return (
    <div className="dashboard-home">
      <div className="welcome-content">
        <h2>User ID: {user?.id}</h2>
      </div>
    </div>
  )
}

export default DashboardHome 