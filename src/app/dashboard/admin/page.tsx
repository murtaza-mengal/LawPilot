import ProtectedRoute from "@/components/ProtectedRoute";
import AdminDashboardContent from "@/components/AdminDashboardContent";

export default function AdminDashboard() {
  return (
    <ProtectedRoute allowedRole="Admin">
      <AdminDashboardContent />
    </ProtectedRoute>
  );
}