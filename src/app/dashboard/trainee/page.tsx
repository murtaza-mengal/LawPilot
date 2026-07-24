import ProtectedRoute from "@/components/ProtectedRoute";
import TraineeDashboardContent from "@/components/TraineeDashboardContent";

export default function TraineeDashboard() {
  return (
    <ProtectedRoute allowedRole="Trainee">
      <TraineeDashboardContent />
    </ProtectedRoute>
  );
}