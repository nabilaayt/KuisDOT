import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({
  children,
  requireAuth = false,
  publicOnly = false
}) {
  const { user } = useAuth();

  if (requireAuth && !user) {
    return <Navigate to="/login" replace />;
  }

  if (publicOnly && user) {
    return <Navigate to="/home" replace />;
  }

  return children;
}