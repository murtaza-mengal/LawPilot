import ProtectedRoute from "@/components/ProtectedRoute";

export default function CLIDashboard() {
  return (
    <ProtectedRoute allowedRole="CLI">
      <main>
        <h1>Welcome CLI</h1>
      </main>
    </ProtectedRoute>
  );
}