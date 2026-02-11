import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({
  children,
  requireAuth = false,
  publicOnly = false
}) {
  const { user } = useAuth();

  // Redirect halaman login jika user belum login
  if (requireAuth && !user) {
    return <Navigate to="/login" replace />;
  }

  // Jika sudah login redirect halaman home
  if (publicOnly && user) {
    return <Navigate to="/home" replace />;
  }

  return children;
}