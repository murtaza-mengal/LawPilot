"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type ProtectedRouteProps = {
  children: React.ReactNode;
  allowedRole: string;
};

export default function ProtectedRoute({
  children,
  allowedRole,
}: ProtectedRouteProps) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("lawpilotUser");

    if (!storedUser) {
      router.replace("/login");
      return;
    }

    try {
      const user = JSON.parse(storedUser);

      if (user.role?.toLowerCase() !== allowedRole.toLowerCase()) {
        router.replace("/dashboard");
        return;
      }

      setAuthorized(true);
    } catch {
      sessionStorage.removeItem("lawpilotUser");
      router.replace("/login");
    }
  }, [allowedRole, router]);

  if (!authorized) {
    return <p>Checking access...</p>;
  }

  return <>{children}</>;
}