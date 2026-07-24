import ProtectedRoute from "@/components/ProtectedRoute";

export default function InstructorDashboard() {
  return (
    <ProtectedRoute allowedRole="Instructor">
      <main>
        <h1>Welcome Instructor</h1>
      </main>
    </ProtectedRoute>
  );
}