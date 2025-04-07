import CustomerDashboard from '@/components/customer/CustomerDashboard'
import ProtectedRoute from '@/components/auth/ProtectedRoute'

export default function CustomerAreaPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <CustomerDashboard />
      </div>
    </ProtectedRoute>
  )
} 